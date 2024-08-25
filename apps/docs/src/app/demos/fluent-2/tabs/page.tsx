import { BakaButton, BakaIcon, BakaTab, BakaTabGroup } from "baka-ui";

export default function TabsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BakaTabGroup>
        <BakaTab selected>First tab</BakaTab>
        <BakaTab>Second tab</BakaTab>
        <BakaTab>Third tab</BakaTab>
        <BakaTab>Fourth tab</BakaTab>
        <BakaTab>Fifth tab</BakaTab>
        <BakaButton variant={["icon", "subtle"]}>
          <BakaIcon></BakaIcon>
        </BakaButton>
      </BakaTabGroup>
      <BakaTabGroup>
        <BakaTab selected>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaButton variant={["icon", "subtle"]}>
          <BakaIcon></BakaIcon>
        </BakaButton>
      </BakaTabGroup>
      <BakaTabGroup variant={"vertical"}>
        <BakaTab selected>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon></BakaIcon>
        </BakaTab>
        <BakaButton variant={["icon", "subtle"]}>
          <BakaIcon></BakaIcon>
        </BakaButton>
      </BakaTabGroup>
      <BakaTabGroup>
        <BakaTab>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab hovered>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab activated>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab focused>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab disabled>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup>
        <BakaTab variant="subtle">
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" hovered>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" activated>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" focused>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" disabled>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
      </BakaTabGroup>
      <br />
      <BakaTabGroup>
        <BakaTab selected>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected hovered>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected activated>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected focused>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected disabled>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup>
        <BakaTab variant="subtle" selected>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected hovered>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected activated>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected focused>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected disabled>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
      </BakaTabGroup>
    </div>
  );
}
