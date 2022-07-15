import React, { useState, createRef, useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import styles from './Accordion.module.sass'
import Typograph from '/components/custom/Typograph'

import KarrowDownVect from '/assets/vector/karrow-down.svg'

const List = forwardRef((props, ref) => {
    const contentRef = createRef()
    const titleRef = createRef()
    const [show, setShow] = useState(false)
    const [height, setHeight] = useState(0)

    useImperativeHandle(ref, () => ({
        close: () => {
            setShow(false)
        },
    }));

    const setHeightCalc = () => {
        setHeight((show) ? contentRef.current.children[0].clientHeight + titleRef.current.clientHeight : titleRef.current.clientHeight)
    }

    useEffect(() => {
        if (show) props.onActive(props.aid)
        setHeightCalc()
    }, [show])

    useEffect(() => {
        window.addEventListener('resize', setHeightCalc)
        return _ => window.removeEventListener('resize', setHeightCalc)
    }, [setHeightCalc])

    return (
        <li className={ `${ styles.accordion_list } bg-white ${ (show)? styles.active : undefined }` }  style={ { height: height } }>
            <a ref={ titleRef } href='#' className={ `row no-margin between-xs ${ styles.title }` } onClick={ () => setShow(!show) }>
                <Typograph tag='h5' size='xsm-1 sm-1-md' weight='bold extrabold-sm' color='green-70'>{ props.title }</Typograph>
                <KarrowDownVect />
            </a>
            <div ref={ contentRef } className={ styles.content }>
                <div>
                    { props.children }
                </div>
            </div>
        </li>
    )
})

export default function Accordion (props) {

    let lists = []
    
    const onListClick = (id) => {
        if (props.toggleOther !== undefined) {
            for (let i = 0; i < lists.length; i++) {
                const close = lists[i].ref.current.close;
                if (i != id) close()
            }
        }
    }
    
    lists = props.children.map((li, index) => {
        const ref = useRef();
        if (li.type != 'li') return <></>
        return <List ref={ ref } aid={ index } key={ index } { ...li.props } onActive={ onListClick } />
    })

    return (
        <ul className={ styles.accordion }>
            { lists }
        </ul>
    )
}