"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";
import { useRouter } from "next/navigation";

export type SidenavClientProps = {
  children: React.ReactNode;
};

export const SidenavClient = (props: SidenavClientProps) => {
  const pathname = usePathname();
  const ref = React.useRef(pathname);

  const router = useRouter();
  const [state, dispatch] = useSidenav();

  const handleMouseEnter = React.useCallback(() => {
    // dispatch({ type: SIDENAV_ACTION.OPEN });
  }, [dispatch]);

  const handleMouseLeave = React.useCallback(() => {
    // dispatch({ type: SIDENAV_ACTION.CLOSE });
  }, [dispatch]);

  React.useEffect(() => {
    if (ref.current !== pathname) {
      dispatch({ type: SIDENAV_ACTION.RESET });
    }

    ref.current = pathname;
  }, [pathname]);

  return (
    <>
      {React.Children.map(props.children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, {
              ...(child?.props || {}),
              className: clsx(
                child.props?.className,
                {
                  ["hidden"]: !state.open,
                },
                "sm:flex"
              ),
            })
          : child
      )}
    </>
  );
};
