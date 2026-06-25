//! Pure buffer index math for the flat shape arrays (lines: stride 5, rects:
//! stride 6). Extracted from the `#[wasm_bindgen]` methods so the shipping
//! index/splice logic can be unit-tested on the host (`cargo test`) without a
//! canvas. `shapes.rs` delegates to these; the public methods only add
//! self.render().

/// Insert `record` at shape index `idx`, shifting later records up. `idx` is
/// clamped to the count, so inserting at the count appends. Mirrors the
/// index-stable inverse of `delete_record`.
pub(crate) fn insert_record(buf: &mut Vec<i32>, stride: usize, idx: usize, record: &[i32]) {
    debug_assert_eq!(record.len(), stride);
    let count = buf.len() / stride;
    let at = idx.min(count) * stride;
    buf.splice(at..at, record.iter().copied());
}

/// Remove the record at shape index `idx`, shifting later records down. A no-op
/// if `idx` is out of range.
pub(crate) fn delete_record(buf: &mut Vec<i32>, stride: usize, idx: usize) {
    let start = idx * stride;
    if start + stride <= buf.len() {
        buf.drain(start..start + stride);
    }
}

/// Overwrite the first four coords (geometry) of the record at `idx`, leaving
/// any trailing fields (color/fill/outline) untouched. No-op if out of range.
pub(crate) fn set_geom(buf: &mut [i32], stride: usize, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32) {
    let start = idx * stride;
    if start + stride <= buf.len() {
        buf[start] = r1;
        buf[start + 1] = c1;
        buf[start + 2] = r2;
        buf[start + 3] = c2;
    }
}

/// Compute the new normalized corners of a rect after dragging `handle` to
/// (r, c). Handle indices (clockwise from top-left): 0=TL,1=top,2=TR,3=right,
/// 4=BR,5=bottom,6=BL,7=left. Returns (min_r, min_c, max_r, max_c).
pub(crate) fn resize_corners(
    cur_r1: i32, cur_c1: i32, cur_r2: i32, cur_c2: i32,
    handle: u32, r: i32, c: i32,
) -> (i32, i32, i32, i32) {
    let mut min_r = cur_r1.min(cur_r2);
    let mut max_r = cur_r1.max(cur_r2);
    let mut min_c = cur_c1.min(cur_c2);
    let mut max_c = cur_c1.max(cur_c2);

    match handle {
        0 | 1 | 2 => min_r = r,
        4 | 5 | 6 => max_r = r,
        _ => {}
    }
    match handle {
        0 | 6 | 7 => min_c = c,
        2 | 3 | 4 => max_c = c,
        _ => {}
    }

    (min_r.min(max_r), min_c.min(max_c), min_r.max(max_r), min_c.max(max_c))
}

#[cfg(test)]
mod tests {
    use super::*;

    const L: usize = 5; // line stride
    const R: usize = 6; // rect stride

    #[test]
    fn insert_at_index_shifts_later_records() {
        let mut buf = vec![10, 11, 12, 13, 14, /*|*/ 20, 21, 22, 23, 24];
        insert_record(&mut buf, L, 1, &[90, 91, 92, 93, 94]);
        assert_eq!(buf, vec![10, 11, 12, 13, 14, 90, 91, 92, 93, 94, 20, 21, 22, 23, 24]);
    }

    #[test]
    fn insert_at_count_appends() {
        let mut buf = vec![1, 2, 3, 4, 5];
        insert_record(&mut buf, L, 1, &[6, 7, 8, 9, 10]); // idx == count
        assert_eq!(buf.len(), 10);
        assert_eq!(&buf[5..], &[6, 7, 8, 9, 10]);
    }

    #[test]
    fn insert_beyond_count_clamps_to_append() {
        let mut buf = vec![1, 2, 3, 4, 5];
        insert_record(&mut buf, L, 99, &[6, 7, 8, 9, 10]);
        assert_eq!(&buf[5..], &[6, 7, 8, 9, 10]);
    }

    #[test]
    fn delete_then_insert_is_identity() {
        let original = vec![0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
        let mut buf = original.clone();
        let removed: Vec<i32> = buf[L..2 * L].to_vec();
        delete_record(&mut buf, L, 1);
        assert_eq!(buf.len(), 10);
        insert_record(&mut buf, L, 1, &removed);
        assert_eq!(buf, original);
    }

    #[test]
    fn delete_out_of_range_is_noop() {
        let mut buf = vec![1, 2, 3, 4, 5];
        delete_record(&mut buf, L, 9);
        assert_eq!(buf, vec![1, 2, 3, 4, 5]);
    }

    #[test]
    fn set_geom_leaves_trailing_fields() {
        let mut buf = vec![0, 0, 0, 0, /*fill*/ 3, /*outline*/ 4];
        set_geom(&mut buf, R, 0, 1, 2, 8, 9);
        assert_eq!(buf, vec![1, 2, 8, 9, 3, 4]); // fill/outline preserved
    }

    #[test]
    fn resize_normalizes_when_dragged_past_opposite() {
        // Rect (2,2)-(6,6); drag BR handle (4) to (0,0) → should normalize.
        let (r1, c1, r2, c2) = resize_corners(2, 2, 6, 6, 4, 0, 0);
        assert!(r1 <= r2 && c1 <= c2);
        assert_eq!((r1, c1, r2, c2), (0, 0, 2, 2));
    }

    #[test]
    fn resize_top_left_handle_moves_min_corner() {
        let (r1, c1, r2, c2) = resize_corners(2, 2, 6, 6, 0, 3, 4);
        assert_eq!((r1, c1, r2, c2), (3, 4, 6, 6));
    }
}
