import { Button } from "@/components/buttons/button";
import { Icon } from "@/components/misc/icon";
import { ThemeToggleClient } from "./theme-toggle.client";

export const ThemeToggle = () => {
  return (
    <ThemeToggleClient>
      <Button variant={["icon", "outlined"]}>
        <Icon>dark_mode</Icon>
      </Button>
    </ThemeToggleClient>
  );
};
