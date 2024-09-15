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
        <BakaTab hover>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab pressed>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab focus>
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
        <BakaTab variant="subtle" hover>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" pressed>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" focus>
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
        <BakaTab selected hover>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected pressed>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab selected focus>
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
        <BakaTab variant="subtle" selected hover>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected pressed>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected focus>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
        <BakaTab variant="subtle" selected disabled>
          <BakaIcon></BakaIcon>Text
        </BakaTab>
      </BakaTabGroup>
    </div>
  );
}
