import { useState } from "react";

// eslint-disable-next-line react/prop-types
const HeadLogic = ({ list, setList }) => {
  const [task, setTask] = useState("");

  const inputChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const task_list = [...list, { text: task, completed: false }];
    setList(task_list);
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
