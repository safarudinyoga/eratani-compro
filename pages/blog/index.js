import Head from 'next/head'
import { useRouter } from 'next/router'
import Sections from '/components/sections/Blog'

export async function getServerSideProps(context) {
    try {
        const articleRes = await (await fetch(`https://compro-api.eratani.co.id/api/blogs/category/article?limit=5&offset=0`)).json()
        if (!articleRes) return { notFound: true }

        const tipsRes = await (await fetch(`https://compro-api.eratani.co.id/api/blogs/category/tips?limit=6&offset=0`)).json()
        if (!tipsRes) return { notFound: true }

        return { props: { s_articleData: articleRes.data || [], s_tipsData: tipsRes.data || [] } }
    } catch (error) {
        return { props: { s_articleData: [], s_tipsData: [] } }
    }
}

export default function BlogPage({ s_articleData, s_tipsData }) {

    const { locale } = useRouter()
    const pageTitle = {
        id: 'Blog',
        en: 'Blog'
    }
    const searchContent = {
        placeholder: {
            id: 'Cari Blog ...',
            en: 'Search Blog post ...'
        },
        button: {
            id: 'Cari',
            en: 'Find'
        }
    }
    const headingContent = {
        title: {
            id: 'Sekilas Info tentang Eratani dan Pertanian',
            en: 'A Glimpse about Eratani and Agriculture',
        },
        caption: {
            id: 'Simak artikel terbaru dan berbagai keseruan Eratani dalam membangun ekosistem pertanian yang kuat.',
            en: 'Check out our newest articles and join all the fun with Eratani in building our agricultural ecosystem.',
        },
        search: searchContent
    }
    const otherContent = {
        articleTopTitle: {
            id: 'ARTIKEL',
            en: 'ARTICLES'
        },
        loadMoreArticle: {
            id: 'Lihat Artikel Lainnya',
            en: 'See more Articles'
        },
        tipsTitle: {
            id: 'TIPS PERTANTAN',
            en: 'FARMERS TIPS'
        },
        loadMoreTips: {
            id: 'Lihat Tips Lainnya',
            en: 'See more Tips'
        },
    }
    const monthString = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const articleData = s_articleData.map(el => {
        const dateCreate = new Date(el.created_at)

        let ct = el.blog_article
                .split('</p>')[0]
                .replace(/(<([^>]+)>)/gi, " ")
                .replace('&nbsp;', " ")
                .trim()
                .replace(/\s+/g, " ");

        return {
            title: el.blog_title,
            content: (ct !== '') ? ct : 'Tidak ada konten',
            creator: (el.BlogCreator !== '') ? el.BlogCreator : 'Eratani',
            date: dateCreate.getDate() + " " + monthString[dateCreate.getMonth()] + " " + dateCreate.getFullYear(),
            photo: (el.blog_image !== '') ? el.blog_image : '/dummy.png',
            url: el.blog_url
        }
    })
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

    // const articleData = [
    //     {
    //         title: 'Dicari: Petani Muda Berdedikasi Tinggi Untuk Indonesia',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'unsplash_QFmNQXLPbZc.jpg',
    //         url: 'dicari-petani-muda-berdedikasi-tinggi-untuk-indonesia'
    //     },
    //     {
    //         title: 'Kerjasama Eratani dengan Kementrian Pertanian',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: '1744_sosmed 1.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Jepang dan Inovasi Teknologi Pertaniannya',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'unsplash_aaYeR44t8Lk.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Minat Bertani Anak Muda Indonesia Turun 80%',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'unsplash_VoHrP4Ay97w.jpg',
    //         url: '#'
    //     },
    //     {
    //         title: 'Petani Terancam Punah pada Tahun 2045',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
    //         creator: 'Eratani',
    //         date: '12 Mei 2022',
    //         photo: 'unsplash_SBCvP6i8hR8.jpg',
    //         url: '#'
    //     }
    // ]
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

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>

            <Sections.Heading { ...headingContent } />
            <Sections.ArticleTop title={ otherContent.articleTopTitle } { ...{ data: articleData } } />
            <Sections.LoadMore href='/blog/article/1'>{ otherContent.loadMoreArticle[locale] }</Sections.LoadMore>
            <Sections.Devider />
            <Sections.ListType1 title={ otherContent.tipsTitle } path='tips' { ...{ data: tipsData } } />
            <Sections.LoadMore href='/blog/tips/1'>{ otherContent.loadMoreTips[locale] }</Sections.LoadMore>
            <div style={{ display: 'block', height: 68 }} />
        </>
    )
}