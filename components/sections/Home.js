import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Slick from "react-slick";
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { CustomEase } from 'gsap/dist/CustomEase'

import SlickNavigationCustom from '../custom/SlickNavigation'
import SetRatio from '../custom/SetRatio'
import Ellipsis from '../custom/Ellipsis'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Container from '../custom/Container';
import Popup from '../custom/Popup'

import styles from './Home.module.sass'
import EyeViewVect from '/assets/vector/eye-view.svg'
import EcoArrowVect from '/assets/vector/eco-arrow.svg'
import IndonesiaVect from '/assets/vector/indonesia.svg'
import MapsHvrVect from '/assets/vector/maps-hvr.svg'
import MockupPng from '/assets/static/mockup.png'
import FindPlaystorePng from '/assets/static/find-playstore.png'

import DaftarForm from '/components/sections/DaftarForm'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(CustomEase)

/* ------------------ Hero Banner ------------------ */
const Hero = ({ background, hashtag, caption, download }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.Hero }>
            <SetRatio ax='2.33' ay='1' min='600' className={ styles.wrapper }>
                <div className={ styles.background } style={ { backgroundImage: `url('/hero/${ background }')` } }></div>
                <div className={ styles.content }>
                    <Typograph tag='h1' size='xlg-1' weight='extrabold' color='green-10' line='70'>{ hashtag[locale] }</Typograph>
                    <Typograph tag='p' size='md-3' color='white' align='justify' maxWidth='528'>{ caption[locale] }</Typograph>
                    <Button href={ download.url } target='_blank' xPadding='18' textColor='white' backgroundColor='green-60'>{ download[locale] }</Button>
                </div>
            </SetRatio>
        </Container>
    )
}
/* ------------------ End Hero Banner ------------------ */

