import Head from 'next/head'
import Sections from '../components/sections/Home'

export default function HomePage() {
    const PAGE_TITLE = 'Home'

    return (
        <>
            <Head>
                <title>Eratani - { PAGE_TITLE }</title>
            </Head>

            <Sections.Hero />
            <Sections.Ecosystem />
            <Sections.Solution />
            <Sections.Maps />
            <Sections.Media />
            <Sections.Join />
            <Sections.Testimoni />
            <Sections.Download />
        </>
    ) 
}