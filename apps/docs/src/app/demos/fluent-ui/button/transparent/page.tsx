import { Button, Icon } from "baka-fluent-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button variant={"transparent"}>Text</Button>
          <Button variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{hover: true}} variant={"transparent"}>
            Text
          </Button>
          <Button state={{hover: true}} variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{hover: true}} variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ pressed: true }} variant={"transparent"}>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ selected: true }} variant={"transparent"}>
            Text
          </Button>
          <Button state={{ selected: true }} variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ selected: true }} variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ focus: true }} variant={"transparent"}>
            Text
          </Button>
          <Button state={{ focus: true }} variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ focus: true }} variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={true} state={{ disabled: true }} variant={"transparent"}>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={"transparent"}>
            <Icon></Icon>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={["transparent", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}
