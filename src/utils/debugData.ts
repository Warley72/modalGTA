import { isEnvBrowser } from "./misc";

interface DebugEvent<T = unknown> {
  name: string;
  payload: T;
}

export const debugData = <P>(events: DebugEvent<P>[]): void => {
  if (import.meta.env.MODE === "development" && isEnvBrowser()) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: {
              name: event.name,
              payload: event.payload,
            },
          })
        );
      });
    }
  }
};
