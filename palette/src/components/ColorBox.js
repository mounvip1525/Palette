import React, { Component } from "react";
import "./ColorBox.css";
import {Link} from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from 'chroma-js'

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background , paletteId , id , showLink } = this.props;
    const { copied } = this.state;
    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() > 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        {/* overlay */}
        <div className="ColorBox" style={{ background: background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: background }}
          />
          {/* overlay */}
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLight && "dark-text"}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark && "light-text" }>{name}</span>
            </div>
            <button className={`copy-button ${isLight && "dark-text"}`}>Copy</button>
          </div>
          {showLink &&
          <Link to={`/palette/${paletteId}/${id}`} onClick={e=>e.stopPropagation()}>
            <span className={`see-more ${isLight && "dark-text"}`}>more</span>
          </Link>
          }
        </div>
      </CopyToClipboard>
    );
  }
}
