import React, { Component } from 'react'
import ColorBox from '../components/ColorBox'
import './Pallete.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default class Pallete extends Component {
    constructor(props){
        super(props);
        this.state = {
            level:400
        }
        this.changeLevel=this.changeLevel.bind(this);
    }
    changeLevel(newLevel){
        this.setState({level:newLevel})
    }
    render() {
        const {colors}=this.props.pallete;
        const {level}=this.state;
        const colorBoxes = colors[level].map(color=>{
            return(
                <ColorBox background={color.hex} name={color.name} />
            )
        })
        return (
            <div className="Pallete">
                <Slider step={100} defaultValue={level} min={100} max={900} onAfterChange={this.changeLevel}/>
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
