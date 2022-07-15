import styles from './Input.module.sass'
import Parse from 'html-react-parser'

export default function Input (props) {
    const newProps = { ...props }

    newProps.className = `${ styles[`input_${ props.model }`] } `
    newProps.className += props.className || ''
    newProps.style = { ...props.style }

    delete newProps.model
    delete newProps.unit

    if (props.children !== undefined) {
        return (
            <div className={ styles.input_w_icon }>
                <input { ...props } />
                <span className={ styles.icon }>{ props.children }</span>
            </div>
        )
    }

    if (props.model == '2') {
        delete newProps.placeholder

        return (
            <label htmlFor={ props.id } className={ `${ styles.input_2_label } ${ (props.unit !== undefined) ? styles.input_2_w_unit : undefined }` }>
                <input { ...newProps } placeholder=' ' />
                <span className={ styles.placeholder }>{ props.placeholder }</span>
                { (props.unit !== undefined) && 
                    <span className={ styles.unit }>{ Parse(String(props.unit)) }</span>
                }
                
            </label>
        )
    }

    return (
        <input { ...newProps } />
    )
}