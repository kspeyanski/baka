import { Button, ButtonProps } from "@material-you/components";
import { SidenavButtonClient } from "@shared/sidenav/sidenav-button.client";
import { SidenavIcon } from "./sidenav-icon.client";

export type SidenavButtonProps = {} & ButtonProps;

export const SidenavButton = (props: SidenavButtonProps) => {
  return (
    <SidenavButtonClient>
      <Button {...props} variant={"icon"}>
        <SidenavIcon />
      </Button>
    </SidenavButtonClient>
  );
};
