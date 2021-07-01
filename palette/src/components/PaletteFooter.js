import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <div className={classes.footerText}>
        <a href="/">{paletteName}</a>
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);