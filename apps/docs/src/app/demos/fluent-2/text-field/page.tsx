import React from "react";
import { BakaInput, BakaTextField } from "baka-ui";

export default async function TextFieldDemo() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-4">
        <BakaTextField>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField hovered>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField activated>
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
        <BakaTextField variant={"filled-darker"}>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"filled-darker"} hovered>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"filled-darker"} activated>
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
        <BakaTextField variant={"filled-lighter"}>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"filled-lighter"} hovered>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"filled-lighter"} activated>
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
        <BakaTextField variant={"focus"}>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"focus"} hovered>
          <BakaInput placeholder="Placeholder text" />
        </BakaTextField>
        <BakaTextField variant={"focus"} activated>
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
  );
}
