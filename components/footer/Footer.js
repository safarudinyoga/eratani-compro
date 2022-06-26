import Link from 'next/link' 
import { useRouter } from "next/router";
import styles from './Footer.module.sass'

import Typograph from '../custom/Typograph'

import LogoVect from '../../assets/vector/logo-w-norm.svg'
import InstagramVect from '../../assets/vector/instagram.svg'
import FacebookVect from '../../assets/vector/facebook.svg'
import LinkedInVect from '../../assets/vector/linkedin.svg'
import YoutubeVect from '../../assets/vector/youtube.svg'

export default function Footer () {
    const { pathname, locale } = useRouter()
    
    const companyNav = [
        { id: 'TENTANG KAMI',        en: 'ABOUT',                   link: 'about' },
        { id: 'BLOG',                en: 'BLOG',                    link: 'blog' },
        { id: 'AGENDA',              en: 'AGENDA',                  link: 'event' },
        { id: 'PERTANYAAN',          en: 'FAQ',                     link: 'faq' },
        { id: 'KARIR',               en: 'CAREER',                  link: 'career' } ]
    const joinNav = [
        { id: 'PETANI',             en: 'PETANI',                   link: '#' },
        { id: 'TOKO TANI',          en: 'TOKO TANI',                link: '#' },
        { id: 'GAPOKTAN',           en: 'GAPOKTAN',                 link: '#' },
        { id: 'POKTAN',             en: 'POKTAN',                   link: '#' },
        { id: 'SUPPLIER',           en: 'SUPPLIER',                 link: '#' },
        { id: 'BUYER',              en: 'BUYER',                    link: '#' } ]

    const otherContent = {
        officeTitle: {
            id: 'KANTOR PUSAT',
            en: 'KANTOR PUSAT',
        },
        emailTitle: {
            id: 'EMAIL',
            en: 'EMAIL',
        },
        telephoneTitle: {
            id: 'TELEPON',
            en: 'TELEPON',
        },
        companyTitle: {
            id: 'PERUSAHAAN',
            en: 'PERUSAHAAN',
        },
        joinTitle: {
            id: 'GABUNG',
            en: 'GABUNG',
        },
        medsosTitle: {
            id: 'MEDIA SOSIAL',
            en: 'MEDIA SOSIAL',
        }
    }

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
                    <div className={ styles.office }>{ footerSub(otherContent.officeTitle[locale], <Typograph tag='p' size='sm-2' line='28'>Jl. R.A. Kartini No. Kav. 8 South Quarter, Tower C, RT 10/RW 4, Cilandak Barat, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</Typograph>) }</div>
                    <div>{ footerSub(otherContent.emailTitle[locale], <Typograph tag='p' size='sm-2' line='20'>info@eratani.co.id</Typograph>) }</div>
                    <div>{ footerSub(otherContent.telephoneTitle[locale], <Typograph tag='p' size='sm-2' line='20'>+62 811 952 2577</Typograph>)}</div>
                </div>
                <div className='col-xs-2'>{ footerSub(otherContent.companyTitle[locale], companyNav.map((nav, index) => <Typograph key={ index } tag='a' href={ `/${ nav.link }` } size='sm-2' line='20'>{ nav[locale] }</Typograph>) ) }</div>
                <div className='col-xs-2'>{ footerSub(otherContent.joinTitle[locale], joinNav.map((nav, index) => <Typograph key={ index } tag='a' href={ `/${ nav.link }` } size='sm-2' line='20'>{ nav[locale] }</Typograph>) ) }</div>
                <div className='col-xs-2'>{ footerSub(otherContent.medsosTitle[locale], <div className={ `row middle-xs between-xs ${ styles.social }`  }>
                        <a href='#' className='col-xs'><InstagramVect /></a>
                        <a href='#' className='col-xs'><LinkedInVect /></a>
                        <a href='#' className='col-xs'><YoutubeVect /></a>
                        <a href='#' className='col-xs'><FacebookVect /></a>
                    </div>) }
                </div>
            </div>
            <Typograph tag='p' size='xsm-1' align='center'>Copyright © 2022 by PT Eratani Teknologi Nusantara</Typograph>
        </footer>
    )
}