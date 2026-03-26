/**
 * Anywidget model interface for bidirectional Python-JavaScript communication.
 */
export interface AnywidgetModel {
  /** Get a property value by name */
  get<T = unknown>(name: string): T;

  /** Set a property value by name */
  set(name: string, value: unknown): void;

  /** Save changes to sync with Python */
  save_changes(): void;

  /** Listen for property changes */
  on(event: string, callback: () => void): void;

  /** Remove event listener */
  off(event: string, callback: () => void): void;
}

/**
 * Anywidget render context passed to the render function.
 */
export interface AnywidgetRenderContext {
  /** The anywidget model for state synchronization */
  model: AnywidgetModel;

  /** The HTML element to render into */
  el: HTMLElement;
}
