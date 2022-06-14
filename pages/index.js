import Head from 'next/head'
import { useEffect } from 'react'
import Parse from 'html-react-parser'

import styles from './Home.module.sass'
import SetRatio from '../scripts/setRatio'
import Eliptor from '../scripts/eliptor'
import Solution from '../scripts/solution'
import EyeView from '../assets/svgs/eye-view.svg'
import EcoArrow from '../assets/svgs/eco-arrow.svg'

export default function HomePage() {

    const PAGE_TITLE = 'Home'

    useEffect(() => {
        Solution({ cssClass: '__Solution__' })
        
        let setRatioItc = SetRatio({ cssClass: '__SetRatio__' })
        setRatioItc.Calculate()

        let eliptorItc = Eliptor({ cssClass: '__Elipsing__' })
        eliptorItc.Calculate()

        window.onresize = () => {
            setRatioItc.Calculate()
            eliptorItc.Calculate()
        }
    })

    return (
        <>
            <Head>
                <title>Eratani - { PAGE_TITLE }</title>
            </Head>

            { sectionHero() }

            { sectionEcosystem() }

            { sectionSolution() }

            { sectionMaps() }
        </>
    ) 
}

/* ------------------ Hero Banner ------------------ */
const sectionHero = () => {
    return (
        <section id={ styles.Hero }>
            <div className={ `${ styles.wrapper } __SetRatio__` } data-ratio-w='2.33' data-ratio-h='1' data-ratio-min-h='600'>
                <div className={ styles.background } style={ { backgroundImage: `url('/hero/IEP06300 4.jpg')` } }></div>
                <div className={ styles.content }>
                    <h1 className='text-green-10'>Selalu Ada<br />Untuk Petani</h1>
                    <p className='text-white align-justify'>Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!</p>
                    <a href='#' className='btn' target='_blank'>Unduh Aplikasi Eratani</a>
                </div>
            </div>
        </section>
    )
}
/* ------------------ End Hero Banner ------------------ */

/* ------------------ Ecosystem ------------------ */
const sectionEcosystem = () => {
    const dataEcosystem = [
        {
            no: '01',
            title: 'Memiliki 1.000+ Petani Binaan',
            caption: 'Sejak berdiri 1 tahun lalu Eratani telah membantu lebih dari 5000 petani dalam kemudahan akses modal dan membuka akses...',
            image: '/ecosystem/DSC04813 1.jpg'
        },
        {
            no: '02',
            title: 'Lebih dari 20 Miliar Pendanaan Tersalurkan',
            caption: 'Eratani telah menyalurkan lebih dari 20 Miliar pendanaan untuk petani binaannya, meningkat 100% dari sebelumnya dimana ini ...',
            image: '/ecosystem/DSC04798 1.jpg'
        },
        {
            no: '03',
            title: 'Pendapatan Petani Meningkat Lebih dari 20%',
            caption: 'Eratani membantu para petani binaan untuk meningkatkan pendapatan dengan memberikan dukungan pendanaan dan...',
            image: '/ecosystem/Eratanijogja-106 1.jpg'
        },
        {
            no: '04',
            title: 'Telah Memiliki Lebih dari 5.000 Ha Lahan Binaan',
            caption: 'Luas lahan binaan Eratani kini telah mencapai lebih dari 5.000 yang kini tersebar di pulau Jawa.',
            image: '/ecosystem/Eratanijogja-18 2.jpg'
        },
        {
            no: '05',
            title: 'Memiliki 1.000+ Petani Binaan',
            caption: 'Eratani membantu para petani binaan untuk meningkatkan produktivitas dan hasil panen dengan memberikan pendampi...',
            image: '/ecosystem/DSC04891 1.jpg'
        }
    ]

    return (
        <section id={ styles.Ecosystem } className='container-padding'>
            <h4 className='text-green-70'>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</h4>
            <div className={ `${ styles.eco_arrow } align-right` }>
                <a href='#' id='eco-left'><EcoArrow /></a>
                <a href='#' id='eco-right'><EcoArrow /></a>
            </div>
            <div className={ styles.slider }>
                { dataEcosystem.map((eco, index) =>
                    <div className={ `${ styles.slide } ${ (index == 0) ? styles.slide_active : '' }` } key={ index }>
                        <div className={ styles.slide_content }>
                            <h6>
                                <span className='text-green-50'>{ eco.no }</span>
                                <span>{ eco.title }</span>
                            </h6>
                            <img src={ eco.image } width='100%' className='__SetRatio__ image-cover' data-ratio-w='1.42' data-ratio-h='1' data-ratio-min-h='0' />
                            <div className={ styles.caption }>
                                <p className='small __Elipsing__' data-text={ eco.caption }><span>{ eco.caption }</span></p>
                                <a href="#"><EyeView /></a>
                            </div>
                        </div>
                        <div className={ styles.line }></div>
                    </div>
                ) }
            </div>
        </section>
    )
}
/* ------------------ End Ecosystem ------------------ */

