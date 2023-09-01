const BodyList = ({ list }) => {
  return (
    <div className="w-full bg-teal-100">
      <div className="h-full max-w-[1200px] m-auto">
        {list.map((task) => (
          <h2 className="font-primary text-4xl mb-4 w-3/4" key={task.id}>
            {task.text}
          </h2> // This loop sets every object-element in the list to be equal to individual object named task for n times (here n is the number of elements in the list of objects). Then this loop returns heading with unique key, and task, that was written in the input.
        ))}
      </div>
    </div>
  );
};

export default BodyList;
