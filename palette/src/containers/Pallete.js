import React, { Component } from "react";
import ColorBox from "../components/ColorBox";
import Navbar from "../components/Navbar";
import "./Pallete.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 400,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color.hex} name={color.name} />;
    });
    return (
      <div className="Pallete">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Pallete-colors">{colorBoxes}</div>
      </div>
    );
  }
}
