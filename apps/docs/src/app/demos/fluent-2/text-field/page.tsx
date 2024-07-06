import React from "react";
import { BakaInput, BakaTextField } from "baka-ui";

export default async function TextFieldDemo() {
  return (
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
    </div>
  );
}
