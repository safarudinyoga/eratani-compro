export default function Container (props) {
    const newProps = { ...props }

    newProps.style = { ...props.style }
    newProps.style.position = 'relative'
    
    const sectionProps = { }
    sectionProps.style = { }
    sectionProps.className = (props.backgroundColor) ? `bg-${ props.backgroundColor } ` : ''
    
    if (props.normalPadding === undefined){
        if (props.paddingLeft !== undefined) sectionProps.style.paddingLeft = parseInt(props.paddingLeft)
        if (props.paddingRight !== undefined) sectionProps.style.paddingRight = parseInt(props.paddingRight)
    }
    else sectionProps.className += 'container-padding '
    sectionProps.className += 'container-max-width '

    if (props.paddingTop !== undefined) sectionProps.style.paddingTop = parseInt(props.paddingTop)
    if (props.paddingBottom !== undefined) sectionProps.style.paddingBottom = parseInt(props.paddingBottom)

    if (props.anchor !== undefined) sectionProps.id = props.anchor

    if (props.sectionClass !== undefined) {
        sectionProps.className += props.sectionClass
    }

    delete newProps.sectionClass
    delete newProps.paddingLeft
    delete newProps.paddingRight
    delete newProps.paddingTop
    delete newProps.paddingBottom
    delete newProps.normalPadding
    delete newProps.backgroundColor
    delete newProps.anchor

    return (
        <section { ...sectionProps }>
            <div { ...newProps } >
                { props.children }
            </div>
        </section>
    )
}