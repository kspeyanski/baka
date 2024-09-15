import { Button, Icon } from "baka-fluent-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button variant={"subtle"}>Text</Button>
          <Button variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{hover: true}} variant={"subtle"}>
            Text
          </Button>
          <Button state={{hover: true}} variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{hover: true}} variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ pressed: true }} variant={"subtle"}>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ selected: true }} variant={"subtle"}>
            Text
          </Button>
          <Button state={{ selected: true }} variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ selected: true }} variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ focus: true }} variant={"subtle"}>
            Text
          </Button>
          <Button state={{ focus: true }} variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ focus: true }} variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={true} state={{ disabled: true }} variant={"subtle"}>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={"subtle"}>
            <Icon></Icon>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={["subtle", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}
