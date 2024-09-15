import React from "react";
import { Text } from "baka-fluent-ui";
import { Field, Input } from "baka-fluent-ui";

export default async function FieldDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <Text variant="body-1-strong">Fluent UI Field (+ Input)</Text>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-6">
          <Text>&nbsp;</Text>
          <Text>Rest</Text>
          <Text>Hover</Text>
          <Text>Pressed</Text>
          <Text>Focused</Text>
          <Text>Invalid</Text>
          <Text>Disabled</Text>
          <Text>Read-only</Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text>Outline</Text>

          <Field>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field state={{ hover: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field
            state={{ pressed: true }}
            style={{ "--field-progress": "50%" } as any}
          >
            <Input placeholder="Placeholder text" />
          </Field>
          <Field state={{ focus: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field state={{ invalid: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field state={{ disabled: true }}>
            <Input state={{ disabled: true }} placeholder="Placeholder text" />
          </Field>
          <Field state={{ rest: true }}>
            <Input state={{ rest: true }} placeholder="Placeholder text" />
          </Field>
        </div>
        <div className="flex flex-col gap-4">
          <Text>Filled Darker</Text>

          <Field variant={"filled-darker"}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-darker"} state={{ hover: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field
            variant={"filled-darker"}
            state={{ pressed: true }}
            style={{ "--field-focus": "50%" } as any}
          >
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-darker"} state={{ focus: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-darker"} state={{ invalid: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-darker"} state={{ disabled: true }}>
            <Input state={{ disabled: true }} placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-darker"} state={{ rest: true }}>
            <Input state={{ rest: true }} placeholder="Placeholder text" />
          </Field>
        </div>
        <div className="flex flex-col gap-4">
          <Text>Filled Lighter</Text>

          <Field variant={"filled-lighter"}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-lighter"} state={{ hover: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field
            variant={"filled-lighter"}
            state={{ pressed: true }}
            style={{ "--field-progress": "50%" } as any}
          >
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-lighter"} state={{ focus: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-lighter"} state={{ invalid: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-lighter"} state={{ disabled: true }}>
            <Input state={{ disabled: true }} placeholder="Placeholder text" />
          </Field>
          <Field variant={"filled-lighter"} state={{ rest: true }}>
            <Input state={{ rest: true }} placeholder="Placeholder text" />
          </Field>
        </div>
        <div className="flex flex-col gap-4">
          <Text>Focus</Text>

          <Field variant={"focus"}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"focus"} state={{ hover: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field
            variant={"focus"}
            state={{ pressed: true }}
            style={{ "--field-progress": "50%" } as any}
          >
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"focus"} state={{ focus: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"focus"} state={{ invalid: true }}>
            <Input placeholder="Placeholder text" />
          </Field>
          <Field variant={"focus"} state={{ disabled: true }}>
            <Input state={{ disabled: true }} placeholder="Placeholder text" />
          </Field>
          <Field variant={"focus"} state={{ rest: true }}>
            <Input state={{ rest: true }} placeholder="Placeholder text" />
          </Field>
        </div>
      </div>
    </div>
  );
}
