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

    if (props.fullWidth === undefined){
        sectionProps.className += 'container-max-width '
    }

    if (props.fullHeight !== undefined) {
        sectionProps.className += 'container-full-height '
    }

    if (props.paddingTop !== undefined) sectionProps.style.paddingTop = parseInt(props.paddingTop)
    if (props.paddingBottom !== undefined) sectionProps.style.paddingBottom = parseInt(props.paddingBottom)

    if (props.marginTop !== undefined) sectionProps.style.marginTop = parseInt(props.marginTop)
    if (props.marginBottom !== undefined) sectionProps.style.marginBottom = parseInt(props.marginBottom)

    if (props.anchor !== undefined) sectionProps.id = props.anchor

    if (props.sectionClass !== undefined) {
        sectionProps.className += props.sectionClass
    }

    delete newProps.sectionClass
    delete newProps.paddingLeft
    delete newProps.paddingRight
    delete newProps.paddingTop
    delete newProps.paddingBottom
    delete newProps.marginTop
    delete newProps.marginBottom
    delete newProps.normalPadding
    delete newProps.fullWidth
    delete newProps.fullHeight
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