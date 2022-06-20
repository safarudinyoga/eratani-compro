import Parse from 'html-react-parser'
import React, { useState, createRef } from 'react';
import Slick from "react-slick";
import gsap from 'gsap'

import SlickNavigationCustom from '../custom/SlickNavigation'
import SetRatio from '../custom/SetRatio'
import Ellipsis from '../custom/Ellipsis'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'

import styles from './Home.module.sass'
import EyeViewVect from '/assets/vector/eye-view.svg'
import EcoArrowVect from '/assets/vector/eco-arrow.svg'
import IndonesiaVect from '/assets/vector/indonesia.svg'
import MapsHvrVect from '/assets/vector/maps-hvr.svg'
import MockupPng from '/assets/static/mockup.png'
import FindPlaystorePng from '/assets/static/find-playstore.png'

/* ------------------ Hero Banner ------------------ */
const Hero = () => {
    return ( 
        <section id={ styles.Hero }>
            <SetRatio ax='2.33' ay='1' min='600' className={ styles.wrapper }>
                <div className={ styles.background } style={ { backgroundImage: `url('/hero/IEP05860 1.jpg')` } }></div>
                <div className={ styles.content }>
                    <Typograph tag='h1' size='xlg-1' weight='extrabold' color='green-10' line='70'>Selalu Ada<br />Untuk Petani</Typograph>
                    <Typograph tag='p' size='md-3' color='white' align='justify' maxWidth='528'>Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!</Typograph>
                    <Button href='#' target='_blank' xPadding='18' textColor='white' backgroundColor='green-60'>Unduh Aplikasi Eratani</Button>
                </div>
            </SetRatio>
        </section>
    )
}
/* ------------------ End Hero Banner ------------------ */

