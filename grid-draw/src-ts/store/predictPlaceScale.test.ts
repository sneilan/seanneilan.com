import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, serializeSelection, getSelectionBoundsAll } from './gridStore';
import { isSelectedType } from './gridHelpers';
import { CELL_UNITS, type DesignJSON } from './types';
import { makeGrid } from './testGrid';

/**
 * Replicates: draw a single square in 1x grid, Predict from Selection, and the
 * placed prediction comes out as an 8x8-cell cube (8x too big / "set to 1/8").
 *
 * The flow mirrored here is useDrawingSession.predictFromSelection:
 *   serializeSelection(input) -> model -> placeDesign(out, inputOrigin).
 * coordModel.predictDesign returned fine-unit coordinates but NO `sub` field,
 * and placeDesign treats a missing `sub` as a legacy whole-cell design,
 * scaling every coordinate by CELL_UNITS/(sub ?? 1) = 8 — so even a perfect
 * identity prediction landed 8x larger than the input. predictDesign now
 * stamps `sub` (asserted in ml/coordModel.int.test.ts); this test pins the
 * placement side: a sub-stamped prediction keeps its scale.
 */
describe('predict-from-selection placement scale', () => {
  beforeEach(() => {
    useGridStore.getState().resetHistory();
  });

  it('places an identity prediction at the same size as the drawn 1x square', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, tool: 'draw', colorIdx: 0, subdivision: 1, selectedItems: [] });

    // Draw one 1x square at the origin: ONE atomic record of size CELL_UNITS.
    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();
    expect(grid.get_square_count()).toBe(1);

    // Select the square, as the user does before hitting Predict.
    useGridStore.getState().selectAll();
    const items = useGridStore.getState().selectedItems;
    const input = serializeSelection(grid, items);
    expect(input?.sub).toBe(CELL_UNITS); // the input side IS stamped correctly

    // A perfect model: every input cell predicted unchanged. Built with the
    // exact return shape of coordModel.predictDesign, `sub` stamp included.
    const cells = (input?.cells ?? []).map((c) => [...c]);
    let maxR = 0, maxC = 0;
    for (const [r, c] of cells) { maxR = Math.max(maxR, r); maxC = Math.max(maxC, c); }
    const out: DesignJSON = { w: maxC + 1, h: maxR + 1, cells, lines: [], rects: [], texts: [], sub: CELL_UNITS };

    // Place it the way predictFromSelection does: anchored at the input origin.
    const bounds = getSelectionBoundsAll(items, grid);
    useGridStore.getState().placeDesign(out, bounds?.minRow ?? 0, bounds?.minCol ?? 0);

    // placeDesign auto-selects what it placed. An identity prediction of a 1x
    // square must land as ONE square spanning exactly one whole cell (CELL_UNITS
    // fine units per side), not an 8x8 block of whole cells.
    const placed = useGridStore.getState().selectedItems.filter(isSelectedType('cell'));
    expect(placed).toHaveLength(1);
    const pb = getSelectionBoundsAll(placed, grid);
    expect(pb).toBeTruthy();
    expect(pb!.maxRow - pb!.minRow + 1).toBe(CELL_UNITS);
    expect(pb!.maxCol - pb!.minCol + 1).toBe(CELL_UNITS);
  });
});
