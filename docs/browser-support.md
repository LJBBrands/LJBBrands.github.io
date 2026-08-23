# Browser support

## Declared policy

The site targets current evergreen desktop browsers and:

- **Safari 15.4+**
- **iOS Safari 15.4+**

Those versions introduced `svh` / `dvh` / `lvh`. Older Safari still receives `vh` fallbacks so layout remains intentional instead of dropping an entire `min()` declaration.

React, Tailwind, and Framer Motion versions are unchanged in the WebKit compatibility pass.

## Viewport units

| Token                       | Fallback | Progressive enhancement       |
| --------------------------- | -------- | ----------------------------- |
| Dialog max-height (mobile)  | `92vh`   | `svh`, minus safe-area insets |
| Dialog max-height (desktop) | `90vh`   | `dvh`, minus safe-area insets |
| Showcase device scale       | `100vh`  | `100dvh`                      |

`svh` is preferred for the mobile dialog so a visible iOS toolbar does not clip the sheet. `dvh` is used for showcase scaling so short viewports and toolbar collapse still keep the device frame on-screen.

## Safe areas

`viewport-fit=cover` is set on the homepage and static legal/404 pages. CSS uses:

- `env(safe-area-inset-top, 0px)`
- `env(safe-area-inset-right, 0px)`
- `env(safe-area-inset-bottom, 0px)`
- `env(safe-area-inset-left, 0px)`

Applied to the fixed header, open mobile menu, dialog root, dialog scroll area, and the site footer band. The `0px` fallback keeps spacing unchanged on devices without insets.

## Scroll locking

Menu and project dialogs share a reference-counted body scroll lock. On iPhone/iPad Safari the lock uses `position: fixed` plus the original `scrollY`, then restores that position on release. Nested locks (menu + dialog) do not clobber each other.

## Accessibility

- Project dialogs portal to `document.body`, trap focus, handle Escape, restore the trigger, and mark `#site-content` `inert` (with a tabindex/`aria-hidden` fallback).
- The mobile menu moves focus to the first item on open and restores the Menu button on Escape or the Close control. Section navigation does not steal focus back to the trigger.
- `scrollIntoView` uses `behavior: "auto"` when `prefers-reduced-motion: reduce` is active. Existing Framer Motion reduced-motion handling is unchanged.

## CSS prefixes

Narrow `-webkit-` fallbacks are limited to properties still required by Safari 15.4+:

- `-webkit-backdrop-filter`
- `-webkit-mask-image`
- `-webkit-user-select`

Obsolete prefixes such as `-webkit-overflow-scrolling` are not added.

## Remaining physical checks

Automated WebKit coverage cannot fully replace a device:

- iPhone with Dynamic Island / notch, home indicator, and landscape safe areas
- iPad Safari split view and Stage Manager
- Toolbar show/hide while a project dialog is open
- Hardware keyboard focus order in VoiceOver
