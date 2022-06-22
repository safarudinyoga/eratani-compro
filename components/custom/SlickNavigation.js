import styles from './SlickNavigation.module.sass'

import SlickNextVect from '../../assets/vector/slick-next.svg'
import SlickPrevVect from '../../assets/vector/slick-prev.svg'

export default function SlickCustom (className, settings) {

    const NextArrow = ({ onClick }) => <div className={ `${ styles.slick_arrow } ${ styles.arrow_next } bg-natural-10` }><a onClick={ onClick } className={ `bg-green-60` }><SlickNextVect /></a></div>
    const PrevArrow = ({ onClick }) => <div className={ `${ styles.slick_arrow } ${ styles.arrow_prev } bg-natural-10` }><a onClick={ onClick } className={ `bg-green-60` }><SlickPrevVect /></a></div>
    
    const slidePerShow = settings.slidesToShow | 1

    let ret = { ...settings }

    if (settings.arrows) {
        ret = { 
            ...ret,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }
    }

    if (settings.dots) {
        ret = { 
            ...ret,
            dotsClass: styles.slick_dots,
            customPaging: i => <a />,
            onInit: () => {
                const node = document.querySelectorAll(`.${ className } .${ styles.slick_dots } a`)[0]
                if (node) node.classList.add(styles.slick_active)
            },
            beforeChange: (current, next) => {
                const nodes = document.querySelectorAll(`.${ className } .${ styles.slick_dots } a`)
                if (nodes.length == 0) return
                
                nodes[current / slidePerShow].classList.remove(styles.slick_active)
                nodes[next / slidePerShow].classList.add(styles.slick_active)
            }
        }
    } 

    return ret
} 