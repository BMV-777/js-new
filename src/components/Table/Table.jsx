
 const Table = ({items}) => {
  return (
    <>
      <h4>ID Value</h4>
      <ol>
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
        </ol>
    </>
  );
}

export { Table };