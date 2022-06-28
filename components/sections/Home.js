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
    const [activeSlide, setActiveSlide] = useState(0)
    const [popup, setPopup] = useState(-1)

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

        const scrollToInitial = () => gsap.set(slider, { scrollTo: { x: node.clientWidth * (parseInt(slider.dataset.active) + 1) } })
        scrollToInitial()
        window.addEventListener('resize', scrollToInitial)
        return _ => window.removeEventListener('resize', scrollToInitial)
    }, [])

    useEffect(() => {
        if (activeSlide == slide) return

        const slider = sliderRef.current
        const photoNodes = slider.getElementsByClassName('__EcoPhotoNode__')

        gsap.timeline({ onComplete: () => setActiveSlide(slide) })
        .set(slider, { height: slider.clientHeight + 3 })
        .to(photoNodes[activeSlide], { height: photoNodes[slide].clientHeight, duration: 1, ease: 'BackEase' }, '<')
        .to(photoNodes[slide], { height: photoNodes[activeSlide].clientHeight, duration: 1, ease: 'BackEase' }, '<')
        .to(slider, { duration: 1, ease: 'BackEase', scrollTo: { x: (photoNodes[slide].clientWidth + 31.5) * (slide + 1) } }, '<')
        .set(slider, { height: 'auto' })
    }, [slide]) 

    return (
        <Container id={ styles.Ecosystem } normalPadding paddingTop='96' paddingBottom='90'>
            <Typograph tag='h2' size='xlg-3' color='green-70'>{ title[locale] }</Typograph>
            <div className={ `${ styles.eco_arrow } align-right` }>
                <a href='#' onClick={ () => ( activeSlide != 0 && activeSlide == slide ) && slideTo(activeSlide - 1) } className={ (slide == 0) ? styles.hidden : undefined }><EcoArrowVect className='flip-x' /></a>
                <a href='#' onClick={ () => ((activeSlide + 1) != data.length && activeSlide == slide) && slideTo(activeSlide + 1) } className={ ((slide + 1) == data.length) ? styles.hidden : undefined }><EcoArrowVect /></a>
            </div>
            <div ref={ sliderRef } className={ styles.slider } data-active={ activeSlide }>
                { data.map((eco, index) =>
                    <div className={ `${ styles.slide } ${ (index == slide) && styles.slide_active }` } key={ index }>
                        <div className={ styles.slide_content }>
                            <div>
                                <Typograph tag='h5' size='sm-1' className={ styles.title }>
                                    <span className='text-green-50'>{ `${ eco.no }.` }</span>
                                    <span>{ eco.title[locale] }</span>
                                </Typograph>
                                <SetRatio ax='1.42' ay='1' className='__EcoPhotoNode__'>
                                    <img src={ `/ecosystem/${ eco.photo }` } width='100%' className='image-cover' />
                                </SetRatio>
                                <div className={ styles.caption }>
                                    <Ellipsis className={ `font-xsm-1 ${styles.text}` }>
                                        { eco.description[locale] }
                                    </Ellipsis>
                                    <a href="#" onClick={ () => setPopup(index) }><EyeViewVect /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
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
        <Container id='Solution' className={ styles.Solution } normalPadding backgroundColor='natural-10' paddingTop='64' paddingBottom='80'>
            <Typograph tag='h2' size='xlg-3' color='green-70' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='900'>{ caption[locale] }</Typograph>
            <div className={ `row ${ styles.row }` }>
                { data.map((solution, index) =>
                    <div className={`col-xs-4 ${ styles.column }`} key={ index }>
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
                <Typograph tag='h2' size='xlg-3' color='green-70' align='center'>{ title[locale] }</Typograph>
                <Typograph tag='p' size='md-3' align='center'>{ caption[locale] }</Typograph>
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

    if (mitraData.length % 5 != 0)
        for (let i = 0; i < mitraData.length % 5; i++) 
            mitraData.push({image: 0, alt: 'null'})

    if (diliputData.length % 5 != 0)
        for (let i = 0; i < mitraData.length % 5; i++) 
            diliputData.push({image: 0, alt: 'null'})

    return (
        <Container id={ styles.Media } normalPadding backgroundColor='natural-10' paddingTop='40' paddingBottom='68' className='align-center'>
            <div className={ styles.tab_title }>
                <Typograph tag='h2' size='lg-3' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 0) && styles.active }` } onClick={ () => setTab(0) }>{ mitraTitle[locale] }</Typograph>
                <Typograph tag='h2' size='lg-3' color='natural-40' className={ `__MediaTabNav__ ${ (tab == 1) && styles.active }` } onClick={ () => setTab(1) }>{ diliputTitle[locale] }</Typograph>
            </div>
            <Typograph tag='p' size='md-3' align='center' maxWidth='705'>{ caption[locale] }</Typograph>
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
            <Typograph tag='h2' size='xlg-2' color='natural-60'>
                { title[locale] }&nbsp;
                <div>
                    <ul className='align-left __join_ul__'>
                        { data.map((j, index) => 
                            <li key={ index }><Typograph tag='h2' size='xlg-2' color={ j.color }>{ j[locale] }</Typograph></li>
                        ) }
                    </ul>
                </div>
            </Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='780'>{ caption[locale] }</Typograph>
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
        dots: true
    }
    const testimoniSlickSettings = SlickNavigationCustom('__slickTestimoni__', slickSettings)

    return (
        <Container id={ styles.Testimoni } normalPadding backgroundColor='natural-10' paddingTop='64' paddingBottom='52'>
            <Typograph tag='h2' size='xlg-2' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='685'>{ caption[locale] }</Typograph>
            <div className={ styles.content }>
                <Slick { ...testimoniSlickSettings } className='__slickTestimoni__'>
                    { data.map((testimoni, index) =>
                        <div className={ styles.slick_slide } key={ index }>
                            <div className='row middle-xs no-margin bg-green-10'>
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
                <img src={ MockupPng.src } width='416px' />
                <div className={ `col-xs align-left ${ styles.caption }` }>
                    <Typograph tag='p' size='md-3' color='green-60'>{ subtitle[locale] }</Typograph>
                    <Typograph tag='h2' size='xlg-2'>{ title[locale] }</Typograph>
                    <Typograph tag='p' size='md-3' color='natural-50'>{ caption[locale] }</Typograph>
                    <div className='align-right'>
                        <a href={ url }><img src={ FindPlaystorePng.src } width='200px' /></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Download ------------------ */

export default { Hero, Ecosystem, Solution, Maps, Media, Join, Testimoni, Download }