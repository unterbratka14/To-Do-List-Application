const BodyList = (list) => {
  return (
    <div>
      {list.map((task) => {
        <h1>{task.text}</h1>;
      })}
    </div>
  );
};

export default BodyList;
