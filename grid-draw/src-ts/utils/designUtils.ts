import type { DesignJSON } from '../store/gridStore';

/** True when a design has nothing drawable — e.g. an empty/failed prediction. */
export function isEmptyDesign(d: DesignJSON): boolean {
  return (d.cells?.length ?? 0) + (d.lines?.length ?? 0) + (d.rects?.length ?? 0) + (d.texts?.length ?? 0) === 0;
}
