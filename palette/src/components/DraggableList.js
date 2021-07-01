import React from 'react'
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

const DraggableList = SortableContainer((props)=>{
    return (
        <div style={{height:"100%"}}>
        {props.colors.map((color,i) => (
            <DraggableColorBox 
            index={i}
            key={color.name} 
            color={color.color} 
            name={color.name} 
            handleClick={()=>props.deleteColor(color.name)}/>
        ))}
        </div>
    )
});

export default DraggableList;
