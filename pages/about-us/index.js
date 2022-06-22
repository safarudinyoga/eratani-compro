import Head from 'next/head'
import Sections from '/components/sections/AboutUs'

export default function AboutUsPage() {
    const PAGE_TITLE = 'About us'

    return (
        <>
            <Head>
                <title>Eratani - { PAGE_TITLE }</title>
            </Head>

            <Sections.About />
            <Sections.VisiMisi />
            <Sections.Team />
            <Sections.Culture />
            <Sections.JoinFam />
        </>
    ) 
}