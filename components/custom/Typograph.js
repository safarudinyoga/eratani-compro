import Link from 'next/link' 

export default function Ellipsis (props) {
    const TagName = props.tag
    const newProps = { ...props }

    const sizeResp = () => {
        let t = ''
        props.size.split(' ').forEach(element => t += `font-${ element } `)
        return t
    } 

    const weightResp = () => {
        let t = ''
        props.weight.split(' ').forEach(element => t += `font-${ element } `)
        return t
    }

    const alignResp = () => {
        let t = ''
        props.align.split(' ').forEach(element => t += `align-${ element } `)
        return t
    }

    newProps.className = (props.size) ? sizeResp() : ''
    newProps.className += (props.weight) ? weightResp() : ''
    newProps.className += (props.color) ? `text-${ props.color } ` : ''
    newProps.className += (props.align) ? alignResp() : ''
    newProps.className += (props.disable) ? `disable-pointer-event ` : ''
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
    delete newProps.disable
    delete newProps.replace
    delete newProps.href

    if (TagName == 'a') {
        if (props.replace !== undefined)
            return (
                <Link href={ props.href } replace scroll={true} locale={ props.locale }><a { ...newProps }>{ props.children }</a></Link>
            )
        else
            return (
                <Link href={ props.href } scroll={true} locale={ props.locale }><a { ...newProps }>{ props.children }</a></Link>
            )
    }

    return (
        <TagName { ...newProps }>{ props.children }</TagName>
    )
}