/* ------------------ Solutions ------------------ */
const sectionSolution = () => {
    const solutionData = [
        {
            title1: 'Bantuan<br />Permodalan dan<br />Pendampingan',
            title2: 'Bantuan Permodalan dan<br />Pendampingan',
            caption: 'Unduh aplikasi Eratani sekarang untuk mendapatkan bantuan permodalan, pemenuhan kebutuhan sarana produksi pertanian, penyaluran hasil panen, hingga pendampingan dari para ahli di bidang pertanian.',
            link: {
                text: 'Unduh Sekarang',
                href: '#'
            },
            image: '/solution/Pendampingan 3.jpg'
        },
        {
            title1: 'Pilihan<br />Sarana Produksi<br />Pertanian Terbaik',
            title2: 'Pilihan Sarana Produksi<br />Pertanian Terbaik',
            caption: 'Eratani bekerja sama dengan berbagai produsen sarana produksi pertanian untuk bisa menyediakan sarana produksi pertanian dengan kualitas terbaik kepada para petani binaan. Segera hubungi kami untuk mendapatkan berbagai pilihan sarana produksi pertanian terbaik dengan harga terstandarisasi.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            image: '/solution/DSC04912.jpg'
        },
        {
            title1: 'Penyaluran Beras<br />dan Gabah<br />Terbaik',
            title2: 'Penyaluran Beras dan Gabah<br />Terbaik',
            caption: 'Pada proses pasca panen, Eratani membantu untuk mengolah hasil panen dengan menyalurkan gabah dan beras dari petani binaan yang tersebar di seluruh Indonesia. Bagi Anda yang ingin menjual ataupun membeli gabah dan beras dengan kualitas terbaik, silakan hubungi kami untuk informasi lebih lanjut.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            image: '/solution/Hasil Panen.jpg'
        }
    ]

    return (
        <section id={ styles.Solution } className='bg-natural-10 container-padding'>
            <h4 className='text-green-70 align-center'>Solusi Untuk Lahan Pertanian Anda</h4>
            <p className='align-center'>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan petani di seluruh Indonesia. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</p>
            <div className={ `row ${ styles.row }` }>
                { solutionData.map((solution, index) =>
                    <div className={`col-xs-4 ${ styles.column }`} key={ index }>
                        <div className={`__SetRatio__ __Solution__ ${ styles.wrapper }`} data-ratio-w='1' data-ratio-h='1.26' data-ratio-min-h='0'>
                            <img src={ solution.image } className='__SolutionImage__ image-cover' />
                            <h3 className='text-green-10 __SolutionTitle__'>
                                <span>{ Parse(solution.title1) }</span>
                                <span>{ Parse(solution.title2) }</span>
                            </h3> 
                            <div className={ `${styles.caption} align-center __SolutionCaption__` }>
                                <p className='text-green-10 align-justify'>{ solution.caption }</p>
                                <a href={ solution.link.href } className='btn' target='_blank'>{ solution.link.text }</a>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    )
}
/* ------------------ End Solutions ------------------ */

/* ------------------ Maps ------------------ */
const sectionMaps = () => {
    return (
        <section id={ styles.Maps }>
            <div className='container-padding'>
                <h4 className='text-green-70 align-center'>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</h4>
            </div>
        </section>
    )
}
/* ------------------ End Maps ------------------ */