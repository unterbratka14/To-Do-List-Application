import { useState } from "react";

// eslint-disable-next-line react/prop-types
const HeadLogic = ({ list, setList }) => {
  const [task, setTask] = useState("");

  const inputChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setList([...list, task]);
    setTask("");
  };

  return (
    <div className="w-full h-2/6 bg-blue-400">
      <input value={task} type="text" onChange={inputChangeHandler} />
      <button type="button" onClick={clickHandler}>
        Add Task
      </button>
    </div>
  );
};

export default HeadLogic;
