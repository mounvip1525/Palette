import sizes from "./sizes";
import bg from './bg.svg';
const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by svgbackground.com */
    backgroundColor: "#590aee",
    backgroundImage: `url(${bg})`,
    overflowY:"scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent:'center',
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"center",
    color:"white",
    "& a":{
      textDecoration:"none",
      "& button" :{
        background:"white",
        borderRadius:"5px",
        padding:"5px 10px",
        color:"black",
        cursor:"pointer",
        border:"none",
        outline:"none"
      }
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  }
};

export default styles;
