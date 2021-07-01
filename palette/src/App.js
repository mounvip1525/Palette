import seedColors from "./seedColors";
import Palette from "./containers/Palette";
import {generatePalette} from './colorsHelper'

function App() {
  // console.log(generatePalette(seedColors[4]))
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[1])} />
    </div>
  );
}

export default App;
