let lockCount = 0;
let savedScrollY = 0;
let savedStyles = null;
let touchListener = null;

function allowTouchScroll(event) {
  const scroller = event.target?.closest?.("[data-scroll-lock-allow]");
  if (!scroller) return false;

  const canScroll = scroller.scrollHeight > scroller.clientHeight + 1;
  if (!canScroll) return false;

  const scrollingUp = event.touches[0].clientY > scroller._touchStartY;
  const atTop = scroller.scrollTop <= 0;
  const atBottom =
    scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;

  if ((scrollingUp && atTop) || (!scrollingUp && atBottom)) {
    return false;
  }

  return true;
}

function onTouchStart(event) {
  const scroller = event.target?.closest?.("[data-scroll-lock-allow]");
  if (scroller && event.touches[0]) {
    scroller._touchStartY = event.touches[0].clientY;
  }
}

function onTouchMove(event) {
  if (allowTouchScroll(event)) return;
  event.preventDefault();
}

function readScrollY() {
  return (
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function writeScrollY(y) {
  const apply = () => {
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y;
    window.scrollTo(0, y);
  };

  apply();
  window.requestAnimationFrame(apply);
}

export function lockBodyScroll() {
  if (typeof document === "undefined") {
    return () => {};
  }

  if (lockCount === 0) {
    const { body, documentElement } = document;
    savedScrollY = readScrollY();
    savedStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
      htmlOverflow: documentElement.style.overflow,
    };

    const gap = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (gap > 0) {
      body.style.paddingRight = `${gap}px`;
    }
    body.dataset.bodyScrollLocked = "true";

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    touchListener = onTouchMove;
    document.addEventListener("touchmove", touchListener, { passive: false });
  }

  lockCount += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    unlockBodyScroll();
  };
}

export function unlockBodyScroll() {
  if (lockCount === 0) return;

  lockCount -= 1;
  if (lockCount > 0 || !savedStyles) return;

  const { body, documentElement } = document;
  body.style.overflow = savedStyles.overflow;
  body.style.position = savedStyles.position;
  body.style.top = savedStyles.top;
  body.style.left = savedStyles.left;
  body.style.right = savedStyles.right;
  body.style.width = savedStyles.width;
  body.style.paddingRight = savedStyles.paddingRight;
  documentElement.style.overflow = savedStyles.htmlOverflow;
  delete body.dataset.bodyScrollLocked;

  document.removeEventListener("touchstart", onTouchStart);
  if (touchListener) {
    document.removeEventListener("touchmove", touchListener);
    touchListener = null;
  }

  const y = savedScrollY;
  savedStyles = null;
  savedScrollY = 0;
  writeScrollY(y);
}

export function getBodyScrollLockCount() {
  return lockCount;
}

export function resetBodyScrollLockForTests() {
  if (typeof document !== "undefined" && lockCount > 0 && savedStyles) {
    const { body, documentElement } = document;
    body.style.overflow = savedStyles.overflow;
    body.style.position = savedStyles.position;
    body.style.top = savedStyles.top;
    body.style.left = savedStyles.left;
    body.style.right = savedStyles.right;
    body.style.width = savedStyles.width;
    body.style.paddingRight = savedStyles.paddingRight;
    documentElement.style.overflow = savedStyles.htmlOverflow;
    delete body.dataset.bodyScrollLocked;
    document.removeEventListener("touchstart", onTouchStart);
    if (touchListener) {
      document.removeEventListener("touchmove", touchListener);
    }
  }

  lockCount = 0;
  savedScrollY = 0;
  savedStyles = null;
  touchListener = null;
}
