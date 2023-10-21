import { BakaInput, BakaTextField } from "@baka/react";

import "@baka/design-material-you/dist/index.css";

function App() {
  return (
    <>
      <BakaTextField variant={"filled"}>
        <BakaInput value="test" />
      </BakaTextField>
    </>
  );
}

export default App;
