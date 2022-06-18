import Parse from 'html-react-parser'
import React, { useState } from 'react';
import Slick from "react-slick";
import gsap from 'gsap'

import SlickNavigationCustom from '../custom/SlickNavigation'

import styles from './Home.module.sass'
import EyeViewVect from '../../assets/vector/eye-view.svg'
import EcoArrowVect from '../../assets/vector/eco-arrow.svg'
import IndonesiaVect from '../../assets/vector/indonesia.svg'
import MapsHvrVect from '../../assets/vector/maps-hvr.svg'
import MockupPng from '../../assets/static/mockup.png'
import FindPlaystorePng from '../../assets/static/find-playstore.png'

/* ------------------ Hero Banner ------------------ */
const Hero = () => {
    
    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Hero } key={ key }>
                <div className={ `${ styles.wrapper } __SetRatio__` } data-ratio-w='2.33' data-ratio-h='1' data-ratio-min-h='600'>
                    <div className={ styles.background } style={ { backgroundImage: `url('/hero/IEP05860 1.jpg')` } }></div>
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

    const ecoSystemData = [
        {
            no: '01',
            title: 'Memiliki 1.000+ Petani Binaan',
            caption: 'Sejak berdiri 1 tahun lalu Eratani telah membantu lebih dari 5000 petani dalam kemudahan akses modal dan membuka akses...',
            image: 'DSC04813 1.jpg'
        },
        {
            no: '02',
            title: 'Lebih dari 20 Miliar Pendanaan Tersalurkan',
            caption: 'Eratani telah menyalurkan lebih dari 20 Miliar pendanaan untuk petani binaannya, meningkat 100% dari sebelumnya dimana ini ...',
            image: 'DSC04798 1.jpg'
        },
        {
            no: '03',
            title: 'Pendapatan Petani Meningkat Lebih dari 20%',
            caption: 'Eratani membantu para petani binaan untuk meningkatkan pendapatan dengan memberikan dukungan pendanaan dan...',
            image: 'Eratanijogja-106 1.jpg'
        },
        {
            no: '04',
            title: 'Telah Memiliki Lebih dari 5.000 Ha Lahan Binaan',
            caption: 'Luas lahan binaan Eratani kini telah mencapai lebih dari 5.000 yang kini tersebar di pulau Jawa.',
            image: 'Eratanijogja-18 2.jpg'
        },
        {
            no: '05',
            title: 'Memiliki 1.000+ Petani Binaan',
            caption: 'Eratani membantu para petani binaan untuk meningkatkan produktivitas dan hasil panen dengan memberikan pendampi...',
            image: 'DSC04891 1.jpg'
        }
    ]

    return {
        Html: (key) => (
            <section id={ styles.Ecosystem } className='container-padding' key={ key }>
                <h4 className='text-green-70'>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</h4>
                <div className={ `${ styles.eco_arrow } align-right` }>
                    <a href='#' id='eco-left'><EcoArrowVect /></a>
                    <a href='#' id='eco-right'><EcoArrowVect /></a>
                </div>
                <div className={ styles.slider }>
                    { ecoSystemData.map((eco, index) =>
                        <div className={ `${ styles.slide } ${ (index == 0) ? styles.slide_active : '' }` } key={ index }>
                            <div className={ styles.slide_content }>
                                <h6>
                                    <span className='text-green-50'>{ eco.no }</span>
                                    <span>{ eco.title }</span>
                                </h6>
                                <img src={ `/ecosystem/${ eco.image }` } width='100%' className='__SetRatio__ image-cover' data-ratio-w='1.42' data-ratio-h='1' data-ratio-min-h='0' />
                                <div className={ styles.caption }>
                                    <p className='small __Elipsing__' data-text={ eco.caption }><span>{ eco.caption }</span></p>
                                    <a href="#"><EyeViewVect /></a>
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
            image: 'Pendampingan 3.jpg'
        },
        {
            title1: 'Pilihan<br />Sarana Produksi<br />Pertanian Terbaik',
            title2: 'Pilihan Sarana Produksi<br />Pertanian Terbaik',
            caption: 'Eratani bekerja sama dengan berbagai produsen sarana produksi pertanian untuk bisa menyediakan sarana produksi pertanian dengan kualitas terbaik kepada para petani binaan. Segera hubungi kami untuk mendapatkan berbagai pilihan sarana produksi pertanian terbaik dengan harga terstandarisasi.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            image: 'DSC04912.jpg'
        },
        {
            title1: 'Penyaluran Beras<br />dan Gabah<br />Terbaik',
            title2: 'Penyaluran Beras dan Gabah<br />Terbaik',
            caption: 'Pada proses pasca panen, Eratani membantu untuk mengolah hasil panen dengan menyalurkan gabah dan beras dari petani binaan yang tersebar di seluruh Indonesia. Bagi Anda yang ingin menjual ataupun membeli gabah dan beras dengan kualitas terbaik, silakan hubungi kami untuk informasi lebih lanjut.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            image: 'Hasil Panen.jpg'
        }
    ]

    const onSolutionEnter = (event) => {
        const [ titleNode, captionNode ] = event.currentTarget.getElementsByClassName('__SolutionNode__')
        gsap.timeline()
            .set(captionNode, { bottom: 80 })
            .set(titleNode, { bottom: captionNode.clientHeight })
    }

    const onSolutionLeave = (event) => {
        const [ titleNode, captionNode ] = event.currentTarget.getElementsByClassName('__SolutionNode__')
        gsap.timeline()
            .set(captionNode, { bottom: (captionNode.clientHeight / 2) * -1 })
            .set(titleNode, { bottom: 40 })
    }

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Solution } key={ key } className='bg-natural-10 container-padding'>
                <h4 className='text-green-70 align-center'>Solusi Untuk Lahan Pertanian Anda</h4>
                <p className='align-center'>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan petani di seluruh Indonesia. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</p>
                <div className={ `row ${ styles.row }` }>
                    { solutionData.map((solution, index) =>
                        <div className={`col-xs-4 ${ styles.column }`} key={ index }>
                            <div onMouseEnter={ onSolutionEnter } onMouseLeave={ onSolutionLeave } className={`__SetRatio__ ${ styles.wrapper }`} data-ratio-w='1' data-ratio-h='1.26' data-ratio-min-h='0'>
                                <img src={ `/solution/${ solution.image }` } className='image-cover' />
                                <h3 className='text-green-10 __SolutionNode__'>
                                    <span>{ Parse(solution.title1) }</span>
                                    <span>{ Parse(solution.title2) }</span>
                                </h3> 
                                <div className={ `${styles.caption} align-center __SolutionNode__` }>
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

    const mapsData = [
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

    const mapsTipRef = React.createRef()
    const [ mapIndexHover, setMapIndexHover ] = useState(0)

    const onPointEnter = (event) => {
        const id = parseInt(event.currentTarget.dataset.id)

        setMapIndexHover(id)
        const scaleFactor = window.innerWidth / 1440
        gsap.fromTo(mapsTipRef.current, { left: (mapsData[id].pos.x * scaleFactor), top: (mapsData[id].pos.y * scaleFactor), autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 })
    }

    const onPointLeave = () => gsap.to(mapsTipRef.current, { autoAlpha: 0, duration: 0.3 })

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Maps } key={ key }>
                <div className='container-padding align-center'>
                    <h4 className='text-green-70'>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</h4>
                    <p>Program Eratani sudah tersebar di beberapa wilayah di Indonesia dan akan terus menjalar ke seluruh Indonesia.</p>
                </div>
                <div className={ styles.indonesia }>
                    <IndonesiaVect />
                    <div className={ styles.interactive }>
                        <svg viewBox="0 0 1440 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                            { mapsData.map((map, index) => 
                                <g onMouseEnter={ onPointEnter } onMouseLeave={ onPointLeave } className={ `${ (map.comingSoon) ? styles.coming_soon : '' } ${ styles.dot_point }` } key={ index } data-id={ index }>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.shadow }/>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.outline }/>
                                    <circle cx={ map.pos.x } cy={ map.pos.y } r="5" className={ styles.dot }/>
                                </g>
                            )}
                        </svg>
                        <div className={ styles.tip } ref={ mapsTipRef }>
                            <MapsHvrVect />
                            <div className={ styles.content }>
                                <h6 className='text-green-60'>{ mapsData[mapIndexHover].prov }</h6>
                                { mapsData[mapIndexHover].cities.map((city, index) => 
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

    const mitraData = [
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

    const diliputData = [
        {image: '1.png', alt: 'bulog'},
        {image: '2.png', alt: 'bulog'},
        {image: '3.png', alt: 'bulog'},
        {image: '4.png', alt: 'bulog'},
        {image: '5.png', alt: 'bulog'},
    ]

    const slickSettings = {
        infinite: true,
        speed: 1800,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-out'
    }    

    const mitaSlickSettings = SlickNavigationCustom('__SlickMitra__', { arrows: false, dots: true, ...slickSettings })
    const diliputSlickSettings = SlickNavigationCustom('__SlickDiliput__', { arrows: false, dots: true, ...slickSettings })
    
    const [ tab, setTab ] = useState(0)

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Media } key={ key } className='bg-natural-10 container-padding align-center'>
                <div className={ styles.tab_title }>
                    <h4 className={ `text-natural-40 __MediaTabNav__ ${ (tab == 0) ? styles.active : '' }` } onClick={ () => setTab(0) }>Mitra Kami</h4>
                    <h4 className={ `text-natural-40 __MediaTabNav__ ${ (tab == 1) ? styles.active : '' }` } onClick={ () => setTab(1) }>Diliput oleh</h4>
                </div>
                <p>Kami bekerja sama dengan mitra dan media terkemuka untuk mewujudkan ekosistem pertanian yang kuat demi mendukung kesejahteraan petani Indonesia.</p>
                <div className={ styles.content }>
                    { (tab == 0) && <Slick { ...mitaSlickSettings } className='__SlickMitra__'>
                            { mitraData.map((mitra, index) => 
                                <div key={ index }>
                                    <div className={ styles.slick_slide }>
                                        { (!mitra.image) ? '' : <img src={ `/media/mitra/${ mitra.image }` } alt={ mitra.alt } /> }
                                    </div>
                                </div>
                            ) }
                        </Slick>
                    }
                    { (tab == 1) && <Slick { ...diliputSlickSettings } className='__SlickDiliput__'>
                            { diliputData.map((diliput, index) => 
                                <div key={ index }>
                                    <div className={ styles.slick_slide }>
                                        { (!diliput.image) ? '' : <img src={ `/media/diliput/${ diliput.image }` } alt={ diliput.alt } /> }
                                    </div>
                                </div>
                            ) }
                        </Slick>
                    }
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

/* ------------------ Testimoni ------------------ */
const Testimoni = () => {

    const dataTestimonis = [
        {
            name: 'Yanto',
            type: 'Petani',
            dom: 'Jawa Barat',
            testi: 'Eratani memudahkan dalam permodalan sawah saya sehingga saya bisa menikmati hasilnya bersama keluarga.',
            photo: 'yanto.jpg'
        },
        {
            name: 'Katimin',
            type: 'Petani',
            dom: 'Jawa Tengah',
            testi: 'Gabung Eratani tidak ribet dan sangat membantu saya dalam hal permodalan melalui teknologi dimana saja dan kapan saja.',
            photo: 'katimin.jpg'
        },
        {
            name: 'Nugroho Noto',
            type: 'Petani',
            dom: 'Jawa Timur',
            testi: 'Eratani memudahkan kita dalam menyediakan saprotan dengan kualitas produksi yang baik.',
            photo: 'nugroho.jpg'
        },
        {
            name: 'Pranata',
            type: 'Gapoktan',
            dom: 'Jawa Timur',
            testi: 'Eratani menjadi partner yang baik dengan membawa perubahan kepada sektor pertanian dengan memanfaatkan teknologi.',
            photo: 'pranata.jpg'
        },
        {
            name: 'Arif',
            type: 'Mitra EraKios',
            dom: 'Jawa Barat',
            testi: 'Bergabung dengan EraKios sangat menguntungkan karena memudahkan penyediaan saprotan yang berkualitas sehingga meningkatkan transaksi di toko tani.',
            photo: 'arif.jpg'
        }
    ]    

    const slickSettings = {
        infinite: true,
        speed: 1800,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-out',
        centerMode: true,
        centerPadding: '45px'
    }

    const testimoniSlickSettings = SlickNavigationCustom('__slickTestimoni__', { arrows: true, dots: true, ...slickSettings })

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Testimoni } key={ key } className='bg-natural-10 container-padding align-center'>
                <h2 className='text-natural-80'>Testimoni Mitra</h2>
                <p>Kami merangkum beberapa mitra yang telah bergabung menjadi petani, gapoktan dan toko tani binaan Eratani.</p>
                <div className={ styles.content }>
                    <Slick { ...testimoniSlickSettings } className='__slickTestimoni__'>
                        { dataTestimonis.map((testimoni, index) =>
                            <div className={ styles.slick_slide } key={ index }>
                                <div className='row middle-xs bg-green-10'>
                                    <img src={ `/testimoni/${ testimoni.photo }` } className='image-cover' />
                                    <div className={ `col-xs align-left ${ styles.caption }` }>
                                        <h5>{ testimoni.name }</h5>
                                        <h6 className='small'>{ testimoni.type }, { testimoni.dom }</h6>
                                        <p>{ testimoni.testi }</p>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </Slick>
                </div>
            </section>
        ),
        Script: scripts
    }
}
/* ------------------ End Testimoni ------------------ */

/* ------------------ Download ------------------ */
const Download = () => {

    const scripts = () => { }

    return {
        Html: (key) => (
            <section id={ styles.Download } key={ key } className='container-padding align-center'>
                <div className={ styles.content }>
                    <div className='row'>
                        <img src={ MockupPng.src } width='416px' />
                        <div className={ `col-xs align-left ${ styles.caption }` }>
                            <p className='text-green-60'>Ingin menjadi petani sukses?</p>
                            <h2>Segera Unduh Aplikasi Eratani di Handphone Anda!</h2>
                            <p className='text-natural-50'><em>One-stop solution</em> untuk memenuhi kebutuhan petani Indonesia menuju ekosistem pertanian yang lebih kuat. Unduh untuk mendapatkan bantuan permodalan, saprotan berkualitas baik, hingga pendampingan dari para ahli di bidang pertanian.</p>
                            <div className='align-right'>
                                <a href='#'>
                                    <img src={ FindPlaystorePng.src } width='200px' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ),
        Script: scripts
    }
}
/* ------------------ End Download ------------------ */

const SectionsFunc = { Hero, Ecosystem, Solution, Maps, Media, Join, Testimoni, Download }
export default SectionsFunc