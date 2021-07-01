import seedColors from "./seedColors";
import Pallete from "./containers/Pallete";

function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
