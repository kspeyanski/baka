import { Container, Row, Column } from "baka-material-you";

export default function LayoutDemo() {
  return (
    <div
      style={{
        width: "calc(100vw - 128px)",
        height: "calc(100vh - 64px)",
        display: "flex",
      }}
    >
      <Column variant={"region-left"} style={{ background: "#FDE0F1" }}>
        <div style={{ height: "calc(100vh - 64px" }} />
      </Column>
      <Container>
        <Row style={{ height: "100%" }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Column key={index} columns={2}>
              <div
                style={{ height: "100%", width: "100%", background: "#E0F0F0" }}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  );
}
