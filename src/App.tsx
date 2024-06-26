import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          The pans just popt
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Test
      </Button>
    </div>
  );
}
export default App;
