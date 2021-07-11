import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import styles from '../styles/DraggableColorBox';

const DraggableColorBox = SortableElement((props) => {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={props.classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon onClick={props.handleClick} className={props.classes.deleteIcon}/>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);