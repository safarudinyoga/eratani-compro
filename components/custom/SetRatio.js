import React, { useState, useEffect } from 'react';

export default function SetRatio (props) {
    const divRef = React.createRef()
    const newProps = { ...props }
    const [h, setH] = useState(0)

    newProps.style = { ...props.style }
    newProps.style.position = 'relative'
    newProps.style.height = h

    const calculateHeight = () => {
        let height = divRef.current.clientWidth / parseFloat(props.ax) * parseFloat(props.ay)
        if (props.min !== undefined) height = (height <= parseFloat(props.min)) ? parseFloat(props.min) : height
        if (props.max !== undefined) height = (height >= parseFloat(props.max)) ? parseFloat(props.max) : height
        setH(Math.round(height))
    }

    useEffect(() => {
        calculateHeight()

        window.addEventListener('resize', calculateHeight)
        return _ => window.removeEventListener('resize', calculateHeight)
    })

    delete newProps.ax
    delete newProps.ay
    delete newProps.min
    delete newProps.max

    return (
        <div ref={ divRef } { ...newProps }>{ props.children }</div>
    )
}