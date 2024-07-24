import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
