import { useRouter } from "next/router";
import styles from './Header.module.sass'

import Typograph from '../custom/Typograph'

import LogoVect from '/assets/vector/logo-norm.svg'
import LangIcoVect from '/assets/vector/lang-ico.svg'
import KarrowDownVect from '/assets/vector/karrow-down.svg'

const Header = () => {
    const router = useRouter()
    const activePathname = router.asPath.slice(1).split('/')[0]

    let lang = 'id'
    const navs = [
        { id: 'Beranda',             en: 'Home',                     link: '' },
        { id: 'Solusi Pertanian',    en: 'Agricultural Solution',    anchor: '#Solution'},
        { id: 'Tentang Kami',        en: 'About Us',                 link: 'about-us' },
        { id: 'Blog',                en: 'Blog',                     link: 'blog' },
        { id: 'Agenda',              en: 'Event',                    link: 'event' },
        { id: 'Pertanyaan',          en: 'Question',                 link: 'qna' },
        { id: 'Karir',               en: 'Career',                   link: 'career' } ]

    const { pathname } = useRouter()

    return (
        <header id={ styles.Header } className={ `container-padding ${ (pathname != '/') ? styles.fix_white : '' }` }>
            <div className='row middle-xs between-xs'>
                <div className='col-xs-2'><LogoVect className={ styles.svg_on_hover } /></div>
                <div className='col-xs-8 align-center'>
                    <nav className={ styles.navigation }>
                        <div className='row'>
                            { navs.map((nav, index) =>
                                <Typograph key={ index } tag='a' href={ `/${ (nav.anchor !== undefined) ? nav.anchor : nav.link }` } size='sm-2' color='white' className={ (pathname.split('/')[1] == `${ nav.link }`) ? styles.active : '' }>{ nav[lang] }</Typograph>
                            )}
                        </div>
                    </nav>
                </div>
                <div className={ `col-xs-2 ${ styles.sw_lang } align-right` }>
                    <Typograph tag='h6' size='md-3' color='white'>
                        <LangIcoVect /> &nbsp;&nbsp;&nbsp;{ lang == 'id' ? 'ID' : 'EN' } &nbsp;<KarrowDownVect className={ styles.svg_on_hover } />
                    </Typograph>
                </div>
            </div>
        </header>
    )
}

export default Header