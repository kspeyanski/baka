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
      <Container>
        <Row style={{ height: "100%" }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Column key={index} columns={4}>
              <div
                style={{ height: "100%", width: "100%", background: "#E0F0F0" }}
              >
                {index}
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  );
}
