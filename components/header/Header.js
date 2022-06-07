import Link from 'next/link' 
import styles from './Header.module.sass'

import Logo from '../../assets/svgs/logo-norm.svg'
import LangIco from '../../assets/svgs/lang-ico.svg'
import KarrowDown from '../../assets/svgs/karrow-down.svg'

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

    return (
        <header className={ `${styles.header} wrp-padding` }>
            <div className='row middle-xs between-xs'>
                <div className='col-xs-2'><Logo /></div>
                <div className='col-xs-10'>
                    <div className='row middle-xs end-xs'>
                        <nav className={ styles.navigation }>
                            <div className='row'>{ navs.map((nav, idx) => <Link key={idx} href={ `/${ nav.link }` }>{ nav[lang] }</Link>) }</div>
                        </nav>
                        <div className={ styles.sw_lang }>
                            <p><LangIco /> &nbsp;&nbsp;&nbsp;{ lang == 'id' ? 'ID' : 'EN' } &nbsp;<KarrowDown /></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}