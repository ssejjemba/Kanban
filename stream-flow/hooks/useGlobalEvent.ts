import { RefObject } from "react";
import useEvent from "./useEvent";
import isClient from "../utils/isClient";
import { CallbackSetter } from "../models/types";
import noop from "../utils/noop";

/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 */
const useGlobalEvent = <TEvent extends Event>(
  eventName: keyof WindowEventMap,
  opts?: AddEventListenerOptions
) => {
  if (!isClient) {
    return noop as CallbackSetter<TEvent>;
  }

  const target = { current: window } as unknown as RefObject<HTMLElement>; // that's a bit of a hack but it works
  return useEvent<TEvent>(target, eventName, opts);
};

export default useGlobalEvent;