/* ------------------ Ecosystem ------------------ */
const Ecosystem = () => {
    const ecoSystemData = [
        {
            no: '01',
            title: 'Memiliki 1.000+ Petani Binaan',
            description: 'Sejak berdiri 1 tahun lalu Eratani telah membantu lebih dari 5000 petani dalam kemudahan akses modal dan membuka akses...',
            photo: 'DSC04813 1.jpg'
        },
        {
            no: '02',
            title: 'Lebih dari 20 Miliar Pendanaan Tersalurkan',
            description: 'Eratani telah menyalurkan lebih dari 20 Miliar pendanaan untuk petani binaannya, meningkat 100% dari sebelumnya dimana ini ...',
            photo: 'DSC04798 1.jpg'
        },
        {
            no: '03',
            title: 'Pendapatan Petani Meningkat Lebih dari 20%',
            description: 'Eratani membantu para petani binaan untuk meningkatkan pendapatan dengan memberikan dukungan pendanaan dan...',
            photo: 'Eratanijogja-106 1.jpg'
        },
        {
            no: '04',
            title: 'Telah Memiliki Lebih dari 5.000 Ha Lahan Binaan',
            description: 'Luas lahan binaan Eratani kini telah mencapai lebih dari 5.000 yang kini tersebar di pulau Jawa.',
            photo: 'Eratanijogja-18 2.jpg'
        },
        {
            no: '05',
            title: 'Memiliki 1.000+ Petani Binaan',
            description: 'Eratani membantu para petani binaan untuk meningkatkan produktivitas dan hasil panen dengan memberikan pendampi...',
            photo: 'DSC04891 1.jpg'
        }
    ]

    return (
        <section id={ styles.Ecosystem } className='container-padding'>
            <Typograph tag='h3' size='xlg-3' color='green-70'>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</Typograph>
            <div className={ `${ styles.eco_arrow } align-right` }>
                <a href='#' id='eco-left'><EcoArrowVect /></a>
                <a href='#' id='eco-right'><EcoArrowVect /></a>
            </div>
            <div className={ styles.slider }>
                { ecoSystemData.map((eco, index) =>
                    <div className={ `${ styles.slide } ${ (index == 0) ? styles.slide_active : '' }` } key={ index }>
                        <div className={ styles.slide_content }>
                            <Typograph tag='h5' size='sm-1'>
                                <span className='text-green-50'>{ eco.no }</span>
                                <span>{ eco.title }</span>
                            </Typograph>
                            <SetRatio ax='1.42' ay='1' min='0'>
                                <img src={ `/ecosystem/${ eco.photo }` } width='100%' className='image-cover' />
                            </SetRatio>
                            <div className={ styles.caption }>
                                <Ellipsis className={ `font-xsm-1 ${styles.text}` }>
                                    { eco.description }
                                </Ellipsis>
                                <a href="#"><EyeViewVect /></a>
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
const Solution = () => {
    const solutionData = [
        {
            title1: 'Bantuan<br />Permodalan dan<br />Pendampingan',
            title2: 'Bantuan Permodalan dan<br />Pendampingan',
            description: 'Unduh aplikasi Eratani sekarang untuk mendapatkan bantuan permodalan, pemenuhan kebutuhan sarana produksi pertanian, penyaluran hasil panen, hingga pendampingan dari para ahli di bidang pertanian.',
            link: {
                text: 'Unduh Sekarang',
                href: '#'
            },
            photo: 'Pendampingan 3.jpg'
        },
        {
            title1: 'Pilihan<br />Sarana Produksi<br />Pertanian Terbaik',
            title2: 'Pilihan Sarana Produksi<br />Pertanian Terbaik',
            description: 'Eratani bekerja sama dengan berbagai produsen sarana produksi pertanian untuk bisa menyediakan sarana produksi pertanian dengan kualitas terbaik kepada para petani binaan. Segera hubungi kami untuk mendapatkan berbagai pilihan sarana produksi pertanian terbaik dengan harga terstandarisasi.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            photo: 'DSC04912.jpg'
        },
        {
            title1: 'Penyaluran Beras<br />dan Gabah<br />Terbaik',
            title2: 'Penyaluran Beras dan Gabah<br />Terbaik',
            description: 'Pada proses pasca panen, Eratani membantu untuk mengolah hasil panen dengan menyalurkan gabah dan beras dari petani binaan yang tersebar di seluruh Indonesia. Bagi Anda yang ingin menjual ataupun membeli gabah dan beras dengan kualitas terbaik, silakan hubungi kami untuk informasi lebih lanjut.',
            link: {
                text: 'Hubungi Kami',
                href: '#'
            },
            photo: 'Hasil Panen.jpg'
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

    return (
        <section id={ styles.Solution } className='bg-natural-10 container-padding'>
            <Typograph tag='h3' size='xlg-3' color='green-70' align='center'>Solusi Untuk Lahan Pertanian Anda</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='900'>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan petani di seluruh Indonesia. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</Typograph>
            <div className={ `row ${ styles.row }` }>
                { solutionData.map((solution, index) =>
                    <div className={`col-xs-4 ${ styles.column }`} key={ index }>
                        <SetRatio ax='1' ay='1.26' min='0' className={ styles.wrapper } onMouseEnter={ onSolutionEnter } onMouseLeave={ onSolutionLeave }>
                            <img src={ `/solution/${ solution.photo }` } className='image-cover' />
                            <Typograph tag='h4' size='xlg-3' color='green-10' className='__SolutionNode__'>
                                <span>{ Parse(solution.title1) }</span>
                                <span>{ Parse(solution.title2) }</span>
                            </Typograph>
                            <div className={ `${styles.caption} align-center __SolutionNode__` }>
                                <Typograph tag='p' size='sm-2' color='green-10' line='23' align='justify'>{ solution.description }</Typograph>
                                <Button href={ solution.link.href } target='_blank' xPadding='18' textColor='white' backgroundColor='green-60' >{ solution.link.text }</Button>
                            </div>
                        </SetRatio>
                    </div>
                ) }
            </div>
        </section>
    )
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

    const mapsTipRef = createRef()
    const [ mapIndexHover, setMapIndexHover ] = useState(0)

    const onPointEnter = (event) => {
        const id = parseInt(event.currentTarget.dataset.id)

        setMapIndexHover(id)
        const scaleFactor = window.innerWidth / 1440
        gsap.fromTo(mapsTipRef.current, { left: (mapsData[id].pos.x * scaleFactor), top: (mapsData[id].pos.y * scaleFactor), autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 })
    }

    const onPointLeave = () => gsap.to(mapsTipRef.current, { autoAlpha: 0, duration: 0.3 })

    return (
        <section id={ styles.Maps }>
            <div className='container-padding align-center'>
                <Typograph tag='h3' size='xlg-3' color='green-70' align='center'>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</Typograph>
                <Typograph tag='p' size='md-3' align='center'>Program Eratani sudah tersebar di beberapa wilayah di Indonesia dan akan terus menjalar ke seluruh Indonesia.</Typograph>
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
                            <Typograph tag='h6' size='sm-1' color='green-60'>{ mapsData[mapIndexHover].prov }</Typograph>
                            { mapsData[mapIndexHover].cities.map((city, index) => 
                                <Typograph tag='p' size='md-3' color='white' className='label bg-green-60' key={ index }>{ city }</Typograph>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
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
        cssEase: 'ease-out',
        arrows: false, 
        dots: true
    }    

    const mitaSlickSettings = SlickNavigationCustom('__SlickMitra__', slickSettings)
    const diliputSlickSettings = SlickNavigationCustom('__SlickDiliput__', slickSettings)
    
    const [ tab, setTab ] = useState(0)

    return (
        <section id={ styles.Media } className='bg-natural-10 container-padding align-center'>
            <div className={ styles.tab_title }>
                <Typograph tag='h3' size='lg-3' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 0) ? styles.active : '' }` } onClick={ () => setTab(0) }>Mitra Kami</Typograph>
                <Typograph tag='h3' size='lg-3' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 1) ? styles.active : '' }` } onClick={ () => setTab(1) }>Diliput oleh</Typograph>
            </div>
            <Typograph tag='p' size='md-3' align='center' maxWidth='705'>Kami bekerja sama dengan mitra dan media terkemuka untuk mewujudkan ekosistem pertanian yang kuat demi mendukung kesejahteraan petani Indonesia.</Typograph>
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
    )
}
/* ------------------ End Media ------------------ */

/* ------------------ Join ------------------ */
const Join = () => {
    return (
        <section id={ styles.Join } className='container-padding align-center'>
            <Typograph tag='h3' size='xlg-2' color='natural-60'>
                Segera Bergabung Menjadi&nbsp;
                <div>
                    <ul className='align-left __join_ul__'>
                        <li><Typograph tag='h3' size='xlg-2' color='green-60'>Petani</Typograph></li>
                        <li><Typograph tag='h3' size='xlg-2' color='green-40'>Gapoktan</Typograph></li>
                        <li><Typograph tag='h3' size='xlg-2' color='green-70'>Poktan</Typograph></li>
                        <li><Typograph tag='h3' size='xlg-2' color='green-50'>Toko Tani</Typograph></li>
                        <li><Typograph tag='h3' size='xlg-2' color='green-80'>Supplier</Typograph></li>
                        <li><Typograph tag='h3' size='xlg-2' color='green-30'>Buyer</Typograph></li>
                    </ul>
                </div>
            </Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='780'>Daftar sekarang dan nikmati berbagai manfaat dari Eratani, mulai dari bantuan permodalan, penyediaan saprotan, hingga penyaluran gabah dan beras.<br />Mari bersama mewujudkan ekosistem pertanian yang kuat!</Typograph>
            <Button href='#' xPadding='18' textColor='white' backgroundColor='green-60'>Daftar Sekarang</Button>
        </section>
    )
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
        centerPadding: '45px',
        arrows: true,
        dots: true
    }

    const testimoniSlickSettings = SlickNavigationCustom('__slickTestimoni__', slickSettings)

    return (
        <section id={ styles.Testimoni } className='bg-natural-10 container-padding'>
            <Typograph tag='h3' size='xlg-2' align='center'>Testimoni Mitra</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='685'>Kami merangkum beberapa mitra yang telah bergabung menjadi petani, gapoktan dan toko tani binaan Eratani.</Typograph>
            <div className={ styles.content }>
                <Slick { ...testimoniSlickSettings } className='__slickTestimoni__'>
                    { dataTestimonis.map((testimoni, index) =>
                        <div className={ styles.slick_slide } key={ index }>
                            <div className='row middle-xs bg-green-10'>
                                <img src={ `/testimoni/${ testimoni.photo }` } className='image-cover' />
                                <div className={ `col-xs align-left ${ styles.caption }` }>
                                    <Typograph tag='h5' size='md-1'>{ testimoni.name }</Typograph>
                                    <Typograph tag='h6' size='xsm-1'>{ testimoni.type }, { testimoni.dom }</Typograph>
                                    <Typograph tag='p' size='md-3'>{ testimoni.testi }</Typograph>
                                </div>
                            </div>
                        </div>
                    ) }
                </Slick>
            </div>
        </section>
    )
}
/* ------------------ End Testimoni ------------------ */

/* ------------------ Download ------------------ */
const Download = () => {
    return (
        <section id={ styles.Download } className='container-padding'>
            <div className={ styles.content }>
                <div className='row'>
                    <img src={ MockupPng.src } width='416px' />
                    <div className={ `col-xs align-left ${ styles.caption }` }>
                        <Typograph tag='p' size='md-3' color='green-60'>Ingin menjadi petani sukses?</Typograph>
                        <Typograph tag='h2' size='xlg-2'>Segera Unduh Aplikasi Eratani di Handphone Anda!</Typograph>
                        <Typograph tag='p' size='md-3' color='natural-50'><em>One-stop solution</em> untuk memenuhi kebutuhan petani Indonesia menuju ekosistem pertanian yang lebih kuat. Unduh untuk mendapatkan bantuan permodalan, saprotan berkualitas baik, hingga pendampingan dari para ahli di bidang pertanian.</Typograph>
                        <div className='align-right'>
                            <a href='#'><img src={ FindPlaystorePng.src } width='200px' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/* ------------------ End Download ------------------ */

export default { Hero, Ecosystem, Solution, Maps, Media, Join, Testimoni, Download }