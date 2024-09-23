import { Button, Icon, Text, Bar } from "baka-material-you";

export default async function Demo() {
  return (
    <>
      <Bar style={{ width: 404 }} variant="top">
        <Button variant={"icon"}>
          <Icon>menu</Icon>
        </Button>
        <Text
          variant="title-large"
          style={{ flexGrow: 1, textAlign: "center" }}
        >
          Product
        </Text>
        <Button variant={"icon"}>
          <Icon variant={"filled"}>account_circle</Icon>
        </Button>
      </Bar>
      <br />
      <br />
      <Bar
        style={{
          width: 400,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        variant="bottom"
      >
        <div style={{ display: "flex", gap: 8 }}>
          {["circle", "change_history", "rectangle", "pentagon", "hexagon"].map(
            (shape) => (
              <Button key={shape} variant={"icon"}>
                <Icon>{shape}</Icon>
              </Button>
            )
          )}
        </div>
        {true ? (
          <Button variant={["fab", "secondary"]}>
            <Icon>add</Icon>
          </Button>
        ) : null}
      </Bar>
    </>
  );
}
