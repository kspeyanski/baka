import { Text } from "baka-fluent-ui";
import { Checkbox } from "baka-fluent-ui";

export default function CheckboxDemos() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Checkbox readOnly checked={false} />
      <Checkbox readOnly checked={false} state={{ hover: true }} />
      <Checkbox readOnly checked={false} state={{ pressed: true }} />
      <Checkbox readOnly checked={false} state={{ focus: true }} />
      <Checkbox readOnly checked={false} state={{ disabled: true }} />
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly state={{ disabled: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly state={{ disabled: true }} />
        Label
      </Text>
      <Checkbox readOnly checked />
      <Checkbox readOnly checked state={{ hover: true }} />
      <Checkbox readOnly checked state={{ pressed: true }} />
      <Checkbox readOnly checked state={{ focus: true }} />
      <Checkbox readOnly checked state={{ disabled: true }} />
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly checked />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly checked />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly checked />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly checked />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly checked state={{ disabled: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly checked variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly checked variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly checked variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly checked variant="circular" />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox
          readOnly
          checked
          state={{ disabled: true }}
          variant="circular"
        />
        Label
      </Text>
      <Checkbox readOnly state={{ indeterminate: true }} />
      <Checkbox readOnly state={{ hover: true, indeterminate: true }} />
      <Checkbox readOnly state={{ pressed: true, indeterminate: true }} />
      <Checkbox readOnly state={{ focus: true, indeterminate: true }} />
      <Checkbox readOnly state={{ disabled: true, indeterminate: true }} />
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly state={{ disabled: true, indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox readOnly variant="circular" state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ hover: true }}>
        <Checkbox readOnly variant="circular" state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ pressed: true }}>
        <Checkbox readOnly variant="circular" state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"} state={{ focus: true }}>
        <Checkbox readOnly variant="circular" state={{ indeterminate: true }} />
        Label
      </Text>
      <Text as="label" variant={"body-1"}>
        <Checkbox
          readOnly
          state={{ disabled: true, indeterminate: true }}
          variant="circular"
        />
        Label
      </Text>
    </div>
  );
}
