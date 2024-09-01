import { BakaRadio } from "baka-ui";

export default function RadioDemo() {
  return (
    <>
      <div>
        <BakaRadio name="unchecked" />
        <BakaRadio name="unchecked" hovered />
        <BakaRadio name="unchecked" activated />
        <BakaRadio name="unchecked" disabled />
        <BakaRadio name="unchecked" focused />
      </div>
      <div>
        <BakaRadio name="checked" checked />
        <BakaRadio name="checked" checked hovered />
        <BakaRadio name="checked" checked activated />
        <BakaRadio name="checked" checked disabled />
        <BakaRadio name="checked" checked focused />
      </div>
    </>
  );
}
