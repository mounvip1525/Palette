import React, { Component } from "react";
import ColorBox from "../components/ColorBox";
import Navbar from "../components/Navbar";
import "./Pallete.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 400,
      format:"hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat=this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  changeFormat(val){
      this.setState({format:val})
  }
  render() {
    const { colors } = this.props.pallete;
    const { level , format } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color[format]} name={color.name} />;
    });
    return (
      <div className="Pallete">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className="Pallete-colors">{colorBoxes}</div>
      </div>
    );
  }
}
