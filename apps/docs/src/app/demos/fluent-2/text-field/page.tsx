import React from "react";
import { BakaInput, BakaText, BakaTextField } from "baka-ui";

export default async function TextFieldDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <BakaText variant="body-1-strong">Fluent UI Field (+ Input)</BakaText>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-6">
          <BakaText>&nbsp;</BakaText>
          <BakaText>Rest</BakaText>
          <BakaText>Hover</BakaText>
          <BakaText>Pressed</BakaText>
          <BakaText>Focused</BakaText>
          <BakaText>Invalid</BakaText>
          <BakaText>Disabled</BakaText>
          <BakaText>Read-only</BakaText>
        </div>
        <div className="flex flex-col gap-4">
          <BakaText>Outline</BakaText>

          <BakaTextField>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField hovered>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField activated style={{ "--progress": "50%" }}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField focused>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField invalid>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField disabled>
            <BakaInput disabled placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField readOnly>
            <BakaInput readOnly placeholder="Placeholder text" />
          </BakaTextField>
        </div>
        <div className="flex flex-col gap-4">
          <BakaText>Filled Darker</BakaText>

          <BakaTextField variant={"filled-darker"}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} hovered>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} activated style={{ "--progress": "50%" }}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} focused>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} invalid>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} disabled>
            <BakaInput disabled placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-darker"} readOnly>
            <BakaInput readOnly placeholder="Placeholder text" />
          </BakaTextField>
        </div>
        <div className="flex flex-col gap-4">
          <BakaText>Filled Lighter</BakaText>

          <BakaTextField variant={"filled-lighter"}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} hovered>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} activated style={{ "--progress": "50%" }}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} focused>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} invalid>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} disabled>
            <BakaInput disabled placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"filled-lighter"} readOnly>
            <BakaInput readOnly placeholder="Placeholder text" />
          </BakaTextField>
        </div>
        <div className="flex flex-col gap-4">
          <BakaText>Focus</BakaText>

          <BakaTextField variant={"focus"}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} hovered>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} activated style={{ "--progress": "50%" }}>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} focused>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} invalid>
            <BakaInput placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} disabled>
            <BakaInput disabled placeholder="Placeholder text" />
          </BakaTextField>
          <BakaTextField variant={"focus"} readOnly>
            <BakaInput readOnly placeholder="Placeholder text" />
          </BakaTextField>
        </div>
      </div>
    </div>
  );
}
