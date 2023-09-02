import BodyList from "./components/Body-list";
import HeadLogic from "./components/Head-logic";

import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  return (
    <div>
      <HeadLogic list={list} setList={setList} />
      <BodyList list={list} setList={setList} />
    </div>
  );
}

export default App;
