function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Providence", "Houston"];

  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  // items.map( item => <li>{item}</li>)
  return (
    <>
      <h1>List</h1>
      <ul Name="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
