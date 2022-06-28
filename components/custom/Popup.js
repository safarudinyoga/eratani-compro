import styles from './Popup.module.sass'
import PopCloseVect from '/assets/vector/pop-close.svg'

export default function Popup (props) {
    const maxWidthStyle = {}
    if (props.maxWidth !== undefined) maxWidthStyle.maxWidth = parseInt(props.maxWidth)
    const overlayStyle = { background: 'rgba(0, 0, 0, 0)' }
    if (props.overlay !== undefined) overlayStyle.background = `rgba(0, 0, 0, ${ parseFloat(props.overlay) })`

    return (
        <div className={ styles.popup_fixed } style={ { ...overlayStyle } }>
            <div className={ styles.popup_wrapper } style={ { ...maxWidthStyle } } >
                { props.children }
                <a href='#' onClick={ props.onPopupClose } className={ styles.popup_close }><PopCloseVect /></a>
            </div>
        </div>
    )
}