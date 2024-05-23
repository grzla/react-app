function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Providence", "Houston"];

  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul Name="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
