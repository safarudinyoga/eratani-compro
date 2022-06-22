import Link from 'next/link' 

export default function Ellipsis (props) {
    const TagName = props.tag
    const newProps = { ...props }

    newProps.className = (props.size) ? `font-${ props.size } ` : ''
    newProps.className += (props.weight) ? `font-${ props.weight } ` : ''
    newProps.className += (props.color) ? `text-${ props.color } ` : ''
    newProps.className += (props.align) ? `align-${ props.align } ` : ''

    newProps.style = { ...props.style }
    
    if (props.maxWidth !== undefined) {
        newProps.style.maxWidth = parseInt(props.maxWidth)
        if (props.align == 'center' || props.align == 'justify') newProps.className += 'margin-auto '
    }
    if (props.line !== undefined) newProps.style.lineHeight = parseInt(props.line) + 'px'
    if (props.fontStyle !== undefined) newProps.style.fontStyle = props.fontStyle
    if (props.decoration !== undefined)  newProps.style.textDecoration = props.decoration
    if (props.transform !== undefined) newProps.style.textTransform = props.transform

    newProps.className += props.className || ''

    delete newProps.tag
    delete newProps.color
    delete newProps.size
    delete newProps.weight
    delete newProps.maxWidth
    delete newProps.align

    if (TagName == 'a') {
        delete newProps.href
        return (
            <Link href={ props.href }><a { ...newProps }>{ props.children }</a></Link>
        )
    }

    return (
        <TagName { ...newProps }>{ props.children }</TagName>
    )
}