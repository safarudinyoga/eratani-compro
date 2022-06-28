import Head from 'next/head'
import { useRouter } from 'next/router'
import Sections from '/components/sections/Blog'

export default function AboutUsPage() {
    const { locale, query } = useRouter()
    const { url } = query
    const blogData = {
        title: 'Dicari: Petani Muda Berdedikasi Tinggi Untuk Indonesia',
        content: `<p style="text-align: justify;">Halo Sobat Eratani!</p><p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque elit lorem nunc nibh porttitor posuere lorem vehicula. Vitae natoque tincidunt viverra vulputate morbi aliquet. Tristique urna tristique risus natoque in. Gravida praesent faucibus bibendum nisi, in leo. Pretium at nunc et, ac nullam risus parturient tortor massa. Viverra nunc ipsum etiam imperdiet ultrices amet vivamus elementum mattis. Quis morbi sit varius morbi fusce in purus. Mauris, morbi vestibulum sed enim dignissim tellus vestibulum, in. At a gravida auctor tellus arcu auctor. Imperdiet eget leo amet lectus nibh. Pharetra dis molestie tellus nisl, sit nisi id nisl eget.</p><p style="text-align: justify;">Lectus elit suscipit nullam et, placerat. Massa amet sit ultrices dictumst sapien. A interdum dui, egestas leo, gravida. Sagittis nulla proin id mauris turpis consectetur. Velit vel congue sit volutpat sit. Tincidunt non faucibus urna diam.</p><p style="text-align: justify;">Amet purus in velit lacus, nullam in quam. Scelerisque ipsum hac varius morbi nunc. Quis arcu elit consectetur montes, accumsan. Nulla quis in cras imperdiet lectus. Scelerisque ut posuere nulla fermentum ut ut eu, sit. Varius sed varius sit a. Magna orci vestibulum enim elit dis. Enim a, consectetur gravida risus mattis sagittis dui ultrices. Tincidunt elit vulputate varius sed eu bibendum. Mi, mauris amet vitae urna lorem ut curabitur. Leo morbi elementum mi rhoncus, varius bibendum phasellus tellus.</p><p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque elit lorem nunc nibh porttitor posuere lorem vehicula. Vitae natoque tincidunt viverra vulputate morbi aliquet. Tristique urna tristique risus natoque in. Gravida praesent faucibus bibendum nisi, in leo. Pretium at nunc et, ac nullam risus parturient tortor massa. Viverra nunc ipsum etiam imperdiet ultrices amet vivamus elementum mattis. Quis morbi sit varius morbi fusce in purus. Mauris, morbi vestibulum sed enim dignissim tellus vestibulum, in. At a gravida auctor tellus arcu auctor. Imperdiet eget leo amet lectus nibh. Pharetra dis molestie tellus nisl, sit nisi id nisl eget.</p><p style="text-align: justify;">Lectus elit suscipit nullam et, placerat. Massa amet sit ultrices dictumst sapien. A interdum dui, egestas leo, gravida. Sagittis nulla proin id mauris turpis consectetur. Velit vel congue sit volutpat sit. Tincidunt non faucibus urna diam.</p><p style="text-align: justify;">Amet purus in velit lacus, nullam in quam. Scelerisque ipsum hac varius morbi nunc. Quis arcu elit consectetur montes, accumsan. Nulla quis in cras imperdiet lectus. Scelerisque ut posuere nulla fermentum ut ut eu, sit. Varius sed varius sit a. Magna orci vestibulum enim elit dis. Enim a, consectetur gravida risus mattis sagittis dui ultrices. Tincidunt elit vulputate varius sed eu bibendum. Mi, mauris amet vitae urna lorem ut curabitur. Leo morbi elementum mi rhoncus, varius bibendum phasellus tellus.</p>`,
        creator: 'Eratani',
        date: '12 Mei 2022',
        photo: 'unsplash_QFmNQXLPbZc.jpg'
    }
    const pageTitle = {
        id: `Blog | ${ blogData.title }`,
        en: `Blog | ${ blogData.title }`
    }
    const otherContent = {
        otherArticle: {
            id: 'Lihat Artikel Lainnya',
            en: 'Lihat Artikel Lainnya',
        },
        breadcrumb: {
            id: 'Artikel',
            en: 'Article'
        }
    }
    const buttonDaftar = {
        id: 'Daftar Sebagai Petani',
        en: 'Daftar Sebagai Petani',
        url: '#'
    }
    const articleData = [
        {
            title: 'Kerjasama Eratani dengan Kementrian Pertanian',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: '1744_sosmed 1.jpg',
            url: '#'
        },
        {
            title: 'Jepang dan Inovasi Teknologi Pertaniannya',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'unsplash_aaYeR44t8Lk.jpg',
            url: '#'
        },
        {
            title: 'Minat Bertani Anak Muda Indonesia Turun 80%',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'unsplash_VoHrP4Ay97w.jpg',
            url: '#'
        },
        {
            title: 'Petani Terancam Punah pada Tahun 2045',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'unsplash_SBCvP6i8hR8.jpg',
            url: '#'
        }
    ]
    const breadcrumbProps = [
        {
            name: otherContent.breadcrumb[locale],
            url: `/blog/article/1`
        },
        {
            name: blogData.title,
            url: `/blog/article/read/${ url }`
        }
    ]

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>

            <Sections.Breadcrumb { ...{ links: breadcrumbProps } } />
            <Sections.Read daftar={ buttonDaftar } { ... { data: blogData } } />
            <Sections.ListType2 title={ otherContent.otherArticle } path='article' { ...{ data: articleData } } />
            <div style={{ display: 'block', height: 60 }} />
        </>
    ) 
}