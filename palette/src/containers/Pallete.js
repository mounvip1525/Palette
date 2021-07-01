import React, { Component } from 'react'
import ColorBox from '../components/ColorBox'
import './Pallete.css'

export default class Pallete extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color=>{
            return(
                <ColorBox background={color.color} name={color.name} />
            )
        })
        return (
            <div className="Pallete">
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
