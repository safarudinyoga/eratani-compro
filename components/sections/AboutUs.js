import Parse from 'html-react-parser'
import React, { useEffect, useState } from 'react';
import Link from 'next/link' 
import Slick from "react-slick";
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

import SlickNavigationCustom from '../custom/SlickNavigation'
import SetRatio from '../custom/SetRatio'
import Ellipsis from '../custom/Ellipsis'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'

import styles from './AboutUs.module.sass'
import ArrowForwardVect from '/assets/vector/arrow-forward.svg'

gsap.registerPlugin(ScrollToPlugin)

/* ------------------ About ------------------ */
const About = () => {
    const aboutData = 'Indonesia adalah negara agraris yang mayoritas penduduknya bermata pencaharian sebagai petani. Hasil pertanian yang tidak pasti dengan besarnya ketergantungan terhadap alam membuat petani Indonesia mengalami kesulitan dalam permodalan. Hal inilah yang memicu rendahnya angka regenerasi petani muda. Data dari Badan Pusat Statistik menunjukkan bahwa hanya 19,18% pemuda Indonesia yang bekerja di sektor pertanian pada 2021 dan jumlahnya terus menurun bahkan di tengah peningkatan jumlah tenaga kerja di Indonesia.<br /><br />Eratani sebagai sebuah perusahaan agri-tech yang didirikan oleh anak bangsa sadar akan urgensi dari masalah pertanian yang ada di Indonesia.  Berangkat dari mimpi dan semangat yang besar, Eratani memiliki misi untuk mensejahterakan petani nusantara dengan membangun ekosistem pertanian yang kuat dan mempermudah jalannya proses hulu (pendanaan petani, pengelolaan rantai pasok) hingga proses hilir (distribusi & penyaluran hasil panen) pada ekosistem pertanian.'

    return (
        <section id={ styles.About } className='container-padding'>
            <Typograph tag='h3' color='green-70' size='lg-1' align='center'>Tentang Kami</Typograph>
            <Typograph tag='p' size='md-2' align='justify' maxWidth='1076'>{ Parse(aboutData) }</Typograph>
        </section>
    )
}
/* ------------------ End About ------------------ */

