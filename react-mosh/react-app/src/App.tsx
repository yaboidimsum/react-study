import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Nueva York",
    "Los Angeles",
    "Chicago",
    "Phoenix",
    "Philadelphia",
  ];

  let people = [
    "John", "Mary", "Peter"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <ListGroup items={people} heading="Name" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
