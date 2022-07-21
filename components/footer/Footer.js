import Link from 'next/link' 
import { useRouter } from "next/router";
import styles from './Footer.module.sass'

import Typograph from '../custom/Typograph'

import LogoVect from '../../assets/vector/logo.svg'
import InstagramVect from '../../assets/vector/instagram.svg'
import FacebookVect from '../../assets/vector/facebook.svg'
import LinkedInVect from '../../assets/vector/linkedin.svg'
import YoutubeVect from '../../assets/vector/youtube.svg'

export default function Footer () {
    const { locale } = useRouter()
    const companyNav = [
        { id: 'TENTANG KAMI',        en: 'ABOUT',                   link: 'about' },
        { id: 'BLOG',                en: 'BLOG',                    link: 'blog' },
        { id: 'AGENDA',              en: 'AGENDA',                  link: 'event' },
        { id: 'PERTANYAAN',          en: 'FAQ',                     link: 'faq' },
        { id: 'KARIR',               en: 'CAREER',                  link: 'career' } ]
    const joinNav = [
        { id: 'PETANI',             en: 'PETANI',                   link: 'join/petani' },
        { id: 'TOKO TANI',          en: 'TOKO TANI',                link: 'join/toko-tani' },
        { id: 'GAPOKTAN',           en: 'GAPOKTAN',                 link: 'join/gapoktan' },
        { id: 'POKTAN',             en: 'POKTAN',                   link: 'join/poktan' },
        { id: 'SUPPLIER',           en: 'SUPPLIER',                 link: 'join/supplier' },
        { id: 'BUYER',              en: 'BUYER',                    link: 'join/pembeli' } ]
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

    const footerSub = (title, content) => {
        return (
            <>
                <Typograph tag='h6' size='sm-2 sm-1-sm'>{ title }</Typograph>
                { content }
            </>)
    }

    return (
        <footer id={ styles.Footer } className='container-padding container-max-width bg-green-80'>
            <div>
                <LogoVect width='76' />
                <div className={ `row ${ styles.main }` }>
                    <div className={`col-xs-12 col-md-5 col-lg-6 last-xs first-md ${ styles.left }`}>
                        <LogoVect width='110' />
                        <div className={ styles.office }>{ footerSub(otherContent.officeTitle[locale], <Typograph tag='p' size='xsm-2 sm-2-sm' line='22'>Jl. R.A. Kartini No. Kav. 8 South Quarter, Tower C, RT 10/RW 4, Cilandak Barat, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</Typograph>) }</div>
                        <div className={ styles.email }>{ footerSub(otherContent.emailTitle[locale], <Typograph tag='p' size='sm-2' line='20'>info@eratani.co.id</Typograph>) }</div>
                        <div className={ styles.telephone }>{ footerSub(otherContent.telephoneTitle[locale], <Typograph tag='p' size='sm-2' line='20'>+62 811 952 2577</Typograph>)}</div>
                    </div>
                    <div className='col-xs-6 col-sm-4 col-md-2'>{ footerSub(otherContent.companyTitle[locale], companyNav.map((nav, index) => <Typograph key={ index } tag='a' href={ `/${ nav.link }` } size='xsm-2 sm-2-sm' line='20'>{ nav[locale] }</Typograph>) ) }</div>
                    <div className='col-xs-6 col-sm-4 col-md-2'>{ footerSub(otherContent.joinTitle[locale], joinNav.map((nav, index) => <Typograph key={ index } tag='a' href={ `/${ nav.link }` } size='xsm-2 sm-2-sm' line='20'>{ nav[locale] }</Typograph>) ) }</div>
                    <div className='col-xs-8 col-sm-4 col-md-3 col-lg-2'>{ footerSub(otherContent.medsosTitle[locale], <div className={ `row middle-xs between-xs no-margin ${ styles.social }`  }>
                            <a href='#' className='col-xs'><InstagramVect /></a>
                            <a href='#' className='col-xs'><LinkedInVect /></a>
                            <a href='#' className='col-xs'><YoutubeVect /></a>
                            <a href='#' className='col-xs'><FacebookVect /></a>
                        </div>) }
                    </div>
                </div>
                <Typograph tag='p' size='xsm-3 xsm-1-sm' weight='light regular-sm' align='center'>Copyright © 2022 by PT Eratani Teknologi Nusantara</Typograph>
            </div>
        </footer>
    )
}