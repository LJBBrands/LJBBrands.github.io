const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function supportsInert() {
  return typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
}

function disableFocusable(element) {
  element.querySelectorAll(FOCUSABLE).forEach((node) => {
    if (!node.hasAttribute("data-inert-tabindex")) {
      node.setAttribute(
        "data-inert-tabindex",
        node.getAttribute("tabindex") ?? "",
      );
    }
    node.setAttribute("tabindex", "-1");
  });
}

function restoreFocusable(element) {
  element.querySelectorAll("[data-inert-tabindex]").forEach((node) => {
    const previous = node.getAttribute("data-inert-tabindex");
    if (previous === "") {
      node.removeAttribute("tabindex");
    } else {
      node.setAttribute("tabindex", previous);
    }
    node.removeAttribute("data-inert-tabindex");
  });
}

export function setInert(element, enabled) {
  if (!element) return;

  if (supportsInert()) {
    element.inert = enabled;
    if (enabled) {
      element.setAttribute("aria-hidden", "true");
    } else {
      element.removeAttribute("aria-hidden");
    }
    return;
  }

  if (enabled) {
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("data-inert-fallback", "true");
    element.style.pointerEvents = "none";
    disableFocusable(element);
    return;
  }

  element.removeAttribute("aria-hidden");
  element.removeAttribute("data-inert-fallback");
  element.style.pointerEvents = "";
  restoreFocusable(element);
}
