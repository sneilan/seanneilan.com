import { cn } from '@/lib/utils';
import { COLORS } from './constants';

/**
 * The row of color swatches used by both the fill and outline pickers. The
 * transparent swatch renders a checkerboard via layered gradients.
 */
export function ColorRow({ activeIdx, onPick, titleFor }: {
  activeIdx: number;
  onPick: (idx: number) => void;
  titleFor: (idx: number, name: string) => string;
}) {
  return (
    <div className="flex gap-1">
      {COLORS.map((c, i) => (
        <button
          key={i}
          onClick={() => onPick(i)}
          title={titleFor(i, c.name)}
          className={cn(
            "w-6 h-6 rounded border-2 transition-all",
            activeIdx === i
              ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500"
              : "border-gray-300 hover:border-gray-400",
            c.hex === '#ffffff' && "shadow-sm"
          )}
          style={{
            backgroundColor: c.hex ?? 'transparent',
            backgroundImage: c.hex === null
              ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
              : undefined,
            backgroundSize: c.hex === null ? '6px 6px' : undefined,
            backgroundPosition: c.hex === null ? '0 0, 0 3px, 3px -3px, -3px 0px' : undefined,
          }}
        />
      ))}
    </div>
  );
}
