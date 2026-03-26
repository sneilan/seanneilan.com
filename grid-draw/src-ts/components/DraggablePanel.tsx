import { useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface DraggablePanelProps {
  title: string;
  defaultPosition: { x: number; y: number };
  children: React.ReactNode;
  className?: string;
}

export function DraggablePanel({
  title,
  defaultPosition,
  children,
  className
}: DraggablePanelProps) {
  const [position, setPosition] = useState(defaultPosition);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const newX = Math.max(0, event.clientX - dragOffset.current.x);
      const newY = Math.max(0, event.clientY - dragOffset.current.y);

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [position]);

  return (
    <div
      className={cn(
        "fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200",
        className
      )}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className="px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg"
        onMouseDown={handleMouseDown}
      >
        {title}
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  );
}
