import React, { useState, createRef, useEffect, useImperativeHandle, forwardRef } from 'react';

export default function Ellipsis (props) {
    const divRef = createRef()
    const newProps = { ...props }
    const [h, setH] = useState(0)
    const [w, setW] = useState(0)

    newProps.style = { ...props.style }
    newProps.style.position = 'relative'
    newProps.style.height = h

    const calculateHeight = () => {
        let height = w / parseFloat(props.ax) * parseFloat(props.ay)
        if (props.min !== undefined) height = (height <= parseFloat(props.min)) ? parseFloat(props.min) : height
        if (props.max !== undefined) height = (height >= parseFloat(props.max)) ? parseFloat(props.max) : height
        setH(Math.round(height))
    }

    useEffect(() => {
        calculateHeight()
    }, [w])

    useEffect(() => {
        const nodeRef = divRef.current

        const resize_ob = new ResizeObserver(function(entries) {
            let rect = entries[0].contentRect;
            if (w != rect.width) setW(rect.width)
        })

        resize_ob.observe(nodeRef)
        return _ => resize_ob.unobserve(nodeRef)
    }, [])

    delete newProps.ax
    delete newProps.ay
    delete newProps.min
    delete newProps.max

    return (
        <div ref={ divRef } { ...newProps }>{ props.children }</div>
    )
}