import styles from './Input.module.sass'

export default function Input (props) {
    const newProps = { ...props }

    newProps.className = `${ styles[`input_${ props.model }`] } `
    newProps.className += props.className || ''

    newProps.style = { ...props.style }

    delete newProps.model

    if (props.children !== undefined) {
        return (
            <div className={ styles.input_w_icon }>
                <input { ...props } />
                <span className={ styles.icon }>{ props.children }</span>
            </div>
        )
    }

    return (
        <input { ...newProps } />
    )
}