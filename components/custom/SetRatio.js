import React, { useState, useEffect } from 'react';

export default function SetRatio (props) {
    const divRef = React.createRef()
    const [ lHeight, setLHeight ] = useState(0)

    const calculateHeight = () => {
        let height = divRef.current.clientWidth / parseFloat(props.ax) * parseFloat(props.ay)
        height = (height <= parseFloat(props.min)) ? parseFloat(props.min) : height
        setLHeight(height)
    }

    useEffect(() => {
        calculateHeight()
        window.onresize = () => calculateHeight()
    })

    return (
        <div ref={ divRef } className={ props.className } style={{ height: lHeight, position: 'relative' }} onMouseEnter={ props.onMouseEnter } onMouseLeave={ props.onMouseLeave }>{ props.children }</div>
    )
}