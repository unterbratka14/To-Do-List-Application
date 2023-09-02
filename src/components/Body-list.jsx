const BodyList = ({ list, setList }) => {
  return (
    <div className="w-full h-full bg-teal-100">
      <div className="m-auto">
        {/* This loop sets every object-element in the list to be equal to individual object named task for n times (here n is the number of elements in the list of objects). Then this loop returns heading with unique key, and task, that was written in the input.*/}
        {list.map((task) => (
          <div key={task.id} className="flex gap-3">
            <h2
              style={
                task.finished === true
                  ? { backgroundColor: "rgb(69, 252, 3)" }
                  : {
                      backgroundColor:
                        "rgb(204 251 241 / var(--tw-bg-opacity))",
                    }
              }
              className="font-primary text-4xl w-3/4 border-r-2 border-black pl-28"
            >
              {task.text}
            </h2>
            <button
              onClick={() => {
                const specificId = task.id;
                const index = list.findIndex((obj) => obj.id === specificId);
                const updateData = [...list];
                updateData[index].finished = !task.finished;
                setList(updateData);
              }}
              className="w-24 border border-black rounded h-12"
            >
              Done
            </button>
            <button
              onClick={() => {
                const specificId = task.id;
                const index = list.findIndex((obj) => obj.id === specificId);
                const updateData = [...list];
                updateData.splice(index, 1);
                setList(updateData);
              }}
              className="w-24 border border-black rounded h-12"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyList;
