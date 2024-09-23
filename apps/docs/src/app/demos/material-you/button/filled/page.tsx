import { Button, Icon } from "baka-material-you";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-5">
          <Button variant="filled">Button</Button>
          <Button variant="filled" state={{ hovered: true }}>
            Button
          </Button>
          <Button variant="filled" state={{ focused: true }}>
            Button
          </Button>
          <Button variant="filled" state={{ pressed: true }}>
            Button
          </Button>
          <Button variant="filled" state={{ disabled: true }}>
            Button
          </Button>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="filled">Button</Button>
          <Button variant="filled" state={{ hovered: true }}>
            <Icon>add</Icon>
            Button
          </Button>
          <Button variant="filled" state={{ focused: true }}>
            <Icon>add</Icon>
            Button
          </Button>
          <Button variant="filled" state={{ pressed: true }}>
            <Icon>add</Icon>
            Button
          </Button>
          <Button variant="filled" state={{ disabled: true }}>
            <Icon>add</Icon>
            Button
          </Button>
        </div>
      </div>
    </>
  );
}
