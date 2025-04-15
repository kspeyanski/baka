import * as React from "react";

const extractElement = (el: any) => (el && el.current ? el.current.element || el.current : null);

export const usePopup = (
  element: React.Ref<any>,
  anchor: React.Ref<any>,
  options: {
    syncWidth?: boolean;
    align?: {
      anchor?: {
        vertical?: "top" | "center" | "bottom";
        horizontal?: "left" | "center" | "right";
      };
      popup?: {
        vertical?: "top" | "center" | "bottom";
        horizontal?: "left" | "center" | "right";
      };
    };
  } = {}
) => {
  const position = () => {
    const el: HTMLElement = extractElement(element);
    const an: HTMLElement = extractElement(anchor);

    if (el && an) {
      const anRect = an.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const borderWidth = elRect.width - el.offsetWidth;

      let top = 0,
        left = 0,
        width = anRect.width;

      switch (options.align?.anchor?.vertical) {
        case "bottom":
          top = anRect.bottom;
          break;
        case "center":
          top = anRect.top + anRect.height / 2;
          break;
        case "top":
        default:
          break;
      }

      switch (options.align?.anchor?.horizontal) {
        case "right":
          left = anRect.right;
          break;
        case "center":
          left = anRect.left + anRect.width / 2;
          break;
        case "left":
        default:
          left = anRect.left;
          break;
      }

      switch (options.align?.popup?.vertical) {
        case "bottom":
          top -= elRect.height;
          break;
        case "center":
          top -= elRect.height / 2;
          break;
        case "top":
        default:
          break;
      }

      switch (options.align?.popup?.horizontal) {
        case "right":
          left -= elRect.width;
          break;
        case "center":
          left -= elRect.width / 2;
          break;
        case "left":
        default:
          break;
      }

      if (elRect.width > document.body.offsetWidth) {
        width = document.body.offsetWidth - borderWidth;
      } else if (anRect.left + elRect.width > document.body.offsetWidth) {
        left = null;
        el.style.right = "0px";
      }

      el.style.top = `${top}px`;
      el.style.left = left !== null ? `${left + document?.documentElement?.scrollLeft}px` : "";
      el.style.width = false ? `${anRect.width}px` : `${width}px`;
    }
  };

  React.useLayoutEffect(position);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(position);
    const an = extractElement(anchor);

    if (an) {
      resizeObserver.observe(an);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(position);
    const el = extractElement(element);

    if (el) {
      resizeObserver.observe(el);
    }

    return () => {
      resizeObserver.disconnect();
    };
  });
};
