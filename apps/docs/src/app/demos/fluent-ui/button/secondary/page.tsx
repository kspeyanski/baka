import { Button, Icon } from "baka-fluent-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button variant={"secondary"}>Text</Button>
          <Button variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{hover: true}} variant={"secondary"}>
            Text
          </Button>
          <Button state={{hover: true}} variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{hover: true}} variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ pressed: true }} variant={"secondary"}>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ pressed: true }} variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ selected: true }} variant={"secondary"}>
            Text
          </Button>
          <Button state={{ selected: true }} variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ selected: true }} variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button state={{ focus: true }} variant={"secondary"}>
            Text
          </Button>
          <Button state={{ focus: true }} variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button state={{ focus: true }} variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button disabled={true} state={{ disabled: true }} variant={"secondary"}>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={"secondary"}>
            <Icon></Icon>
            Text
          </Button>
          <Button disabled={true} state={{ disabled: true }} variant={["secondary", "icon"]}>
            <Icon></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}
