
import "./App.css";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { CircularStepper } from "./components/CircularStepper";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && <CircularStepper percentage={50} />}
    </>
  );
}

export default App;
