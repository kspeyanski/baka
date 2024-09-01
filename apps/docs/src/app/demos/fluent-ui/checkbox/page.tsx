import { BakaCheckbox, BakaText } from "baka-ui";

export default function CheckboxDemos() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <BakaCheckbox readOnly checked={false} />
      <BakaCheckbox readOnly checked={false} hovered />
      <BakaCheckbox readOnly checked={false} activated />
      <BakaCheckbox readOnly checked={false} focused />
      <BakaCheckbox readOnly checked={false} disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled />
        Label
      </BakaText>
      <BakaCheckbox readOnly checked />
      <BakaCheckbox readOnly checked hovered />
      <BakaCheckbox readOnly checked activated />
      <BakaCheckbox readOnly checked focused />
      <BakaCheckbox readOnly checked disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly checked />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked disabled />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly checked variant="circular" />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly checked disabled variant="circular" />
        Label
      </BakaText>
      <BakaCheckbox readOnly indeterminate />
      <BakaCheckbox readOnly indeterminate hovered />
      <BakaCheckbox readOnly indeterminate activated />
      <BakaCheckbox readOnly indeterminate focused />
      <BakaCheckbox readOnly indeterminate disabled />
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} hovered>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} activated>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"} focused>
        <BakaCheckbox readOnly variant="circular" indeterminate />
        Label
      </BakaText>
      <BakaText as="label" variant={"body-1"}>
        <BakaCheckbox readOnly disabled variant="circular" indeterminate />
        Label
      </BakaText>
    </div>
  );
}
