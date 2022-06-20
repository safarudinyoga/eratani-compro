import React, { useEffect, useState } from 'react';
import Typograph from '../custom/Typograph'

export default function Ellipsis (props) {
    const divRef = React.createRef()
    const [ dimensions, setDimensions ] = useState(0)

    const calculateText = () => {
        const span = divRef.current.getElementsByTagName('span')[0]
        span.innerHTML = props.children
        while (span.clientHeight > divRef.current.clientHeight)
            span.innerHTML = span.innerHTML.replace(/\W*\s(\S)*$/, '...')
        
        setDimensions(window.innerHeight)
    }

    useEffect(() => {
        calculateText()

        window.addEventListener('resize', calculateText)
        return _ => window.removeEventListener('resize', calculateText)
    })

    return (
        <p ref={ divRef } className={ props.className }><span>{ props.children }</span></p>
    )
}