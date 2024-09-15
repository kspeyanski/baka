import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"secondary"}>Text</BakaButton>
          <BakaButton variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{hover: true}} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ pressed: true }} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ selected: true }} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ focus: true }} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} state={{ disabled: true }} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
