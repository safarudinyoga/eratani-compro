import Parse from 'html-react-parser'
import React, { useEffect, useState, createRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link' 
import Slick from "react-slick";
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

import SetRatio from '../custom/SetRatio'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Container from '../custom/Container'

import styles from './About.module.sass'
import ArrowForwardVect from '/assets/vector/arrow-forward.svg'

gsap.registerPlugin(ScrollToPlugin)

/* ------------------ About ------------------ */
const About = ({ title, description }) => {
    const { locale } = useRouter()
    return (
        <Container id={ styles.About } normalPadding paddingTop='72' paddingBottom='107'>
            <Typograph tag='h2' color='green-70' size='lg-1' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='md-2' align='justify' maxWidth='1076'>{ description[locale] }</Typograph>
        </Container>
    )
}
/* ------------------ End About ------------------ */

/* ------------------ VisiMisi ------------------ */
const VisiMisi = ({ visiTitle, misiTitle, visi, misi, slides }) => {
    const { locale } = useRouter()

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
        <Container id={ styles.VisiMisi }>
            <div className='row no-margin'>
                <div className='col-xs bg-green-70'>
                    <div className={ styles.visi }>
                        <Typograph tag='h2' color='green-10' size='lg-3'>{ visiTitle[locale] }</Typograph>
                        <Typograph tag='p' color='green-10' size='md-3'>{ visi[locale] }</Typograph>
                    </div>
                </div>
                <SetRatio ax='1' ay='1.72' max='719' className={ styles.slider }>
                    <Slick { ...slickSettings }>
                        { slides.map((photo, index) =>
                            <div key={ index } className={ styles.slide }>
                                <img src={ `/visimisi/${ photo.image }` } alt={ photo.alt } width='100%' className='image-cover' />
                            </div>
                        )}
                    </Slick>
                </SetRatio>
                <div className='col-xs bg-green-100'>
                    <div className={ styles.misi }>
                        <Typograph tag='h2' color='green-20' size='md-3' weight='extrabold'>{ misiTitle[locale] }</Typograph>
                        <ul>
                            { misi.map((misi, index) => 
                                <li key={ index }>
                                    <Typograph tag='p' color='green-20' size='md-2' weight='bold'>{ index + 1 }</Typograph>
                                    <Typograph tag='p' color='green-20' size='sm-2'>{ misi[locale] }</Typograph>
                                </li>
                            ) }
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End VisiMisi ------------------ */

/* ------------------ Team ------------------ */
const Team = ({ data }) => {
    const { locale } = useRouter()

    const QuoteVect = (props) => {
        return (
            <svg width="140" height="118" viewBox="0 0 140 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M76.7346 90.3057C76.7346 82.9724 78.6513 76.8224 82.4846 71.8307C85.2013 68.3974 88.8846 66.1391 93.543 65.0641C98.1263 63.9974 102.46 63.9224 106.376 64.8307C107.71 56.9141 105.543 48.5307 100.043 39.6474C94.543 30.7724 87.418 24.0891 78.7263 19.6224L91.9013 0.664062C98.568 3.96406 104.901 8.1474 110.735 13.2057C116.651 18.2641 121.901 24.0807 126.568 30.6557C131.235 37.2307 134.735 44.6557 136.985 53.0724C139.235 61.4891 139.86 70.0724 138.785 78.9057C137.385 90.5724 133.618 99.9057 127.485 106.822C121.36 113.831 113.718 117.331 104.585 117.331C96.543 117.331 89.868 114.914 84.5846 110.014C79.3513 105.214 76.7513 98.6391 76.7513 90.2807L76.7346 90.3057ZM0.701309 90.3057C0.701309 82.9724 2.61798 76.8224 6.45132 71.8307C9.16798 68.3307 12.868 66.0641 17.5097 65.0224C22.1763 63.9891 26.4513 63.9391 30.343 64.8391C31.6763 57.0057 29.593 48.5891 24.0763 39.6724C18.5763 30.8391 11.468 24.1724 2.77632 19.6724L15.918 0.664062C22.5846 3.96406 28.8763 8.1474 34.7513 13.2057C40.7219 18.339 46.0245 24.2015 50.5346 30.6557C55.168 37.2391 58.618 44.6557 60.868 53.0724C63.1446 61.484 63.7588 70.2589 62.6763 78.9057C61.293 90.5724 57.543 99.9057 51.4263 106.822C45.318 113.772 37.7013 117.256 28.568 117.256C20.5096 117.256 13.8346 114.839 8.55132 109.947C3.32631 105.147 0.701309 98.5724 0.701309 90.2141V90.3057Z" className={ `fill-${ props.fill }` }/>
            </svg>
        )
    }

    const [ teamActive, setTeamActive ] = useState(0)

    return (
        <Container id={ styles.Team } paddingTop='128' paddingBottom='121'>
            <Typograph tag='h4' color='green-70' size='lg-1' align='center'>Tim Kami</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='636'>Segenap tim kami yang akan berusaha menyejahterakan petani Indonesia, kami adalah EraFamily (EraFam).</Typograph>
            <div className='row'>
                { data.map((team, index) => 
                    <div key={ index } className='col-xs'>
                        <div className={ `bg-${ team.bgColor } ${ styles.wrapper } ${ (teamActive == index) ? styles.isActive : '' }`  } onClick={ () => { setTeamActive(index) } } style={ { marginTop: team.top } } >
                            <Typograph tag='h4' size='lg-3' color='green-10' line='34' align='center'>
                                <span>{ team.name2 }</span>
                                <span>{ team.name1 }</span>
                            </Typograph>
                            <Typograph tag='h5' size='sm-2' weight='regular' color='green-30' align='center'>{ team.position }</Typograph>
                            <img src={ `/team/${ team.photo }` } />
                            <div className={ styles.quote }>
                                <QuoteVect fill={ team.quoteSymColor } />
                            </div>
                            <Typograph tag='p' size='sm-2' color='green-10' align='justify' fontStyle='italic'>{ team.quote }</Typograph>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}
/* ------------------ End Team ------------------ */

/* ------------------ Culture ------------------ */
const Culture = ({ title, caption, detail, data }) => {
    const { locale } = useRouter()

    let currentActive = 0
    const sliderRef = createRef()

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
        <Container id={ styles.Culture } normalPadding backgroundColor='green-50'>
            <div className='row middle-xs'>
                <SetRatio ax='1.43' ay='1' max='627' className='col-xs-7'>
                    <div ref={ sliderRef } className={ styles.slider }>
                        { data.map(( culture, index ) =>
                            <div key={ index } className={ styles.slide }>
                                <img src={ `/culture/${ culture.photo } ` } width='100%' className='image-cover' />
                                <div className={ `row ${ styles.caption }` }>
                                    { <culture.numberVect /> }
                                    <div className='col-xs'>
                                        <Typograph tag='h5' size='lg-1' color='green-10'>{ culture.title[locale] }</Typograph>
                                        <Typograph tag='p' size='md-3' color='green-10'>{ culture.description[locale] }</Typograph>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </SetRatio>
                <div className={ `col-xs-5 ${ styles.title }` }>
                    <Typograph tag='h2' size='xlg-3' color='green-10' maxWidth='400'>{ title[locale] }<span className='bg-green-10'></span></Typograph>
                    <Typograph tag='p' size='md-3' color='green-30'>{ caption[locale] }</Typograph>
                    <Typograph tag='a' href={ detail.url } size='md-3' color='green-10'>{ detail[locale] }<ArrowForwardVect /></Typograph>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Culture ------------------ */

/* ------------------ JoinFam ------------------ */
const JoinFam = ({ title, caption, lowongan }) => {
    const { locale } = useRouter()
    return (
        <Container id={ styles.JoinFam } normalPadding paddingTop='96' paddingBottom='104' className='align-center'>
            <Typograph tag='h2' color='green-70' size='lg-1' align='center'>{ title[locale] }</Typograph>
            <Typograph tag='p' size='md-3' align='center' maxWidth='636'>{ caption[locale] }</Typograph>
            <Button href={ lowongan.url } xPadding='32' yPadding='18' textColor='green-10' backgroundColor='green-60'>{ lowongan[locale] }</Button>
        </Container>
    )
}
/* ------------------ End JoinFam ------------------ */

export default { About, VisiMisi, Team, Culture, JoinFam }