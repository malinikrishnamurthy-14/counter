import Counter from "./Counter";
import StopWatch from "./StopWatch";
import FetchData from "./FetchData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-small">
        <h1>Counter Example</h1>
        <Counter />
      </div>
      <div className="content-small">
        <h1>Stop Watch Example</h1>
        <StopWatch />
      </div>
      <div className="content-large">
        <h1>Use Fetch to get data from an endpoint</h1>
        <FetchData />
      </div>
    </div>
  );
}

export default App;
