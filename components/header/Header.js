import Link from 'next/link'
import { useRef } from 'react';
import { useRouter } from "next/router";
import gsap from 'gsap'

import styles from './Header.module.sass'
import Typograph from '../custom/Typograph'

import LogoVect from '/assets/vector/logo-norm.svg'
import LangIcoVect from '/assets/vector/lang-ico.svg'
import KarrowDownVect from '/assets/vector/karrow-down.svg'

export default function Header () {
    const navs = [
        { id: 'Beranda',             en: 'Home',                        link: '' },
        { id: 'Solusi Pertanian',    en: 'Agricultural Solution',       anchor: '#Solution'},
        { id: 'Tentang Kami',        en: 'About',                       link: 'about' },
        { id: 'Blog',                en: 'Blog',                        link: 'blog' },
        { id: 'Agenda',              en: 'Agenda',                      link: 'agenda' },
        { id: 'Pertanyaan',          en: 'FAQ',                         link: 'faq' },
        { id: 'Karir',               en: 'Career',                      link: 'career' } ]
    const { pathname, locale } = useRouter()
    const dropdownRef = useRef()

    return (
        <header id={ styles.Header } className={ `container-padding ${ (pathname != '/') ? styles.fix_white : '' }` }>
            <div className='row middle-xs between-xs'>
                <div className='col-xs-2'>
                    <Link href='/'>
                        <a>
                            <LogoVect className={ styles.svg_on_hover } />
                        </a>
                    </Link>
                </div>
                <div className='col-xs-8 align-center'>
                    <nav className={ styles.navigation }>
                        <div className='row'>
                            { navs.map((nav, index) =>
                                <Typograph key={ index } tag='a' href={ `/${ (nav.anchor !== undefined) ? nav.anchor : nav.link }` } size='sm-2' color='white' className={ (pathname.split('/')[1] == `${ nav.link }`) ? styles.active : '' }>{ nav[locale] }</Typograph>
                            )}
                        </div>
                    </nav>
                </div>
                <div className={ `col-xs-2 ${ styles.sw_lang } align-right` }>
                    <div onMouseEnter={ () => gsap.to(dropdownRef.current, { autoAlpha: 1, duration: 0.3 }) } onMouseLeave={ () => gsap.to(dropdownRef.current, { autoAlpha: 0, duration: 0.3 }) }>
                        <Typograph tag='h6' size='md-3' color='white'>
                            <LangIcoVect /> &nbsp;&nbsp;&nbsp;{ locale == 'id' ? 'ID' : 'EN' } &nbsp;<KarrowDownVect className={ styles.svg_on_hover } />
                        </Typograph>
                        <div ref={ dropdownRef } className={ styles.dropdown_lang }>
                            <ul className='bg-white'>
                                <li className='align-center'>
                                    <Typograph tag='a' href={ pathname } locale='id' size='xsm-1' color='natural-60'>Bahasa Indonesia</Typograph>
                                </li>
                                <li className='align-center'>
                                    <Typograph tag='a' href={ pathname } locale='en' size='xsm-1' color='natural-60'>English</Typograph>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header