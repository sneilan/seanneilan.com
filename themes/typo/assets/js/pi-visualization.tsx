import React, { useRef, useEffect, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";

const CANVAS_SIZE = 400;
const RADIUS = CANVAS_SIZE / 2;
const CENTER_X = CANVAS_SIZE / 2;
const CENTER_Y = CANVAS_SIZE / 2;
const POINTS_PER_FRAME = 10;

const PiVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const totalRef = useRef<number>(0);
  const insideRef = useRef<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [total, setTotal] = useState(0);
  const [piEstimate, setPiEstimate] = useState<number | null>(null);

  const drawBackground = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.strokeStyle = "#888888";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, RADIUS, 0, 2 * Math.PI);
    ctx.strokeStyle = "#888888";
    ctx.lineWidth = 1;
    ctx.stroke();
  }, []);

  const step = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    for (let i = 0; i < POINTS_PER_FRAME; i++) {
      const x = Math.random() * CANVAS_SIZE;
      const y = Math.random() * CANVAS_SIZE;
      const dx = x - CENTER_X;
      const dy = y - CENTER_Y;
      const inside = dx * dx + dy * dy <= RADIUS * RADIUS;
      totalRef.current += 1;
      if (inside) insideRef.current += 1;
      ctx.fillStyle = inside ? "#e05c5c" : "#5c8ae0";
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      ctx.fill();
    }
    const t = totalRef.current;
    setTotal(t);
    setPiEstimate(t > 0 ? (4 * insideRef.current) / t : null);
    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => { drawBackground(); }, [drawBackground]);

  useEffect(() => {
    if (isRunning) {
      rafRef.current = requestAnimationFrame(step);
    } else {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isRunning, step]);

  const handleReset = () => {
    setIsRunning(false);
    totalRef.current = 0;
    insideRef.current = 0;
    setTotal(0);
    setPiEstimate(null);
    drawBackground();
  };

  const btnStyle: React.CSSProperties = {
    marginRight: "0.5rem", padding: "0.3rem 0.8rem",
    fontFamily: "Monaspace, monospace", fontSize: "0.9em", cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", margin: "1.5rem 0" }}>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE}
        style={{ border: "1px solid #888", maxWidth: "100%" }} />
      <div style={{ fontFamily: "Monaspace, monospace", fontSize: "1em" }}>
        {piEstimate !== null
          ? `π ≈ ${piEstimate.toFixed(6)}  (${total.toLocaleString()} points)`
          : `Drop points to estimate π`}
      </div>
      <div>
        <button style={btnStyle} onClick={() => setIsRunning(p => !p)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button style={btnStyle} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const container = document.getElementById("pi-vis-root");
if (container) createRoot(container).render(<PiVisualization />);
