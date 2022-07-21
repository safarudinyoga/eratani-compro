import Head from 'next/head'
import { useRouter } from 'next/router'
import Sections from '/components/sections/Blog'

export async function getServerSideProps({ params }) {
    try {
        const page = parseInt(params.page) || 1
        const limit = 6
        const offset = (page - 1) * limit
        const articleRes = await (await fetch(`https://compro-api.eratani.co.id/api/blogs/category/tips?limit=${ limit }&offset=${ offset }`)).json()
        if (!articleRes) return { notFound: true }

        const countRes = await (await fetch(`https://compro-api.eratani.co.id/api/blogs/category/tips/count`)).json()
        if (!countRes) return { notFound: true }

        return { props: { s_tipsData: articleRes.data || [], s_totalPage: countRes.data || 1 } }
    } catch (error) {
        return { props: { s_tipsData: [], s_totalPage: 1 } }
    }    
}


export default function BlogPage({ s_tipsData, s_totalPage }) {
    const { query, locale } = useRouter()
    const { page } = query
    const totalPage = Math.ceil(s_totalPage.count / 6)
    const searchContent = {
        placeholder: {
            id: 'Search Blog post ...',
            en: 'Search Blog post ...'
        },
        button: {
            id: 'Cari',
            en: 'Find'
        }
    }
    const otherContent = {
        otherTips: {
            id: 'TIPS PERTANIAN',
            en: 'TIPS PERTANIAN'
        },
        breadcrumb: {
            id: 'Tips',
            en: 'Tips'
        }
    }
    const pageTitle = {
        id: `Blog | Tips Halaman ${ page }`,
        en: `Blog | Tips Page ${ page }`
    }
    const monthString = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const tipsData = s_tipsData.map(el => {
        const dateCreate = new Date(el.created_at)

        let ct = el.blog_article
                .split('</p>')[0]
                .replace(/(<([^>]+)>)/gi, " ")
                .replace('&nbsp;', " ")
                .trim()
                .replace(/\s+/g, " ");

        return {
            title: el.blog_title,
            content: (ct !== '') ? ct : 'Tidak ada data',
            creator: (el.BlogCreator !== '') ? el.BlogCreator : 'Eratani',
            date: dateCreate.getDate() + " " + monthString[dateCreate.getMonth()] + " " + dateCreate.getFullYear(),
            photo: (el.blog_image !== '') ? el.blog_image : '/dummy.png',
            url: el.blog_url
        }
    })
    // const tipsData = [
    //     {
    //         title: 'Cara Membuat Lahan dengan Konsep Verticulture',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'VertiCrop 1.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Varietas Padi yang Cocok Untuk Lahan Gambut',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: '20170215virna 1.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Tips Restorasi Lahan Bekas Sawit Agar Kembali Produktif',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'Sawit-Bukan-Penyebab-Deforestasi-1280x640 1.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Cara Melakukan Fermentasi Beras Menjadi Sake Minuman Khas Jepang',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'PhotoPictureResizer_191128_171006032_crop_800x500.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Mempercepat Proses Perontokan Padi Dengan Mesin Quick H-140 R',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'iDBckA2i-mesin-panen.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Komposisi Pupuk Untuk Tanaman Padi yang Masih Kurus',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'unsplash_2Q3Ivd-HsaM.jpg',
    //         url: '#'
    //     }
    // ]
    const breadcrumbProps = [
        {
            name: otherContent.breadcrumb[locale],
            url: `/blog/tips/${ page }`
        }
    ]

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>

            <Sections.Breadcrumb { ...{ links: breadcrumbProps } } />
            <Sections.Search { ...searchContent } />
            <Sections.ListType1 title={ otherContent.otherTips } path='tips' { ...{ data: tipsData } } />
            <Sections.NavPaginate path='tips' currentPage={ parseInt(page) } totalPage={ totalPage } />
            <div style={{ display: 'block', height: 68 }} />
        </>
    ) 
}