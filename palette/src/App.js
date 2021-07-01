import seedColors from "./seedColors";
import Pallete from "./containers/Pallete";
import {generatePallete} from './colorsHelper'

function App() {
  // console.log(generatePallete(seedColors[4]))
  return (
    <div className="App">
      <Pallete pallete={generatePallete(seedColors[4])} />
    </div>
  );
}

export default App;
