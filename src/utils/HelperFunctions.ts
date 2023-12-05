import { sections } from "../pages/Portfolio";
import { stateContextType } from "./ContextProvider";

/**
 * Adds keyboard interaction for project view.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param context Global context object.
 */
export function exitProjectView(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType
) {
  if (event.key === "Escape") {
    event.stopPropagation(); // Prevents modal not found error.
    if (openedRef.current === "Projects") {
      document
        .getElementById("Close Button")
        ?.dispatchEvent(context.clickEvent);
    }
  }
}

/**
 * Keeps focus within the portfolio when utilizing tab navigation.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 */
export function focusTrap(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>
) {
  if (event.shiftKey && event.key === "Tab") {
    if (openedRef.current !== "Home") {
      if (document.getElementById("Home") === document.activeElement) {
        event.preventDefault();
        if (openedRef.current === "Contact")
          document.getElementById("Form Submit Button")?.focus();
        else document.getElementById("Contact")?.focus();
      }
    } else {
      if (
        document.getElementById("Grace Hopper Quote") === document.activeElement
      ) {
        event.preventDefault();
        document.getElementById("Contact")?.focus();
      }
    }
  } else if (event.key === "Tab") {
    if (openedRef.current !== "Contact") {
      if (document.getElementById("Contact") === document.activeElement) {
        event.preventDefault();
        if (openedRef.current === "Home")
          document.getElementById("Grace Hopper Quote")?.focus();
        else document.getElementById("Home")?.focus();
      }
    } else {
      if (
        document.getElementById("Form Submit Button") === document.activeElement
      ) {
        event.preventDefault();
        document.getElementById("Home")?.focus();
      }
    }
  }
}

/**
 * Navigates the accordion in response to keyboard events.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param setOpened A function that sets which accordion section is opened.
 */
export function sectionNavigation(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  setOpened: (section: sections) => void
) {
  switch (openedRef.current) {
    case "Home":
      if (event.key === "ArrowDown") {
        setOpened("About");
      }
      break;

    case "About":
      if (event.key === "ArrowUp") {
        setOpened("Home");
      } else if (event.key === "ArrowDown") {
        setOpened("Projects");
      }
      break;

    case "Projects":
      if (event.key === "ArrowUp") {
        setOpened("About");
      } else if (event.key === "ArrowDown") {
        setOpened("Testimonials");
      }
      break;

    case "Testimonials":
      if (event.key === "ArrowUp") {
        setOpened("Projects");
      } else if (event.key === "ArrowDown") {
        setOpened("Contact");
      }
      break;

    case "Contact":
      if (event.key === "ArrowUp") {
        setOpened("Testimonials");
      }
      break;
  }
}

/**
 * Navigates the about section tabs in response to keyboard events.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param context Global context object.
 */
export function aboutTabsNavigation(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType
) {
  if (openedRef.current === "About") {
    switch (context.aboutOpenedRef.current) {
      case "Profile":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Philosophy Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Bio Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Bio":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Profile Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Philosophy Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Philosophy":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Bio Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Profile Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;
    }
  }
}