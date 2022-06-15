import Parse from 'html-react-parser'
import { useState } from 'react';
import Slick from "react-slick";
import gsap from 'gsap'

import styles from './Home.module.sass'
import EyeView from '../../assets/svgs/eye-view.svg'
import EcoArrow from '../../assets/svgs/eco-arrow.svg'
import Indonesia from '../../assets/svgs/indonesia.svg'
import MapsHvr from '../../assets/svgs/maps-hvr.svg'

/* ------------------ Hero Banner ------------------ */
const Hero = () => {
    
    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Hero } key={ key }>
                <div className={ `${ styles.wrapper } __SetRatio__` } data-ratio-w='2.33' data-ratio-h='1' data-ratio-min-h='600'>
                    <div className={ styles.background } style={ { backgroundImage: `url('/hero/IEP06300 4.jpg')` } }></div>
                    <div className={ styles.content }>
                        <h1 className='text-green-10'>Selalu Ada<br />Untuk Petani</h1>
                        <p className='text-white align-justify'>Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!</p>
                        <a href='#' className='btn' target='_blank'>Unduh Aplikasi Eratani</a>
                    </div>
                </div>
            </section>
        ), 
        Script: scripts
    } 
}
/* ------------------ End Hero Banner ------------------ */

/* ------------------ Ecosystem ------------------ */
const Ecosystem = () => {

    const scripts = () => { }

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

    return {
        Html: (key) => (
            <section id={ styles.Ecosystem } className='container-padding' key={ key }>
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
        ),
        Script: scripts
    } 
}
/* ------------------ End Ecosystem ------------------ */

/* ------------------ Solutions ------------------ */
const Solution = () => {

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

    const scripts = () => {
        const solutionNodes = document.getElementsByClassName('__Solution__')

        Array.prototype.forEach.call(solutionNodes, el => {
            const captionNode = el.getElementsByClassName('__SolutionCaption__')[0]
            const titleNode = el.getElementsByClassName('__SolutionTitle__')[0]
        
            gsap.set(captionNode, { bottom: (captionNode.clientHeight / 2) * -1 })
            el.onmouseenter = () => 
                gsap.timeline()
                    .set(captionNode, { bottom: 80 })
                    .set(titleNode, { bottom: captionNode.clientHeight })
            el.onmouseleave = () => 
                gsap.timeline()
                    .set(captionNode, { bottom: (captionNode.clientHeight / 2) * -1 })
                    .set(titleNode, { bottom: 40 })
        })
    }

    return {
        Html: (key) => (
            <section id={ styles.Solution } key={ key } className='bg-natural-10 container-padding'>
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
        ),
        Script: scripts
    } 
}
/* ------------------ End Solutions ------------------ */

/* ------------------ Maps ------------------ */
const Maps = () => {

    const dataMaps = [
        {
            prov: 'Aceh',
            cities: [],
            pos: { x: 146, y: 86},
            comingSoon: true
        },
        {
            prov: 'Sumatera Utara',
            cities: ['Medan'],
            pos: { x: 191, y: 147},
            comingSoon: true
        },
        {
            prov: 'Sumatera Barat',
            cities: ['Padang'],
            pos: { x: 226, y: 220},
            comingSoon: true
        },
        {
            prov: 'Sumatera Selatan',
            cities: [],
            pos: { x: 314, y: 299},
            comingSoon: true
        },
        {
            prov: 'Lampung',
            cities: [],
            pos: { x: 361, y: 345},
            comingSoon: true
        },
        {
            prov: 'Sulawesi Selatan',
            cities: [],
            pos: { x: 786, y: 282},
            comingSoon: true
        },
        {
            prov: 'Jawa Barat',
            cities: ['Cirebon', 'Indramayu', 'Karawang', 'Majalengka', 'Sumedang'],
            pos: { x: 439, y: 398},
            comingSoon: false
        },
        {
            prov: 'Jawa Tengah',
            cities: ['Klaten'],
            pos: { x: 485, y: 409},
            comingSoon: false
        },
        {
            prov: 'Daerah Istimewa Yogyakarta',
            cities: ['Bantul', 'Kulon', 'Progo'],
            pos: { x: 507, y: 436},
            comingSoon: false
        },
        {
            prov: 'Jawa Timur',
            cities: ['Ngawi', 'Jombang'],
            pos: { x: 558, y: 422},
            comingSoon: false
        }
    ]

    const [ mapIndexHover, setMapIndexHover ] = useState(0)

    const scripts = () => { 
        const tipNode = document.getElementsByClassName('__MapsTip__')[0]
        const pointNodes = document.getElementsByClassName('__MapsPoint__')

        Array.prototype.forEach.call(pointNodes, (el, index) => {
            el.onmouseenter = () => {
                setMapIndexHover(index)
                const scaleFactor = window.innerWidth / 1440
                gsap.fromTo(tipNode, { left: (dataMaps[index].pos.x * scaleFactor), top: (dataMaps[index].pos.y * scaleFactor), autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 })
            }
            el.onmouseleave = () => gsap.to(tipNode, { autoAlpha: 0, duration: 0.3 })
        })
    }

    return {
        Html: (key) => (
            <section id={ styles.Maps } key={ key }>
                <div className='container-padding align-center'>
                    <h4 className='text-green-70'>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</h4>
                    <p>Program Eratani sudah tersebar di beberapa wilayah di Indonesia dan akan terus menjalar ke seluruh Indonesia.</p>
                </div>
                <div className={ styles.indonesia }>
                    <Indonesia />
                    <div className={ styles.interactive }>
                        <svg viewBox="0 0 1440 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                            { dataMaps.map((map, index) => 
                                <g className={ `${ (map.comingSoon) ? styles.coming_soon : '' } ${ styles.dot_point } __MapsPoint__` } key={ index }>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.shadow }/>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.outline }/>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="5" className={ styles.dot }/>
                                </g>
                            )}
                        </svg>
                        <div className={ `${ styles.tip } __MapsTip__` }>
                            <MapsHvr />
                            <div className={ `${ styles.content } __MapsTipContent__` }>
                                <h6 className='text-green-60'>{ dataMaps[mapIndexHover].prov }</h6>
                                { dataMaps[mapIndexHover].cities.map((city, index) => 
                                    <p className='label text-white bg-green-60' key={ index }>{ city }</p>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ),
        Script: scripts
    } 
}
/* ------------------ End Maps ------------------ */

