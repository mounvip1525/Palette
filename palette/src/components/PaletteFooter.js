import React from 'react'
import './PaletteFooter.css'

export default function PaletteFooter(props) {
    const { paletteName , emoji } = props;
    return (
        <footer className="Palette-footer">
          <div className="footer-logo">
            <a href="/">{paletteName}</a>
            <span className='emoji'>{emoji}</span>
          </div>
        </footer>
    )
}
