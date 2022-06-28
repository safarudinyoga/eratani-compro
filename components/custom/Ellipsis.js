import React, { useEffect, useState, createRef } from 'react';

export default function Ellipsis (props) {
    const divRef = createRef()
    const [ text, setText ] = useState('')
    const calculateText = () => {
        const node =  divRef.current
        const span = node.getElementsByTagName('span')[0]

        if (node.clientHeight > 0) {
            span.innerHTML = props.children
            while (span.clientHeight > node.clientHeight)
                span.innerHTML = span.innerHTML.replace(/\W*\s(\S)*$/, '...')
        }
        setText(span.innerHTML)
    }

    useEffect(() => {
        calculateText()
        window.addEventListener('resize', calculateText)
        return _ => window.removeEventListener('resize', calculateText)
    }, [calculateText])

    return (
        <p ref={ divRef } className={ props.className }><span style={{ display: 'block' }}>{ props.children }</span></p>
    )
}