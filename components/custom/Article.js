import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import Link from 'next/link' 

import Typograph from './Typograph'

import styles from './Article.module.sass'
import WhatsappVect from '/assets/vector/share-wa.svg'
import FacebookVect from '/assets/vector/share-fb.svg'
import TwitterVect from '/assets/vector/share-twt.svg'
import LinkVect from '/assets/vector/share-link.svg'

export default function Container (props) {
    const ButtonRef = props.children[1]
    return (
        <>
            <Typograph tag='h2' size='xlg-3' color='green-70' className={ styles.title }>{ props.title }</Typograph>
            <Typograph tag='h6' size='sm-2' color='natural-50' className={ styles.created }>{ props.creator } / { props.date }</Typograph>
            <img src={ props.cover } width='100%' className={ styles.cover } />
            <article className={ `${ styles.article } ${ props.className || '' }` }>{ props.children[0] }</article>
            { (ButtonRef !== undefined) ? <div className={ `align-center ${ styles.buttonRef }` }>{ ButtonRef }</div> : <></> }
            <Typograph tag='h6' size='sm-2' color='natural-50' className={ styles.share }>Bagikan Postingan Ini
                <Link href='#'>
                    <a><WhatsappVect /></a>
                </Link>
                <Link href='#'>
                    <a><FacebookVect /></a>
                </Link>
                <Link href='#'>
                    <a><TwitterVect /></a>
                </Link>
                <Link href='#'>
                    <a><LinkVect /></a>
                </Link>
            </Typograph>
        </>
    )
}