import styles from './Button.module.sass'

export default function Button (props) {
    const newProps = { ...props }

    newProps.className = `${ styles.btn } `
    newProps.className += (props.fontWeight) ? `font-${ props.fontWeight } ` : ''
    newProps.className += (props.fontSize) ? `font-${ props.fontSize } ` : ''
    newProps.className += (props.textColor) ? `text-${ props.textColor } ` : ''
    newProps.className += (props.borderColor) ? `border-${ props.borderColor } ` : ''
    newProps.className += (props.backgroundColor) ? `bg-${ props.backgroundColor } ` : ''
    newProps.className += props.className || ''

    newProps.style = { ...props.style }

    if (props.xPadding !== undefined) {
        newProps.style.paddingLeft = parseInt(props.xPadding)
        newProps.style.paddingRight = parseInt(props.xPadding)
    }

    if (props.yPadding !== undefined) {
        newProps.style.paddingTop = parseInt(props.yPadding)
        newProps.style.paddingBottom = parseInt(props.yPadding)
    }

    if (props.borderWidth !== undefined) {
        newProps.style.borderWidth = parseInt(props.borderWidth)
        newProps.style.borderStyle = 'solid'
    }

    delete newProps.fontWeight
    delete newProps.fontSize
    delete newProps.textColor
    delete newProps.backgroundColor
    delete newProps.xPadding
    delete newProps.yPadding
    delete newProps.borderColor
    delete newProps.borderWidth

    return (
        <a { ...newProps }>{ props.children }</a>
    )

}