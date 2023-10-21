import { BakaInput, BakaTextField } from "baka-ui";

import "baka-material-you/dist/index.css";

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