/* ------------------ VisiMisi ------------------ */
const VisiMisi = () => {
    const visiData = 'Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan dukungan teknologi untuk menyejahterakan kehidupan petani di Indonesia kedepannya.'

    const misiData = [
        'Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.',
        'Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.',
        'Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.',
        'Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.',
        'Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.'
    ]

    const photoData = [
        { image: 'DSC04891.jpg', alt: '' },
        { image: 'IEP08503.jpg', alt: '' },
        { image: 'Eratanijogja-18 3.jpg', alt: '' },
        { image: 'DSC04054.jpg', alt: '' },
        { image: 'IEP05859.jpg', alt: '' }
    ]

    const slickSettings = {
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'ease-out',
        arrows: false, 
        dots: false,
        accessibility: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        touchMove: false
    }    

    return (
        <section id={ styles.VisiMisi }>
            <div className='row middle-xs'>
                <div className='col-xs bg-green-70'>
                    <div className={ styles.visi }>
                        <Typograph tag='h3' color='green-10' size='lg-3'>VISI</Typograph>
                        <Typograph tag='p' color='green-10' size='md-3'>{ visiData }</Typograph>
                    </div>
                </div>
                <SetRatio ax='1' ay='1.72' max='719' className={ styles.slider }>
                    <Slick { ...slickSettings }>
                        { photoData.map((photo, index) =>
                            <div key={ index } className={ styles.slide }>
                                <img src={ `/visimisi/${ photo.image }` } alt={ photo.alt } width='100%' className='image-cover' />
                            </div>
                        )}
                    </Slick>
                </SetRatio>
                <div className='col-xs bg-green-100'>
                    <div className={ styles.misi }>
                        <Typograph tag='h3' color='green-20' size='md-3' weight='extrabold'>MISI</Typograph>
                        <ul>
                            { misiData.map((misi, index) => 
                                <li className='row' key={ index }>
                                    <Typograph tag='p' color='green-20' size='md-2' weight='bold'>{ index + 1 }</Typograph>
                                    <Typograph tag='p' color='green-20' size='sm-2' className='col-xs'>{ misi }</Typograph>
                                </li>
                            ) }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
/* ------------------ End VisiMisi ------------------ */

/* ------------------ Team ------------------ */
const Team = () => {
    const teamData = [
        {
            name1: 'Andrew<br />Soeherman',
            name2: 'Andrew Soeherman',
            position: 'Chief Executive Officer',
            quote: '“Dengan semangat Ora et Labora, harapan saya Eratani dapat merangkul bukan hanya 100 atau 1.000 petani tapi seluruh petani di Indonesia agar para pahlawan pangan kita dapat menjalani kehidupan yang lebih sejahtera.”',
            photo: 'DSCF8724.png',
            quoteColor: 'green-70',
            bgColor: 'green-60',
            top: 64
        },
        {
            name1: 'Kevin Juan',
            name2: 'Kevin Juan',
            position: 'Chief Operating Officer',
            quote: '“Kami ingin Eratani memberikan ‘impact’ nyata kepada petani serta dapat menunjukkan kepada calon petani genarasi muda bahwa bertani itu merupakan bisnis yang canggih, berprospek, dan juga menghasilkan.”',
            photo: 'DSCF8734.png',
            quoteColor: 'green-50',
            bgColor: 'green-40',
            top: 0
        },
        {
            name1: 'Angles Gani',
            name2: 'Angles Gani',
            position: 'Chief Plantation Officer',
            quote: '“When life blesses you financially, don’t raise your standard of living but raise your standard of giving. Salah satu kesamaan antara saya dan visi Eratani adalah sama-sama ingin berdampak bagi sekitar, dalam konteks ini menyejahterakan petani.”',
            photo: 'DSCF8748 (1).png',
            quoteColor: 'green-100',
            bgColor: 'green-90',
            top: 48
        },
        {
            name1: 'Grace Astari',
            name2: 'Grace Astari',
            position: 'Chief Business Officer',
            quote: '“Sebagai pemimpin di Eratani, kami datang dengan sebuah pemikiran yang sama yaitu menjadi bagian dari solusi pada ekosistem pertanian. Kami percaya dalam menjalankan bisnis yang diimbangi dengan memberikan dampak sosial dapat membuat kita bertahan dan berkesinambungan dalam jangka panjang.”',
            photo: '4 10.png',
            quoteColor: 'green-40',
            bgColor: 'green-50',
            top: 24
        }
    ]

    const QuoteVect = (props) => {
        return (
            <svg width="140" height="118" viewBox="0 0 140 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M76.7346 90.3057C76.7346 82.9724 78.6513 76.8224 82.4846 71.8307C85.2013 68.3974 88.8846 66.1391 93.543 65.0641C98.1263 63.9974 102.46 63.9224 106.376 64.8307C107.71 56.9141 105.543 48.5307 100.043 39.6474C94.543 30.7724 87.418 24.0891 78.7263 19.6224L91.9013 0.664062C98.568 3.96406 104.901 8.1474 110.735 13.2057C116.651 18.2641 121.901 24.0807 126.568 30.6557C131.235 37.2307 134.735 44.6557 136.985 53.0724C139.235 61.4891 139.86 70.0724 138.785 78.9057C137.385 90.5724 133.618 99.9057 127.485 106.822C121.36 113.831 113.718 117.331 104.585 117.331C96.543 117.331 89.868 114.914 84.5846 110.014C79.3513 105.214 76.7513 98.6391 76.7513 90.2807L76.7346 90.3057ZM0.701309 90.3057C0.701309 82.9724 2.61798 76.8224 6.45132 71.8307C9.16798 68.3307 12.868 66.0641 17.5097 65.0224C22.1763 63.9891 26.4513 63.9391 30.343 64.8391C31.6763 57.0057 29.593 48.5891 24.0763 39.6724C18.5763 30.8391 11.468 24.1724 2.77632 19.6724L15.918 0.664062C22.5846 3.96406 28.8763 8.1474 34.7513 13.2057C40.7219 18.339 46.0245 24.2015 50.5346 30.6557C55.168 37.2391 58.618 44.6557 60.868 53.0724C63.1446 61.484 63.7588 70.2589 62.6763 78.9057C61.293 90.5724 57.543 99.9057 51.4263 106.822C45.318 113.772 37.7013 117.256 28.568 117.256C20.5096 117.256 13.8346 114.839 8.55132 109.947C3.32631 105.147 0.701309 98.5724 0.701309 90.2141V90.3057Z" className={ `fill-${ props.fill }` }/>
            </svg>
        )
    }

    const [ teamActive, setTeamActive ] = useState(0)

    return (
        <section id={ styles.Team } className='align-center'>
            <Typograph tag='h4' color='green-70' size='lg-1' align='center'>Tim Kami</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='636'>Segenap tim kami yang akan berusaha menyejahterakan petani Indonesia, kami adalah EraFamily (EraFam).</Typograph>
            <div className={ `${ styles.content }` }>
                <div className='row'>
                    { teamData.map((team, index) => 
                        <div key={ index } className={ `bg-${ team.bgColor } ${ styles.wrapper } ${ (teamActive == index) ? styles.isActive : '' }`  } onClick={ () => { setTeamActive(index) } } style={ { marginTop: team.top } } >
                            <Typograph tag='h4' size='lg-3' color='green-10' line='34' align='center'>
                                <span>{ Parse(team.name2) }</span>
                                <span>{ Parse(team.name1) }</span>
                            </Typograph>
                            <Typograph tag='h5' size='sm-2' weight='regular' color='green-30' align='center'>{ team.position }</Typograph>
                            <img src={ `/team/${ team.photo }` } />
                            <div className={ styles.quote }>
                                <QuoteVect fill={ team.quoteColor } />
                            </div>
                            <Typograph tag='p' size='sm-2' color='green-10' align='justify' style='italic'>{ team.quote }</Typograph>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
/* ------------------ End Team ------------------ */

/* ------------------ Culture ------------------ */
const Culture = () => {
    const cultureData = [
        {
            title: 'Diversity',
            description: 'Kami berfokus kepada membangun value dan membuat impact. Kami percaya bahwa semua orang di tim kami memiliki hak yang sama dan semangat yang sama untuk mewujudkan visi dan misi Eratani.',
            photo: 'IMG_2337 1.jpg',
            number: () => (
                <svg width="128" height="159" viewBox="0 0 70 159" fill="none">
                    <path d="M69.133 0.280414V158.793H37.8434V36.3504L0.252302 48.3014V23.639L65.765 0.280414H69.133Z" fill="#E9FFEF"/>
                </svg>
            )
        },
        {
            title: 'Trust',
            description: 'Kami memberikan kebebasan bagi setiap Era-Fam untuk mengatur dirinya sendiri dalam berkarya karena bekerja bukanlah sebuah tempat, ruangan, atau jadwal melainkan sebuah mindset, passion, dan tanggung jawab. Disini, para Era-Fam bisa mengatur pekerjaan mereka sesuai versi terbaik mereka.',
            photo: 'DSCF8530 1.jpg',
            number: () => (
                <svg width="128" height="161" viewBox="0 0 113 161" fill="none">
                    <path d="M112.075 136.348V160.793H3.86447V139.933L55.0361 85.0676C60.1786 79.3457 64.2347 74.3118 67.2043 69.966C70.1739 65.5478 72.3106 61.6004 73.6143 58.1238C74.9905 54.5747 75.6786 51.2067 75.6786 48.0198C75.6786 43.2395 74.8819 39.1472 73.2884 35.743C71.6949 32.2663 69.341 29.5864 66.2265 27.7033C63.1844 25.8201 59.4181 24.8785 54.9275 24.8785C50.1471 24.8785 46.0186 26.0374 42.542 28.3551C39.1378 30.6729 36.5303 33.896 34.7195 38.0245C32.9812 42.153 32.1121 46.8247 32.1121 52.0397H0.713771C0.713771 42.6238 2.95909 34.0047 7.44974 26.1822C11.9404 18.2874 18.278 12.0222 26.4626 7.38671C34.6471 2.67878 44.3527 0.324811 55.5793 0.324811C66.6611 0.324811 76.0045 2.13555 83.6096 5.75704C91.2872 9.3061 97.0816 14.4486 100.993 21.1846C104.976 27.8481 106.968 35.8154 106.968 45.0864C106.968 50.3014 106.135 55.4077 104.469 60.4053C102.804 65.3305 100.413 70.2558 97.2989 75.181C94.2568 80.0338 90.5629 84.959 86.2171 89.9567C81.8713 94.9543 77.0547 100.133 71.7674 105.493L44.2803 136.348H112.075Z" fill="#E9FFEF"/>
                </svg>
            )
        },
        {
            title: 'Impact',
            description: 'Kami para Era-Fam percaya bahwa fokus kepada impact mengalahkan seberapa banyak strategi dan rencana yang sudah dibuat. Bagi kami, ideas are cheap but execution is everything.',
            photo: 'IMG_1564_EDIT 1.jpg',
            number: () => (
                <svg width="128" height="163" viewBox="0 0 112 163" fill="none">
                    <path d="M36.9146 68.1191H53.6459C59.0057 68.1191 63.4239 67.2137 66.9006 65.403C70.3772 63.5198 72.9485 60.9123 74.6143 57.5805C76.3526 54.1763 77.2218 50.2289 77.2218 45.7383C77.2218 41.6822 76.4251 38.0969 74.8316 34.9825C73.3106 31.7955 70.9566 29.3329 67.7697 27.5946C64.5828 25.7839 60.563 24.8785 55.7102 24.8785C51.8714 24.8785 48.3223 25.639 45.063 27.16C41.8036 28.6811 39.1962 30.8177 37.2406 33.5701C35.285 36.3224 34.3072 39.6542 34.3072 43.5654H2.90886C2.90886 34.8738 5.22661 27.3049 9.86212 20.8587C14.5701 14.4124 20.8714 9.37853 28.7663 5.75704C36.6611 2.13555 45.3527 0.324811 54.841 0.324811C65.5606 0.324811 74.9403 2.06313 82.98 5.53975C91.0197 8.94395 97.2849 13.9778 101.775 20.6414C106.266 27.3049 108.511 35.5619 108.511 45.4123C108.511 50.41 107.353 55.2628 105.035 59.9707C102.717 64.6062 99.3853 68.8072 95.0395 72.5735C90.7662 76.2674 85.5512 79.237 79.3947 81.4824C73.2382 83.6553 66.3211 84.7417 58.6436 84.7417H36.9146V68.1191ZM36.9146 91.9123V75.7242H58.6436C67.2627 75.7242 74.8316 76.702 81.3503 78.6576C87.869 80.6132 93.3374 83.438 97.7556 87.1319C102.174 90.7534 105.506 95.063 107.751 100.061C109.996 104.986 111.119 110.454 111.119 116.466C111.119 123.854 109.707 130.445 106.882 136.239C104.057 141.961 100.073 146.814 94.9309 150.798C89.8608 154.781 83.9216 157.823 77.1132 159.924C70.3048 161.952 62.8807 162.966 54.841 162.966C48.1775 162.966 41.6226 162.06 35.1763 160.25C28.8025 158.367 23.0081 155.578 17.7932 151.884C12.6507 148.118 8.52217 143.41 5.40769 137.76C2.36564 132.038 0.844613 125.266 0.844613 117.444H32.2429C32.2429 121.5 33.2569 125.121 35.285 128.308C37.313 131.495 40.1015 133.994 43.6506 135.805C47.2721 137.615 51.2919 138.521 55.7102 138.521C60.7078 138.521 64.9812 137.615 68.5302 135.805C72.1517 133.922 74.9041 131.314 76.7872 127.982C78.7428 124.578 79.7206 120.631 79.7206 116.14C79.7206 110.346 78.6704 105.71 76.5699 102.233C74.4695 98.6844 71.4636 96.077 67.5524 94.4111C63.6412 92.7452 59.0057 91.9123 53.6459 91.9123H36.9146Z" fill="#E9FFEF"/>
                </svg>
            )
        }
    ]

    let currentActive = 0
    const sliderRef = React.createRef()

    useEffect(() => {
        const node = sliderRef.current

        let sliderAnimation = setInterval(() => {
            currentActive++
            if (node.childElementCount == currentActive) currentActive = 0
            gsap.to(node, { duration: 2, scrollTo: node.offsetHeight * currentActive })
        }, 4000)

        return _ => clearInterval(sliderAnimation)
    }, [])

    return (
        <section id={ styles.Culture } className='container-padding bg-green-50'>
            <div className='row middle-xs'>
                <SetRatio ax='1.43' ay='1' max='627' className='col-xs-7'>
                    <div ref={ sliderRef } className={ styles.slider }>
                        { cultureData.map(( culture, index ) =>
                            <div key={ index } className={ styles.slide }>
                                <img src={ `/culture/${ culture.photo } ` } width='100%' className='image-cover' />
                                <div className={ `row ${ styles.caption }` }>
                                    { culture.number() }
                                    <div className='col-xs'>
                                        <Typograph tag='h5' size='lg-1' color='green-10'>{ culture.title }</Typograph>
                                        <Typograph tag='p' size='md-3' color='green-10'>{ culture.description }</Typograph>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </SetRatio>
                <div className={ `col-xs-5 ${ styles.title }` }>
                    <Typograph tag='h3' size='xlg-3' color='green-10' maxWidth='400'>Lebih Dekat dengan Era-Fam<span className='bg-green-10'></span></Typograph>
                    <Typograph tag='p' size='md-3' color='green-30'>Kami selalu menjaga dan menjunjung tinggi nilai-nilai perusahaan demi terciptanya lingkungan kerja yang sinergis dan harmonis.</Typograph>
                    <Link href='#'>
                        <a>
                            <Typograph tag='span' size='md-3' color='green-10'>Lihat Detail</Typograph>
                            <ArrowForwardVect />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
/* ------------------ End Culture ------------------ */

/* ------------------ JoinFam ------------------ */
const JoinFam = () => {
    return (
        <section id={ styles.JoinFam } className='container-padding align-center'>
            <Typograph tag='h3' color='green-70' size='lg-1' align='center'>Ingin Menjadi Bagian dari Era-Fam?</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='636'>Mari berkarya bersama kami untuk menciptakan ekosistem pertanian Indonesia yang lebih baik!</Typograph>
            <Link href='#'>
                <><Button xPadding='32' yPadding='18' textColor='green-10' backgroundColor='green-60'>Cek Lowongan Di Sini</Button></>
            </Link>
        </section>
    )
}
/* ------------------ End JoinFam ------------------ */

export default { About, VisiMisi, Team, Culture, JoinFam }