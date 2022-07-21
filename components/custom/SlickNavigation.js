import React, { useState, useEffect, createRef } from 'react';
import styles from './SlickNavigation.module.sass'

import SlickNextVect from '../../assets/vector/slick-next.svg'
import SlickPrevVect from '../../assets/vector/slick-prev.svg'

export default function SlickCustom (className, settings) {

    const NextArrow = ({ onClick }) => <div className={ `${ styles.slick_arrow } ${ styles.arrow_next } bg-natural-10` }><a onClick={ onClick } className={ `bg-green-60` }><SlickNextVect /></a></div>
    const PrevArrow = ({ onClick }) => <div className={ `${ styles.slick_arrow } ${ styles.arrow_prev } bg-natural-10` }><a onClick={ onClick } className={ `bg-green-60` }><SlickPrevVect /></a></div>

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
                try {
                    document.querySelectorAll(`.${ className } .${ styles.slick_dots } a`)[0].classList.add(styles.slick_active)
                } catch (error) { }
            },
            beforeChange: (current, next) => {
                if (settings.onBeforeChange !== undefined) settings.onBeforeChange(current, next)

                try {
                    document.querySelectorAll(`.${ className } .${ styles.slick_dots } .${ styles.slick_active }`)[0].className = ''
                } catch (error) { }
                try {
                    setTimeout(() => {
                        document.querySelectorAll(`.${ className } .${ styles.slick_dots } .slick-active`)[0]?.children[0].classList.add(styles.slick_active)
                    }, 20)
                } catch (error) { }
            }
        }
    }

    return ret
}