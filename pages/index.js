import Head from 'next/head'
import { useEffect } from 'react'

import styles from './Home.module.sass'
import SetRatio from '../scripts/setRatio'
import Eliptor from '../scripts/eliptor'
import EyeView from '../assets/svgs/eye-view.svg'

export default function HomePage() {

    useEffect(() => {
        
        let setRatioItc = SetRatio({ cssClass: 'set-ratio' })
        setRatioItc.Calculate()

        let eliptorItc = Eliptor({ cssClass: 'elipsing' })
        eliptorItc.Calculate()

        window.onresize = () => {
            setRatioItc.Calculate()
            eliptorItc.Calculate()
        }
    })

    const ecos = [
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
        <>
            <Head>
                <title>Eratani - Home</title>
            </Head>
            <section id={ styles.Hero }>
                <div className={ `${ styles.wrapper } set-ratio` } data-ratio-w='2.33' data-ratio-h='1' data-ratio-min-h='600'>
                    <div className={ styles.background } style={ { backgroundImage: `url('/hero/IEP06300 4.jpg')` } }></div>
                    <div className={ styles.content }>
                        <h1 className='text-green-10'>Selalu Ada<br />Untuk Petani</h1>
                        <p className='text-white align-justify'>Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!</p>
                        <a href='#' className='btn' target='_blank'>Unduh Aplikasi Eratani</a>
                    </div>
                </div>
            </section>
            <section id={ styles.Ecosystem } className='container-padding'>
                <h4 className='text-green-70'>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</h4>
                <div className={ styles.slider }>
                    {ecos.map((eco, index) =>
                        <div className={ `${ styles.slide } ${ (index == 0) ? styles.slide_active : '' }` } key={ index }>
                            <div className={ styles.slide_content }>
                                <h6>
                                    <span className='text-green-50'>{ eco.no }</span>
                                    <span>{ eco.title }</span>
                                </h6>
                                <img src={ eco.image } width='100%' className='set-ratio image-cover' data-ratio-w='1.42' data-ratio-h='1' data-ratio-min-h='0' />
                                <div className={ styles.caption }>
                                    <p className='small elipsing' data-text={ eco.caption }><span>{ eco.caption }</span></p>
                                    <EyeView />
                                </div>
                            </div>
                            <div className={ styles.line }></div>
                        </div>
                    )}
                </div>
            </section>
            <section id={ styles.Solution } className='bg-natural-10 container-padding'>
                <h4 className='text-green-70 align-center'>Solusi Untuk Lahan Pertanian Anda</h4>
            </section>
            <section id={ styles.Maps }>
                <div className='container-padding'>
                    <h4 className='text-green-70 align-center'>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</h4>
                </div>
            </section>
        </>
    ) 
}