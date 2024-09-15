import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"outline"}>Text</BakaButton>
          <BakaButton variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{hover: true}} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ pressed: true }} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ selected: true }} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ focus: true }} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} state={{ disabled: true }} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
