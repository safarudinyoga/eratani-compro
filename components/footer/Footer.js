import Link from 'next/link' 
import styles from './Footer.module.sass'

import Typograph from '../custom/Typograph'

import LogoVect from '../../assets/vector/logo-w-norm.svg'
import InstagramVect from '../../assets/vector/instagram.svg'
import FacebookVect from '../../assets/vector/facebook.svg'
import LinkedInVect from '../../assets/vector/linkedin.svg'
import YoutubeVect from '../../assets/vector/youtube.svg'

export default function Footer () {
    const lang = 'id'
    const companyNav = [
        { id: 'TENTANG KAMI',        en: 'About Us',                 link: 'about-us' },
        { id: 'BLOG',                en: 'Blog',                     link: 'blog' },
        { id: 'AGENDA',              en: 'Event',                    link: 'event' },
        { id: 'PERTANYAAN',          en: 'Question',                 link: 'qna' },
        { id: 'KARIR',               en: 'Career',                   link: 'career' } ]
    const joinNav = [
        { id: 'PETANI',             en: 'About Us',                 link: 'about-us' },
        { id: 'TOKO TANI',          en: 'Blog',                     link: 'blog' },
        { id: 'GAPOKTAN',           en: 'Event',                    link: 'event' },
        { id: 'POKTAN',             en: 'Question',                 link: 'qna' },
        { id: 'SUPPLIER',           en: 'Career',                   link: 'career' },
        { id: 'BUYER',              en: 'Career',                   link: 'career' } ]

    function footerSub(title, content) {
        return (
            <>
                <Typograph tag='h6' size='sm-1'>{ title }</Typograph>
                { content }
            </>)
    }

    return (
        <footer id={ styles.Footer } className='container-padding bg-green-80'>
            <div className={ `row ${ styles.main }` }>
                <div className={`col-xs-6 ${ styles.left }`}>
                    <LogoVect />
                    <div className={ styles.office }>{ footerSub('KANTOR PUSAT', <Typograph tag='p' size='sm-2' line='28'>Jl. R.A. Kartini No. Kav. 8 South Quarter, Tower C, RT 10/RW 4, Cilandak Barat, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</Typograph>) }</div>
                    <div>{ footerSub('EMAIL', <Typograph tag='p' size='sm-2' line='20'>info@eratani.co.id</Typograph>) }</div>
                    <div>{ footerSub('TELEPON', <Typograph tag='p' size='sm-2' line='20'>+62 811 952 2577</Typograph>)}</div>
                </div>
                <div className='col-xs-2'>{ footerSub('PERUSAHAAN', companyNav.map((nav, idx) => <Link key={ idx } href={ `/${ nav.link }` }><><Typograph tag='a' size='sm-2' line='20'>{ nav[lang] }</Typograph></></Link>) ) }</div>
                <div className='col-xs-2'>{ footerSub('GABUNG', joinNav.map((nav, idx) => <Link key={ idx } href={ `/${ nav.link }` }><><Typograph tag='a' size='sm-2' line='20'>{ nav[lang] }</Typograph></></Link>) ) }</div>
                <div className='col-xs-2'>{ footerSub('MEDIA SOSIAL', <div className={ `row middle-xs between-xs ${ styles.social }`  }>
                        <a href='#'><InstagramVect /></a>
                        <a href='#'><LinkedInVect /></a>
                        <a href='#'><YoutubeVect /></a>
                        <a href='#'><FacebookVect /></a>
                    </div>) }
                </div>
            </div>
            <Typograph tag='p' size='xsm-1' align='center'>Copyright © 2022 by PT Eratani Teknologi Nusantara</Typograph>
        </footer>
    )
}