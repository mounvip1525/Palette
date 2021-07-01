import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from '@material-ui/core/IconButton';
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Slider from "rc-slider";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar=this.closeSnackbar.bind(this);
  }
  closeSnackbar(){
      this.setState({open:false})
  }
  handleChange(e) {
    this.setState({ format: e.target.value,open:true });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { level, changeLevel, handleChange } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              step={100}
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container"><span style={{marginRight:"8px"}}>Change Format:</span>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
          contentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
              <IconButton 
                onClick={this.closeSnackbar}
                color='inherit'
                key='close'
                aria-label='close'
              >
              <CloseIcon />
              </IconButton>            
          ]}
        />
      </header>
    );
  }
}
