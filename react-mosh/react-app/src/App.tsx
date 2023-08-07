import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = [
    "Nueva York",
    "Los Angeles",
    "Chicago",
    "Phoenix",
    "Philadelphia",
  ];

  let people = ["John", "Mary", "Peter"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={people}
        heading="Name"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hellow World</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
