function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Providence", "Houston"];

  items = [];

  // items.map( item => <li>{item}</li>)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul Name="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
