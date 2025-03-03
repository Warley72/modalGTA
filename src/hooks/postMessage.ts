import { useEffect, useRef } from "react";
import { noop } from "../utils/misc";

interface NuiMessageData<T = unknown> {
  name: string;
  payload: T;
}

type NuiHandlerSignature<T> = (payload: T) => void;

export const postMessage = <T = unknown>(name: string, handler: NuiHandlerSignature<T>) => {
  const savedHandler = useRef<NuiHandlerSignature<T>>(noop);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent<NuiMessageData<T>>) => {
      const { name: eventAction, payload } = event.data;

      if (savedHandler.current) {
        if (eventAction === name) {
          savedHandler.current(payload);
        }
      }
    };

    window.addEventListener("message", eventListener);

    return () => window.removeEventListener("message", eventListener);
  }, [name]);
};
