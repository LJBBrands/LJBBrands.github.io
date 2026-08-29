import { useEffect } from "react";
import { lockBodyScroll } from "../utils/bodyScrollLock";

export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    return lockBodyScroll();
  }, [active]);
}
