import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

import Typograph from './Typograph'

import styles from './Article.module.sass'
import WhatsappVect from '/assets/vector/share-wa.svg'
import FacebookVect from '/assets/vector/share-fb.svg'
import TwitterVect from '/assets/vector/share-twt.svg'
import LinkVect from '/assets/vector/share-link.svg'
import { globalText } from 'utils/globalText';

export default function Container (props) {
    const ButtonRef = props.children[1]
    const { locale } = useRouter()

    return (
        <>
            <div className='row no-margin'>
                <div>
                    <Typograph tag='h2' size='sm-2 md-1-sm xlg-3-md' color='green-70' className={ styles.title }>{ props.title }</Typograph>
                    <Typograph tag='h6' size='xsm-2 sm-2-md' weight='light bold-sm' color='natural-50' className={ styles.created }>{ props.creator } / { props.date }</Typograph>
                </div>
                <img src={ props.cover } width='100%' className={ `${ styles.cover } first-xs last-sm` } />
            </div>
            <article className={ `${ styles.article } ${ props.className || '' }` }>{ props.children[0] }</article>
            { (ButtonRef !== undefined) ? <div className={ `align-center ${ styles.buttonRef }` }>{ ButtonRef }</div> : <></> }
            <div className={ `row middle-xs between-xs no-margin  ${ styles.share }` }>
                <Typograph tag='h6' size='xsm-1 sm-2-sm' color='natural-50'>{globalText.share[locale]}</Typograph>
                <div className='row no-margin'>
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
                </div>
            </div>
        </>
    )
}