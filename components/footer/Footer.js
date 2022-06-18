import Link from 'next/link' 
import styles from './Footer.module.sass'

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
        return (<><h6>{ title }</h6>{ content }</>)
    }

    return (
        <footer id={ styles.Footer } className='container-padding bg-green-80'>
            <div className={ `row ${ styles.main }` }>
                <div className={`col-xs-6 ${ styles.left }`}>
                    <LogoVect />
                    <div className={ styles.office }>{ footerSub('KANTOR PUSAT', <p>Jl. R.A. Kartini No. Kav. 8 South Quarter, Tower C, RT 10/RW 4, Cilandak Barat, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>) }</div>
                    <div>{ footerSub('EMAIL', <p>info@eratani.co.id</p>) }</div>
                    <div>{ footerSub('TELEPON', <p>+62 811 952 2577</p>)}</div>
                </div>
                <div className='col-xs-2'>{ footerSub('PERUSAHAAN', companyNav.map((nav, idx) => <Link key={ idx } href={ `/${ nav.link }` }>{ nav[lang] }</Link>) ) }</div>
                <div className='col-xs-2'>{ footerSub('GABUNG', joinNav.map((nav, idx) => <Link key={ idx } href={ `/${ nav.link }` }>{ nav[lang] }</Link>) ) }</div>
                <div className='col-xs-2'>{ footerSub('MEDIA SOSIAL', <div className={ `row middle-xs between-xs ${ styles.social }`  }>
                        <a href='#'><InstagramVect /></a>
                        <a href='#'><LinkedInVect /></a>
                        <a href='#'><YoutubeVect /></a>
                        <a href='#'><FacebookVect /></a>
                    </div>) }
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12'>
                    <p className={ `${ styles.copyright } align-center small` }>Copyright © 2022 by PT Eratani Teknologi Nusantara</p>
                </div>
            </div>
        </footer>
    )
}