/* ------------------ Ecosystem ------------------ */
const Ecosystem = ({ title, data }) => {
    const { locale } = useRouter()
    const sliderRef = createRef()
    const [slide, slideTo] = useState(0)
    const [lock, setLock] = useState(1)
    const [popup, setPopup] = useState(-1)

    const slickSettings = {
        infinite: true,
        speed: 1800,
        autoplay: false,
        cssEase: 'ease-out',
        arrows: false,
        dots: true,
        centerPadding: '16px',
        centerMode: true
    }
    const ecosystemSlickSettings = SlickNavigationCustom('__slickEcosystem__', slickSettings)

    useEffect(() => {
        CustomEase.create('BackEase', '.4, 1.35, .6, 1')

        const slider = sliderRef.current

        const node = document.createElement('div')
        node.classList.add(styles.slide)
        slider.prepend(...[node])

        let nodes = data.map(() => {
            const node = document.createElement('div')
            node.classList.add(styles.slide)
            return node
        })
        slider.append(...nodes)

        const scrollToInitial = () => gsap.set(slider, { scrollTo: { x: node.clientWidth * (parseInt(slider.dataset.active) + 1) }, onComplete: () => setLock(0) })
        scrollToInitial()
        window.addEventListener('resize', scrollToInitial)
        return _ => window.removeEventListener('resize', scrollToInitial)
    }, [])

    useEffect(() => {
        if (lock) return
        setLock(1)

        const slider = sliderRef.current
        const slideNode = slider.getElementsByClassName(styles.slide_content)

        gsap.timeline({ onComplete: () => setLock(0) })
        .set(slider, { minHeight: slider.clientHeight + 3 })
        .to(slider, { duration: 1, ease: 'BackEase', scrollTo: { x: (slideNode[slide].clientWidth + 31.5) * (slide + 1) } })
        .set(slider, { minHeight: 0 })
    }, [slide]) 

    return (
        <Container id={ styles.Ecosystem } normalPadding paddingTop='96' paddingBottom='90'>
            <Typograph tag='h2' size='sm-1 lg-3-sm xlg-3-md' color='green-70'>{ title[locale] }</Typograph>
            <div className={ `${ styles.eco_arrow } align-right` }>
                <a href='#' onClick={ () => (slide != 0 && !lock) && slideTo(slide - 1) } className={ (slide == 0) ? styles.hidden : undefined }><EcoArrowVect className='flip-x' /></a>
                <a href='#' onClick={ () => ((slide + 1) != data.length && !lock) && slideTo(slide + 1) } className={ ((slide + 1) == data.length) ? styles.hidden : undefined }><EcoArrowVect /></a>
            </div>
            <div ref={ sliderRef } className={ `${ styles.custom_slider }` } data-active={ slide }>
                { data.map((eco, index) =>
                    <div className={ `${ styles.slide } ${ (index == slide) && styles.slide_active }` } key={ index }>
                        <div className={ styles.slide_content }>
                            <div>
                                <Typograph tag='h5' size='sm-2 sm-1-md' className={ styles.title }>
                                    <span className='text-green-50'>{ `${ eco.no }.` }</span>
                                    <span>{ eco.title[locale] }</span>
                                </Typograph>
                                <SetRatio ax='1.42' ay='1'>
                                    <img src={ `/ecosystem/${ eco.photo }` } width='100%' className='image-cover' />
                                </SetRatio>
                                <div className={ styles.caption }>
                                    <Ellipsis className={ `font-xsm-1 ${styles.text}` }>
                                        { eco.description[locale] }
                                    </Ellipsis>
                                    <a href="#" onClick={ () => setPopup(index) }><EyeViewVect width='30' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
            <div className={ styles.slick_slider }>
                <Slick { ...ecosystemSlickSettings } className='__slickEcosystem__'>
                    { data.map((eco, index) =>
                        <div className={ styles.slide } key={ index } onClick={ () => setPopup(index) }>
                            <SetRatio ax='1.34' ay='1' className='__EcoPhotoNode__'>
                                <img src={ `/ecosystem/${ eco.photo }` } width='100%' className='image-cover' />
                            </SetRatio>
                            <Typograph tag='h5' size='sm-2' className={ styles.title }>
                                <span className='text-green-50'>{ `${ eco.no }.` }</span>
                                <span>{ eco.title[locale] }</span>
                            </Typograph>
                            <Typograph tag='p' size='xsm-1'>{ eco.description[locale] }</Typograph>
                        </div>
                    ) }
                </Slick>
            </div>
            { (popup > -1) &&
                <Popup overlay='0.3' maxWidth='526' onPopupClose={ () => setPopup(-1) }>
                    <div className={ `bg-white ${ styles.pop_ecosystem }` }>
                        <SetRatio ax='1.42' ay='1'>
                            <img src={ `/ecosystem/${ data[popup].photo }` } width='100%' className='image-cover' />
                        </SetRatio>
                        <div className={ styles.caption }>
                            <Typograph tag='h5' size='sm-1' className={ styles.title }>
                                <span className='text-green-50'>{ `${ data[popup].no }.` }</span>
                                <span>{ data[popup].title[locale] }</span>
                            </Typograph>
                            <Typograph tag='p' size='sm-2' align='justify'>{ data[popup].description[locale] }</Typograph>
                        </div>
                    </div>
                </Popup>
            }
        </Container>
    )
}
/* ------------------ End Ecosystem ------------------ */

/* ------------------ Solutions ------------------ */
const Solution = ({ title, caption, data }) => {
    const { locale } = useRouter()
    const onSolutionEnter = (event) => {
        const [ titleNode, captionNode ] = event.currentTarget.getElementsByClassName('__SolutionNode__')
        if (captionNode === undefined) return
        gsap.timeline()
            .set(captionNode, { bottom: 80 })
            .set(titleNode, { bottom: captionNode.clientHeight })
    }
    const onSolutionLeave = (event) => {
        const [ titleNode, captionNode ] = event.currentTarget.getElementsByClassName('__SolutionNode__')
        if (captionNode === undefined) return
        gsap.timeline()
            .set(captionNode, { bottom: (captionNode.clientHeight / 2) * -1 })
            .set(titleNode, { bottom: 40 })
    }

    return (
        <Container anchor='Solution' id={ styles.Solution } normalPadding backgroundColor='natural-10' paddingTop='64' paddingBottom='80'>
            <Typograph tag='h2' size='sm-1 lg-3-sm xlg-3-md' color='green-70' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center' maxWidth='900'>{ caption[locale] }</Typograph>
            <div className={ `row center-xs ${ styles.row }` }>
                { data.map((solution, index) =>
                    <div className={`col-xs-12 col-sm-6 col-md-5 col-lg-4 align-left ${ styles.column }`} key={ index }>
                        <SetRatio ax='1' ay='1.26' min='0' className={ styles.wrapper } onMouseEnter={ onSolutionEnter } onMouseLeave={ onSolutionLeave }>
                            <img src={ `/solution/${ solution.photo }` } className='image-cover' />
                            <Typograph tag='h4' size='xlg-3' color='green-10' className='__SolutionNode__'>
                                <span>{ solution.title1[locale] }</span>
                                <span>{ solution.title2[locale] }</span>
                            </Typograph>
                            <div className={ `${styles.caption} align-center __SolutionNode__` }>
                                <Typograph tag='p' size='sm-2' color='green-10' line='23' align='justify'>{ solution.description[locale] }</Typograph>
                                <Button href={ solution.link.url } target='_blank' xPadding='18' textColor='white' backgroundColor='green-60' >{ solution.link[locale] }</Button>
                            </div>
                        </SetRatio>
                        <SetRatio ax='1' ay='1.26' min='420' max='485' className={ styles.wrapper_sm } onMouseEnter={ onSolutionEnter } onMouseLeave={ onSolutionLeave }>
                            <img src={ `/solution/${ solution.photo }` } className='image-cover' />
                            <div className={ styles.content }>
                                <div>
                                    <Typograph tag='h4' size='md-3' color='green-10'>{ solution.title2[locale] }</Typograph>
                                    <Typograph tag='p' size='xsm-1' color='green-10' align='justify'>{ solution.description[locale] }</Typograph>
                                </div>
                                <div className='align-center'>
                                    <Button href={ solution.link.url } target='_blank' xPadding='32' textColor='white' backgroundColor='green-60' >{ solution.link[locale] }</Button>
                                </div>
                            </div>
                        </SetRatio>
                    </div>
                ) }
            </div>
        </Container>
    )
}
/* ------------------ End Solutions ------------------ */

/* ------------------ Maps ------------------ */
const Maps = ({ title, caption, data }) => {
    const { locale } = useRouter()
    const mapsTipRef = createRef()
    const [ mapIndexHover, setMapIndexHover ] = useState(0)
    const onPointEnter = (event) => {
        const id = parseInt(event.currentTarget.dataset.id)

        setMapIndexHover(id)
        const scaleFactor = window.innerWidth / 1440
        gsap.fromTo(mapsTipRef.current, { left: (data[id].pos.x * scaleFactor), top: (data[id].pos.y * scaleFactor), autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 })
    }
    const onPointLeave = () => gsap.to(mapsTipRef.current, { autoAlpha: 0, duration: 0.3 })

    return (
        <Container id={ styles.Maps } paddingTop='48' paddingBottom='96'>
            <div className='container-padding align-center'>
                <Typograph tag='h2' size='sm-1 lg-3-sm xlg-3-md' color='green-70' align='center'>{ title[locale] }</Typograph>
                <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center'>{ caption[locale] }</Typograph>
            </div>
            <div className={ styles.indonesia }>
                <IndonesiaVect />
                <div className={ styles.interactive }>
                    <svg viewBox="0 0 1440 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                        { data.map((map, index) => 
                            <g onMouseEnter={ onPointEnter } onMouseLeave={ onPointLeave } className={ `${ (map.comingSoon) && styles.coming_soon } ${ styles.dot_point }` } key={ index } data-id={ index }>
                                <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.shadow }/>
                                <circle cx={ map.pos.x } cy={ map.pos.y } r="8" className={ styles.outline }/>
                                <circle cx={ map.pos.x } cy={ map.pos.y } r="5" className={ styles.dot }/>
                            </g>
                        )}
                    </svg>
                    <div className={ styles.tip } ref={ mapsTipRef }>
                        <MapsHvrVect />
                        <div className={ styles.content }>
                            <Typograph tag='h6' size='sm-1' color='green-60'>{ data[mapIndexHover].prov }</Typograph>
                            { data[mapIndexHover].cities.map((city, index) => 
                                <Typograph tag='p' size='md-3' color='white' className='label bg-green-60' key={ index }>{ city }</Typograph>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Maps ------------------ */

/* ------------------ Media ------------------ */
const Media = ({ mitraTitle, diliputTitle, caption, mitraData, diliputData }) => {
    const { locale } = useRouter()
    const slickSettings = {
        speed: 1800,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-out',
        arrows: false, 
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    }    
    const mitaSlickSettings = SlickNavigationCustom('__SlickMitra__', slickSettings)
    const diliputSlickSettings = SlickNavigationCustom('__SlickDiliput__', slickSettings)
    const [ tab, setTab ] = useState(0)

    // if (mitraData.length % 5 != 0)
    //     for (let i = 0; i < mitraData.length % 5; i++) 
    //         mitraData.push({image: 0, alt: 'null'})

    // if (diliputData.length % 5 != 0)
    //     for (let i = 0; i < mitraData.length % 5; i++) 
    //         diliputData.push({image: 0, alt: 'null'})

    return (
        <Container id={ styles.Media } normalPadding backgroundColor='natural-10' paddingTop='40' paddingBottom='68' className='align-center'>
            <div className={ styles.tab_title }>
                <Typograph tag='h2' size='sm-1 md-2-sm lg-3-md' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 0) && styles.active }` } onClick={ () => setTab(0) }>{ mitraTitle[locale] }</Typograph>
                <Typograph tag='h2' size='sm-1 md-2-sm lg-3-md' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 1) && styles.active }` } onClick={ () => setTab(1) }>{ diliputTitle[locale] }</Typograph>
            </div>
            <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center' maxWidth='705'>{ caption[locale] }</Typograph>
            <div className={ styles.content }>
                { (tab == 0) ? <Slick { ...mitaSlickSettings } className='__SlickMitra__'>
                        { mitraData.map((mitra, index) => 
                            <div key={ index }>
                                <div className={ styles.slick_slide }>
                                    { (!mitra.image) ? '' : <img src={ `/media/mitra/${ mitra.image }` } alt={ mitra.alt } /> }
                                </div>
                            </div>
                        ) }
                    </Slick>
                : <Slick { ...diliputSlickSettings } className='__SlickDiliput__'>
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
        </Container>
    )
}
/* ------------------ End Media ------------------ */

/* ------------------ Join ------------------ */
const Join = ({ title, caption, data, daftar }) => {
    const { locale } = useRouter()
    const [ formDaftar, setFormDaftar ] = useState(0)
    return (
        <Container id={ styles.Join } normalPadding paddingTop='80' paddingBottom='68' className='align-center'>
            <Typograph tag='h2' size='sm-1 lg-3-sm xlg-2-md' color='natural-60'>
                { title[locale] }&nbsp;
                <div>
                    <ul className='align-left __join_ul__'>
                        { data.map((j, index) => 
                            <li key={ index }><Typograph tag='h2' size='sm-1 lg-3-sm xlg-2-md' color={ j.color }>{ j[locale] }</Typograph></li>
                        ) }
                    </ul>
                </div>
            </Typograph>
            <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center' maxWidth='780'>{ caption[locale] }</Typograph>
            <Button href='#' onClick={ () => setFormDaftar(1) } xPadding='18' textColor='white' backgroundColor='green-60'>{ daftar[locale] }</Button>
            { (formDaftar) ? <DaftarForm onClose={ () => setFormDaftar(0) } /> : undefined }
        </Container>
    )
}
/* ------------------ End Join ------------------ */

/* ------------------ Testimoni ------------------ */
const Testimoni = ({ title, caption, data }) => {
    const { locale } = useRouter()
    const slickSettings = {
        infinite: true,
        speed: 1800,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-out',
        centerMode: true,
        centerPadding: '45px',
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerPadding: '16px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerPadding: '32px',
                }
            }
        ]
    }
    const testimoniSlickSettings = SlickNavigationCustom('__slickTestimoni__', slickSettings)

    return (
        <Container id={ styles.Testimoni } normalPadding backgroundColor='natural-10' paddingTop='64' paddingBottom='52'>
            <Typograph tag='h2' size='sm-1 lg-3-sm xlg-2-md' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center' maxWidth='685'>{ caption[locale] }</Typograph>
            <div className={ styles.content }>
                <Slick { ...testimoniSlickSettings } className='__slickTestimoni__'>
                    { data.map((testimoni, index) =>
                        <div className={ styles.slick_slide } key={ index }>
                            <div className='row middle-xs no-margin bg-green-10'>
                                <SetRatio ax='1.46' ay='1' min='230' max='400' className={ styles.photo }>
                                    <img src={ `/testimoni/${ testimoni.photo }` } width='100%' className='image-cover' />
                                </SetRatio>
                                <div className={ `col-xs-12 col-md align-left ${ styles.caption }` }>
                                    <Typograph tag='h5' size='sm-2 md-2-sm md-1-lg'>{ testimoni.name }</Typograph>
                                    <Typograph tag='h6' size='xsm-3 xsm-1-sm' weight='light medium-md'>{ testimoni.type }, { testimoni.dom }</Typograph>
                                    <Typograph tag='p' size='xsm-1 sm-1-sm md-3-lg'>{ testimoni.testi }</Typograph>
                                </div>
                            </div>
                        </div>
                    ) }
                </Slick>
            </div>
        </Container>
    )
}
/* ------------------ End Testimoni ------------------ */

/* ------------------ Download ------------------ */
const Download = ({ subtitle, title, caption, url }) => {
    const { locale } = useRouter()
    return (
        <Container id={ styles.Download } normalPadding paddingTop='64' paddingBottom='96'>
            <div className='row no-margin middle-xs'>
                <div className={ `${ styles.mockup } align-center`  }>
                    <img src={ MockupPng.src } />
                </div>
                <div className={ `col-xs-12 col-md align-center align-left-md ${ styles.caption }` }>
                    <Typograph tag='p' size='xsm-2 sm-1-sm md-3-lg' color='green-60'>{ subtitle[locale] }</Typograph>
                    <Typograph tag='h2' size='sm-1 lg-2-sm xlg-2-lg'>{ title[locale] }</Typograph>
                    <Typograph tag='p' size='xsm-1 sm-1-sm md-3-lg' color='natural-50'>{ caption[locale] }</Typograph>
                    <div className='align-center align-right-md'>
                        <a href={ url }><img src={ FindPlaystorePng.src } width='200px' /></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Download ------------------ */

export default { Hero, Ecosystem, Solution, Maps, Media, Join, Testimoni, Download }