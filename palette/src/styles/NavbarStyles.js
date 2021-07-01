export default {
    Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "10%",
    },
    logo: {
      marginRight: "15px",
      padding: "0 13px",
      fontSize: "22px",
      backgroundColor: "#eceff1",
      fontFamily: "Roboto",
      height: "100%",
      display: "flex",
      alignItems: "center",
      minWidth:"18%",
      "& a": {
        textDecoration: "none",
        color: "black"
      }
    },
    slider: {
      width: "340px",
      margin: "0 10px",
      display: "inline-block",
      "& .rc-slider-track": {
        backgroundColor: "purple"
      },
      "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
        backgroundColor: "purple",
        outline: "none",
        border: "2px solid purple",
        boxShadow: "none",
        width: "13px",
        height: "13px",
      }
    },
    selectContainer: {
      marginLeft: "auto",
      marginRight: "1rem"
    }
  };