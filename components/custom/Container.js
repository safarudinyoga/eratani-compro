export default function Container (props) {
    const newProps = { ...props }

    newProps.className = (props.backgroundColor) ? `bg-${ props.backgroundColor } ` : ''

    newProps.style = { ...props.style }
    newProps.style.position = 'relative'
    
    if (props.normalPadding === undefined){
        if (props.paddingLeft !== undefined) newProps.style.paddingLeft = parseInt(props.paddingLeft)
        if (props.paddingRight !== undefined) newProps.style.paddingRight = parseInt(props.paddingRight)
    }
    else newProps.className += 'container-padding '

    if (props.paddingTop !== undefined) newProps.style.paddingTop = parseInt(props.paddingTop)
    if (props.paddingBottom !== undefined) newProps.style.paddingBottom = parseInt(props.paddingBottom)

    newProps.className += props.className || ''

    delete newProps.paddingLeft
    delete newProps.paddingRight
    delete newProps.paddingTop
    delete newProps.paddingBottom
    delete newProps.normalPadding
    delete newProps.backgroundColor

    return (
        <section { ...newProps }>{ props.children }</section>
    )
}