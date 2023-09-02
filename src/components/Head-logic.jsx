import { useState } from "react";

const HeadLogic = ({ list, setList }) => {
  const [task, setTask] = useState("");

  const inputChangeHandler = (event) => {
    setTask(event.target.value); // Everytime the user is pressing the button and typing something this function will take control of it, and automatically will change the value of task to the new text
  };

  const clickHandler = (event) => {
    event.preventDefault(); // This Line is added to prevent the site to reload (rerender) whenever the button is clicked
    setList([
      ...list,
      { text: task, finished: false, id: Math.ceil(Math.random() * 1000) },
    ]); // Pushing the new value to the list by copying the material that we had earlier, and adding one more array element which is object of specific items. Here id is needed for making unique keys for the tasks
    setTask(""); // Making task to be equal to the empty string makes it ready to get another task later, Also it automatically vanishes the string line from the input since value of the input is set to the task
  };

  return (
    <div className="h-[400px] bg-lime-100">
      <div className="max-w-[1200px] h-full m-auto flex justify-center items-center gap-3">
        <input
          className="border border-black rounded p-4 h-12"
          value={task}
          type="text"
          onChange={inputChangeHandler}
        />
        <button
          className="w-1/5 border border-black rounded h-12"
          type="button"
          disabled={task.length === 0}
          onClick={clickHandler}
        >
          Add Task
        </button>
      </div>
    </div> //Wrapper Element End
  );
};

export default HeadLogic;
