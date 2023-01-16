import { RefObject } from "react";
import useTouchEvents from "./useTouchEvents";
import useTouchState from "./useTouchState";

/**
 * Returns an array where the first item is the touch state from the `useTouchState` hook and the second item
 * is the object of callback setters from the `useTouchEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useTouch = <TElement extends HTMLElement>(
  targetRef: RefObject<TElement> | null = null
) => {
  const state = useTouchState<TElement>(targetRef as RefObject<TElement>);
  const events = useTouchEvents<TElement>(targetRef as RefObject<TElement>);

  return [state, events];
};

export default useTouch;
