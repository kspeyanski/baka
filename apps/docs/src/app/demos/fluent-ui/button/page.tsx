import ButtonPrimaryDemo from "./primary/page";
import ButtonSecondaryDemo from "./secondary/page";
import ButtonOutlineDemo from "./outline/page";
import ButtonSubtleDemo from "./subtle/page";
import ButtonTransparentDemo from "./transparent/page";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <label>primary</label>
        <ButtonPrimaryDemo />
        <label>secondary</label>
        <ButtonSecondaryDemo />
        <label>outline</label>
        <ButtonOutlineDemo />
        <label>subtle</label>
        <ButtonSubtleDemo />
        <label>transparent</label>
        <ButtonTransparentDemo />
      </div>
    </>
  );
}
