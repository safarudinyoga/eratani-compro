import React, { useEffect } from 'react';

export default function Ellipsis (props) {
    const divRef = React.createRef()

    const calculateText = () => {
        const span = divRef.current.getElementsByTagName('span')[0]
        while (span.clientHeight > divRef.current.clientHeight)
            span.innerHTML = span.innerHTML.replace(/\W*\s(\S)*$/, '...')
    }

    useEffect(() => {
        calculateText()
        window.onresize = () => calculateText()
    })

    return (
        <p ref={ divRef } className={ props.className }><span>{ props.children }</span></p>
    )
}