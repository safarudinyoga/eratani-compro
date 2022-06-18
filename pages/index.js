import Head from 'next/head'
import { useEffect } from 'react'

import SetRatio from '../scripts/setRatio'
import Eliptor from '../scripts/eliptor'

import Sections from '../components/sections/Home'

export default function HomePage() {

    const PAGE_TITLE = 'Home'

    const sections = [
        Sections.Hero(),
        Sections.Ecosystem(),
        Sections.Solution(),
        Sections.Maps(),
        Sections.Media(),
        Sections.Join(),
        Sections.Testimoni(),
        Sections.Download()
    ]

    useEffect(() => {
        sections.map(section => section.Script())

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
            { sections.map((section, i) => section.Html(i) ) }
        </>
    ) 
}