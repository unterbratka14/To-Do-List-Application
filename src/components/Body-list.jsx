const BodyList = ({ list }) => {
  return (
    <div>
      <h1>
        {list.map((task) => (
          <h1>{task}</h1>
        ))}
      </h1>
    </div>
  );
};

export default BodyList;
