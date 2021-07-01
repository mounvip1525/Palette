import React, { Component } from "react";
import ColorBox from "../components/ColorBox";
import Navbar from "../components/Navbar";
import "./Palette.css";

export default class Palette extends Component {
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
    const { colors , paletteName , emoji , id } = this.props.palette;
    const { level , format } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showLink={true}/>;
    });
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          <div className="footer-logo">
            <a href="/">{paletteName}</a>
            <span className='emoji'>{emoji}</span>
          </div>
        </footer>
      </div>
    );
  }
}
