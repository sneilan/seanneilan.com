import { vi } from 'vitest';
import type React from 'react';

// Honest, fully-typed fakes for the canvas mouse handlers' input. Rather than
// assert a partial object into React.MouseEvent, we build a real jsdom
// <canvas> (a genuine EventTarget & HTMLCanvasElement) and a complete synthetic
// event whose every required field is populated — so tsc checks the shape for
// real and the coord/handler code reads honest values.

type CanvasRect = { left: number; top: number; width: number; height: number };

// A real canvas whose intrinsic buffer size (width/height) can differ from its
// layout rect, so tests can exercise the DPR scale factor in getCanvasXY.
export function makeCanvas(opts: {
  width: number;
  height: number;
  rect: CanvasRect;
}): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = opts.width;
  canvas.height = opts.height;
  const { left, top, width, height } = opts.rect;
  canvas.getBoundingClientRect = () => new DOMRect(left, top, width, height);
  return canvas;
}

export type CanvasMouseInit = Partial<{
  button: number;
  clientX: number;
  clientY: number;
  shiftKey: boolean;
}>;

export function makeCanvasMouseEvent(
  canvas: HTMLCanvasElement,
  init: CanvasMouseInit = {},
): React.MouseEvent<HTMLCanvasElement> {
  const view: React.AbstractView = {
    styleMedia: { type: 'screen', matchMedium: () => false },
    document,
  };
  return {
    nativeEvent: new MouseEvent('mousedown'),
    currentTarget: canvas,
    target: canvas,
    bubbles: true,
    cancelable: true,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: true,
    preventDefault: vi.fn(),
    isDefaultPrevented: () => false,
    stopPropagation: vi.fn(),
    isPropagationStopped: () => false,
    persist: vi.fn(),
    timeStamp: 0,
    type: 'mousedown',
    detail: 0,
    view,
    altKey: false,
    button: init.button ?? 0,
    buttons: 0,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    ctrlKey: false,
    getModifierState: () => false,
    metaKey: false,
    movementX: 0,
    movementY: 0,
    pageX: 0,
    pageY: 0,
    relatedTarget: null,
    screenX: 0,
    screenY: 0,
    shiftKey: init.shiftKey ?? false,
  };
}
