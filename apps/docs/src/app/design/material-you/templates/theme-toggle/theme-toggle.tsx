import { Button } from "@/components/buttons/button";
import {
  ThemeToggleClient,
  ThemeToggleIconClient,
} from "./theme-toggle.client";

export const ThemeToggle = () => {
  return (
    <ThemeToggleClient>
      <Button variant={["icon", "outlined"]}>
        <ThemeToggleIconClient />
      </Button>
    </ThemeToggleClient>
  );
};
