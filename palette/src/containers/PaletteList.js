import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './PaletteList.css'

export default class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Color Palettes</h1>
                {palettes.map(palette=>(
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}
