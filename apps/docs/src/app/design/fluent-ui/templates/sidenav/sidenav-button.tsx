"use client";
import { Button, Icon, type ButtonProps } from "@fluent-ui/components";
import {
  ChevronCircleLeftRegular,
  ChevronCircleRightRegular,
} from "@fluentui/react-icons";
import { SidenavButtonClient } from "@shared/sidenav/sidenav-button.client";
import { useSidenav } from "@shared/sidenav/sidenav-state.client";

export type SidenavButtonProps = {} & ButtonProps;
export const SidenavButton = (props: SidenavButtonProps) => {
  const [state] = useSidenav();
  return (
    <SidenavButtonClient>
      <Button {...props} variant={["subtle", "icon", "large"]}>
        <Icon
          as={state.open ? ChevronCircleLeftRegular : ChevronCircleRightRegular}
        />
      </Button>
    </SidenavButtonClient>
  );
};
