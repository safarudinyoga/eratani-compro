import Head from 'next/head'
import Sections from '/components/sections/Blog'

export default function AboutUsPage() {
    const PAGE_TITLE = 'Blog'

    return (
        <>
            <Head>
                <title>Eratani - { PAGE_TITLE }</title>
            </Head>

            <Sections.Title />
            <Sections.Article />
            <Sections.Tips />
        </>
    ) 
}