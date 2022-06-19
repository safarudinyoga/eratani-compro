import Link from 'next/link' 
import { useRouter } from "next/router";
import styles from './Header.module.sass'

import LogoVect from '/assets/vector/logo-norm.svg'
import LangIcoVect from '/assets/vector/lang-ico.svg'
import KarrowDownVect from '/assets/vector/karrow-down.svg'

export default function Header () {
    let lang = 'id'
    const navs = [
        { id: 'Beranda',             en: 'Home',                     link: '' },
        { id: 'Solusi Pertanian',    en: 'Agricultural Solution',    link: 'solution' },
        { id: 'Tentang Kami',        en: 'About Us',                 link: 'about-us' },
        { id: 'Blog',                en: 'Blog',                     link: 'blog' },
        { id: 'Agenda',              en: 'Event',                    link: 'event' },
        { id: 'Pertanyaan',          en: 'Question',                 link: 'qna' },
        { id: 'Karir',               en: 'Career',                   link: 'career' } ]

    const router = useRouter()

    return (
        <header id={ styles.Header } className={ `container-padding ${ (router.pathname != '/') ? styles.fix_white : '' }` }>
            <div className='row middle-xs between-xs'>
                <div className='col-xs-2'><LogoVect className={ styles.svg_on_hover } /></div>
                <div className='col-xs-8 align-center'>
                    <nav className={ styles.navigation }>
                        <div className='row'>
                            { navs.map((nav, idx) => 
                                <Link key={ idx } href={ `/${ nav.link }` }>
                                    <a className={ `text-white ${ (router.pathname == `/${ nav.link }`) ? styles.active : '' }` }>{ nav[lang] }</a>
                                </Link> ) 
                            }
                        </div>
                    </nav>
                </div>
                <div className={ `col-xs-2 ${ styles.sw_lang } align-right` }>
                    <p className='text-white font-bold'><LangIcoVect /> &nbsp;&nbsp;&nbsp;{ lang == 'id' ? 'ID' : 'EN' } &nbsp;<KarrowDownVect className={ styles.svg_on_hover } /></p>
                </div>
            </div>
        </header>
    )
}