/* ------------------ Media ------------------ */
const Media = () => {

    const dataMitras = [
        {image: '1.png', alt: 'bulog'},
        {image: '2.png', alt: 'bulog'},
        {image: '3.png', alt: 'bulog'},
        {image: '4.png', alt: 'bulog'},
        {image: '5.png', alt: 'bulog'},
        {image: '6.png', alt: 'bulog'},
        {image: '7.png', alt: 'bulog'},
        {image: '8.png', alt: 'bulog'},
        {image: '9.png', alt: 'bulog'},
        {image: '10.png', alt: 'bulog'},
        {image: '11.png', alt: 'bulog'},
        {image: '12.png', alt: 'bulog'},
        {image: '13.png', alt: 'bulog'},
        {image: '14.png', alt: 'bulog'},
        {image: '15.png', alt: 'bulog'},
        {image: '16.png', alt: 'bulog'},
        {image: '17.png', alt: 'bulog'},
        {image: '18.png', alt: 'bulog'},
        {image: '19.png', alt: 'bulog'},
        {image: '20.png', alt: 'bulog'},
        {image: '21.png', alt: 'bulog'},
        {image: '22.png', alt: 'bulog'},

        {image: 0, alt: 'bulog'},
        {image: 0, alt: 'bulog'},
        {image: 0, alt: 'bulog'}
    ]

    const dataDiliputs = [
        {image: '1.png', alt: 'bulog'},
        {image: '2.png', alt: 'bulog'},
        {image: '3.png', alt: 'bulog'},
        {image: '4.png', alt: 'bulog'},
        {image: '5.png', alt: 'bulog'},
    ]

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1800,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-out'
    }
    
    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Media } key={ key } className='bg-natural-10 container-padding align-center'>
                <div className={ styles.tab_title }>
                    <h4 className={ `text-natural-40 ${ styles.active }` }>Mitra Kami</h4>
                    <h4 className='text-natural-40'>Diliput oleh</h4>
                </div>
                <p>Kami bekerja sama dengan mitra dan media terkemuka untuk mewujudkan ekosistem pertanian yang kuat demi mendukung kesejahteraan petani Indonesia.</p>
                <div className={ styles.content }>
                    <Slick { ...slickSettings } className={ styles.mitra }>
                        { dataMitras.map((mitra, index) => 
                            <div key={ index }>
                                <div className={ styles.slick_slide }>
                                    { (!mitra.image) ? '' : <img src={ `/media/mitra/${ mitra.image }` } alt={ mitra.alt } /> }
                                </div>
                            </div>
                        ) }
                    </Slick>
                    {/* <Slick { ...slickSettings } className={ styles.diliput }>
                        { dataDiliputs.map((diliput, index) => 
                            <div key={ index }>
                                <div className={ styles.slick_slide }>
                                    { (!diliput.image) ? '' : <img src={ `/media/diliput/${ diliput.image }` } alt={ diliput.alt } /> }
                                </div>
                            </div>
                        ) }
                    </Slick> */}
                </div>
            </section>
        ),
        Script: scripts
    } 
}
/* ------------------ End Media ------------------ */

/* ------------------ Join ------------------ */
const Join = () => {

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Join } key={ key } className='container-padding align-center'>
                <h2 className='text-natural-80'>
                    Segera Bergabung Menjadi&nbsp;
                    <div>
                        <ul className='align-left __join_ul__'>
                            <li><h2 className='text-green-60'>Petani</h2></li>
                            <li><h2 className='text-green-40'>Gapoktan</h2></li>
                            <li><h2 className='text-green-70'>Poktan</h2></li>
                            <li><h2 className='text-green-50'>Toko Tani</h2></li>
                            <li><h2 className='text-green-80'>Supplier</h2></li>
                            <li><h2 className='text-green-30'>Buyer</h2></li>
                        </ul>
                    </div>
                </h2>
                <p>Daftar sekarang dan nikmati berbagai manfaat dari Eratani, mulai dari bantuan permodalan, penyediaan saprotan, hingga penyaluran gabah dan beras.<br />Mari bersama mewujudkan ekosistem pertanian yang kuat!</p>
                <a href='#' className='btn'>Daftar Sekarang</a>
            </section>
        ),
        Script: scripts
    } 
}
/* ------------------ End Join ------------------ */

const SectionsFunc = { Hero, Ecosystem, Solution, Maps, Media, Join }
export default SectionsFunc