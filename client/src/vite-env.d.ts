/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: string,
    eventName: string,
    parameters?: Record<string, unknown>
  ) => void;
}
