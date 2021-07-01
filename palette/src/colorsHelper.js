// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   }

import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePallete(starterPallete) {
  let newPallete = {
    palleteName: starterPallete.palleteName,
    id: starterPallete.id,
    emoji: starterPallete.emoji,
    colors: {},
  };
  //generating 50:[],100:[],200:[]
  for (let level of levels) {
    newPallete.colors[level] = [];
  }
  for (let color of starterPallete.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPallete.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb","rgba").replace(")",",1.0)")
      });
    }
  }
  return newPallete;
}

//Will return an array starting from the darker version of the original color to the original color to finally white using chroma
function getRangeOfColors(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
//Generating the range of colors by giving the numberofcolors input and the starting and endpoint too
function getScale(hexColor, numOfColors) {
  return chroma
    .scale(getRangeOfColors(hexColor))
    .mode("lab")
    .colors(numOfColors);
}

export { generatePallete };
