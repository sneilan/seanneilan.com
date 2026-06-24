import { useEffect, useRef } from 'react';
import { renderDesignToCanvas, type PreviewOptions } from '../utils/designPreview';
import type { DesignJSON } from '../store/gridStore';

// A canvas that renders a DesignJSON as a thumbnail. Re-renders when the design
// or size changes. Used for gallery cards and training-example previews.
export function DesignThumbnail({
  design,
  size = 96,
  className,
}: {
  design: DesignJSON;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const opts: PreviewOptions = { maxSize: size };
    renderDesignToCanvas(ref.current, design, opts);
  }, [design, size]);
  return <canvas ref={ref} className={className} style={{ imageRendering: 'pixelated' }} />;
}
