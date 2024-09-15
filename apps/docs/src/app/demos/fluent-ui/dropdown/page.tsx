import { Icon, Menu, MenuItem, Text } from "baka-fluent-ui";
import { Dropdown } from "baka-fluent-ui";

export default function DropdownDemo() {
  return (
    <div className="flex gap-4 flex-row">
      {(
        [
          "outline",
          /* TODO: "transparent", */ "filled-lighter",
          "filled-darker",
        ] as const
      ).map((variant) => (
        <div key={variant} className="flex gap-5 flex-col">
          <Dropdown style={{ width: 300 }} variant={variant}>
            <Text variant={"placeholder"}>Placeholder text</Text>
            <Icon></Icon>
          </Dropdown>

          <div>
            <Dropdown style={{ width: 300 }} variant={variant}>
              <Text variant={"placeholder"}>Placeholder text</Text>
              <Icon></Icon>
            </Dropdown>
            <Menu>
              <MenuItem state={{ readonly: true }}>
                <Text variant={"caption-1-strong"}>Action</Text>
              </MenuItem>
              <MenuItem>
                <Icon />
                <Text>Action</Text>
              </MenuItem>
              <MenuItem>
                <Icon />
                <Text>Action</Text>
              </MenuItem>
              <MenuItem>
                <Icon />
                <Text>Action</Text>
              </MenuItem>
              <MenuItem>
                <Icon />
                <Text>Action</Text>
              </MenuItem>
            </Menu>
          </div>
        </div>
      ))}
    </div>
  );
}
