import Head from 'next/head'
import { useRouter } from 'next/router'
import Sections from '/components/sections/About'

export default function AboutUsPage() {
    const { locale } = useRouter()
    const pageTitle = {
        id: 'Tentang Kami',
        en: 'About Us'
    }
    const aboutContent = {
        title: {
            id: 'Tentang Kami',
            en: 'About Us',
        },
        description: {
            id: <>
                    Indonesia adalah negara agraris yang mayoritas penduduknya bermata pencaharian sebagai petani. Hasil pertanian yang tidak pasti dengan besarnya ketergantungan terhadap alam membuat petani Indonesia mengalami kesulitan dalam permodalan. Hal inilah yang memicu rendahnya angka regenerasi petani muda. Data dari Badan Pusat Statistik menunjukkan bahwa hanya 19,18% pemuda Indonesia yang bekerja di sektor pertanian pada 2021 dan jumlahnya terus menurun bahkan di tengah peningkatan jumlah tenaga kerja di Indonesia.
                    <br /><br />
                    Eratani sebagai sebuah perusahaan agri-tech yang didirikan oleh anak bangsa sadar akan urgensi dari masalah pertanian yang ada di Indonesia.  Berangkat dari mimpi dan semangat yang besar, Eratani memiliki misi untuk mensejahterakan petani nusantara dengan membangun ekosistem pertanian yang kuat dan mempermudah jalannya proses hulu (pendanaan petani, pengelolaan rantai pasok) hingga proses hilir (distribusi & penyaluran hasil panen) pada ekosistem pertanian.
                </>,
            en: <>
                    Eratani as an agri-tech company founded by the children of the nation has realized the urgency of agriculture problems in Indonesia. Eratani embodies a mission to improve Indonesian farmers’ welfare by building a strong agriculture ecosystem and reinforcing the upstream (funding, supply chain management) to downstream (sales and distribution of agricultural products) processes.
                </>,
        },
    }
    const visiMisiContent = {
        visiTitle: {
            id: 'VISI',
            en: 'VISION'
        },
        misiTitle: {
            id: 'MISI',
            en: 'MISSION'
        },
        visi: {
            id: 'Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan dukungan teknologi untuk menyejahterakan kehidupan petani di Indonesia kedepannya.',
            en: 'Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan dukungan teknologi untuk menyejahterakan kehidupan petani di Indonesia kedepannya.',
        },
        misi: [
            {
                id: 'Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.',
                en: 'Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.',
            },
            {
                id: 'Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.',
                en: 'Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.',
            },
            {
                id: 'Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.',
                en: 'Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.',
            },
            {
                id: 'Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.',
                en: 'Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.',
            },
            {
                id: 'Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.',
                en: 'Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.',
            }
        ],
        slides: [
            { image: 'DSC04891.jpg', alt: '' },
            { image: 'IEP08503.jpg', alt: '' },
            { image: 'Eratanijogja-18 3.jpg', alt: '' },
            { image: 'DSC04054.jpg', alt: '' },
            { image: 'IEP05859.jpg', alt: '' }
        ]
    }
    const teamContent = [
        {
            name1: <>Andrew<br />Soeherman</>,
            name2: 'Andrew Soeherman',
            position: 'Chief Executive Officer',
            quote: {
                en: '“Dengan semangat Ora et Labora, harapan saya Eratani dapat merangkul bukan hanya 100 atau 1.000 petani tapi seluruh petani di Indonesia agar para pahlawan pangan kita dapat menjalani kehidupan yang lebih sejahtera.”',
                id: '“With the spirit of Ora et Labora, I hope Eratani can embrace not only 100 or 1000 farmers, but all farmers in Indonesia so that our agricultural heroes will be able to live a prosperous life.”',
            },
            photo: 'DSCF8724.png',
            quoteSymColor: 'green-70',
            bgColor: 'green-60',
            top: 64
        },
        {
            name1: 'Kevin Juan',
            name2: 'Kevin Juan',
            position: 'Chief Operating Officer',
            quote: {
                en: '“Kami ingin Eratani memberikan ‘impact’ nyata kepada petani serta dapat menunjukkan kepada calon petani genarasi muda bahwa bertani itu merupakan bisnis yang canggih, berprospek, dan juga menghasilkan.”',
                id: 'We want Eratani to give real ‘impact’ to the farmers as well as to show future farmers of the young generation that farming is a high-technology, prospective, and productive business.”',
            },
            photo: 'DSCF8734.png',
            quoteSymColor: 'green-50',
            bgColor: 'green-40',
            top: 0
        },
        {
            name1: 'Angles Gani',
            name2: 'Angles Gani',
            position: 'Chief Plantation Officer',
            quote: {
                en: '“When life blesses you financially, don’t raise your standard of living but raise your standard of giving. Salah satu kesamaan antara saya dan visi Eratani adalah sama-sama ingin berdampak bagi sekitar, dalam konteks ini menyejahterakan petani.”',
                id: '“When life blesses you financially, don’t raise your standard of living but raise your standard of giving. One of the similarities between Eratani’s vision and mine is that we both want to bring an impact to our surroundings, in this case, by prospering the farmers’ lives.”',
            },
            photo: 'DSCF8748 (1).png',
            quoteSymColor: 'green-100',
            bgColor: 'green-90',
            top: 48
        },
        // {
        //     name1: 'Grace Astari',
        //     name2: 'Grace Astari',
        //     position: 'Chief Business Officer',
        //     quote: '“Sebagai pemimpin di Eratani, kami datang dengan sebuah pemikiran yang sama yaitu menjadi bagian dari solusi pada ekosistem pertanian. Kami percaya dalam menjalankan bisnis yang diimbangi dengan memberikan dampak sosial dapat membuat kita bertahan dan berkesinambungan dalam jangka panjang.”',
        //     photo: '4 10.png',
        //     quoteSymColor: 'green-40',
        //     bgColor: 'green-50',
        //     top: 24
        // }
    ]
    const culutreContent = {
        title: {
            id: 'Lebih Dekat dengan Era-Fam',
            en: 'Lebih Dekat dengan Era-Fam',
        },
        caption: {
            id: 'Kami selalu menjaga dan menjunjung tinggi nilai-nilai perusahaan demi terciptanya lingkungan kerja yang sinergis dan harmonis.',
            en: 'Kami selalu menjaga dan menjunjung tinggi nilai-nilai perusahaan demi terciptanya lingkungan kerja yang sinergis dan harmonis.',
        },
        detail: {
            id: 'Lihat Detail',
            en: 'Lihat Detail',
            url: '#'
        },
        data: [
            {
                title: {
                    id: 'Diversity',
                    en: 'Diversity',
                },
                description: {
                    id: 'Kami berfokus kepada membangun value dan membuat impact. Kami percaya bahwa semua orang di tim kami memiliki hak yang sama dan semangat yang sama untuk mewujudkan visi dan misi Eratani.',
                    en: 'Kami berfokus kepada membangun value dan membuat impact. Kami percaya bahwa semua orang di tim kami memiliki hak yang sama dan semangat yang sama untuk mewujudkan visi dan misi Eratani.',
                },
                photo: 'IMG_2337 1.jpg',
                numberVect: ({ className }) => (
                    <svg className={ className } width="128" height="160" viewBox="0 0 70 159" fill="none">
                        <path d="M69.133 0.280414V158.793H37.8434V36.3504L0.252302 48.3014V23.639L65.765 0.280414H69.133Z" fill="#E9FFEF"/>
                    </svg>
                )
            },
            {
                title: {
                    id: 'Trust',
                    en: 'Trust',
                },
                description: {
                    id: 'Kami memberikan kebebasan bagi setiap Era-Fam untuk mengatur dirinya sendiri dalam berkarya karena bekerja bukanlah sebuah tempat, ruangan, atau jadwal melainkan sebuah mindset, passion, dan tanggung jawab. Disini, para Era-Fam bisa mengatur pekerjaan mereka sesuai versi terbaik mereka.',
                    en: 'Kami memberikan kebebasan bagi setiap Era-Fam untuk mengatur dirinya sendiri dalam berkarya karena bekerja bukanlah sebuah tempat, ruangan, atau jadwal melainkan sebuah mindset, passion, dan tanggung jawab. Disini, para Era-Fam bisa mengatur pekerjaan mereka sesuai versi terbaik mereka.',
                },
                photo: 'DSCF8530 1.jpg',
                numberVect: ({ className }) => (
                    <svg className={ className } width="128" height="160" viewBox="0 0 113 161" fill="none">
                        <path d="M112.075 136.348V160.793H3.86447V139.933L55.0361 85.0676C60.1786 79.3457 64.2347 74.3118 67.2043 69.966C70.1739 65.5478 72.3106 61.6004 73.6143 58.1238C74.9905 54.5747 75.6786 51.2067 75.6786 48.0198C75.6786 43.2395 74.8819 39.1472 73.2884 35.743C71.6949 32.2663 69.341 29.5864 66.2265 27.7033C63.1844 25.8201 59.4181 24.8785 54.9275 24.8785C50.1471 24.8785 46.0186 26.0374 42.542 28.3551C39.1378 30.6729 36.5303 33.896 34.7195 38.0245C32.9812 42.153 32.1121 46.8247 32.1121 52.0397H0.713771C0.713771 42.6238 2.95909 34.0047 7.44974 26.1822C11.9404 18.2874 18.278 12.0222 26.4626 7.38671C34.6471 2.67878 44.3527 0.324811 55.5793 0.324811C66.6611 0.324811 76.0045 2.13555 83.6096 5.75704C91.2872 9.3061 97.0816 14.4486 100.993 21.1846C104.976 27.8481 106.968 35.8154 106.968 45.0864C106.968 50.3014 106.135 55.4077 104.469 60.4053C102.804 65.3305 100.413 70.2558 97.2989 75.181C94.2568 80.0338 90.5629 84.959 86.2171 89.9567C81.8713 94.9543 77.0547 100.133 71.7674 105.493L44.2803 136.348H112.075Z" fill="#E9FFEF"/>
                    </svg>
                )
            },
            {
                title: {
                    id: 'Impact',
                    en: 'Impact',
                },
                description: {
                    id: 'Kami para Era-Fam percaya bahwa fokus kepada impact mengalahkan seberapa banyak strategi dan rencana yang sudah dibuat. Bagi kami, ideas are cheap but execution is everything.',
                    en: 'Kami para Era-Fam percaya bahwa fokus kepada impact mengalahkan seberapa banyak strategi dan rencana yang sudah dibuat. Bagi kami, ideas are cheap but execution is everything.',
                },
                photo: 'IMG_1564_EDIT 1.jpg',
                numberVect: ({ className }) => (
                    <svg className={ className } width="128" height="160" viewBox="0 0 112 163" fill="none">
                        <path d="M36.9146 68.1191H53.6459C59.0057 68.1191 63.4239 67.2137 66.9006 65.403C70.3772 63.5198 72.9485 60.9123 74.6143 57.5805C76.3526 54.1763 77.2218 50.2289 77.2218 45.7383C77.2218 41.6822 76.4251 38.0969 74.8316 34.9825C73.3106 31.7955 70.9566 29.3329 67.7697 27.5946C64.5828 25.7839 60.563 24.8785 55.7102 24.8785C51.8714 24.8785 48.3223 25.639 45.063 27.16C41.8036 28.6811 39.1962 30.8177 37.2406 33.5701C35.285 36.3224 34.3072 39.6542 34.3072 43.5654H2.90886C2.90886 34.8738 5.22661 27.3049 9.86212 20.8587C14.5701 14.4124 20.8714 9.37853 28.7663 5.75704C36.6611 2.13555 45.3527 0.324811 54.841 0.324811C65.5606 0.324811 74.9403 2.06313 82.98 5.53975C91.0197 8.94395 97.2849 13.9778 101.775 20.6414C106.266 27.3049 108.511 35.5619 108.511 45.4123C108.511 50.41 107.353 55.2628 105.035 59.9707C102.717 64.6062 99.3853 68.8072 95.0395 72.5735C90.7662 76.2674 85.5512 79.237 79.3947 81.4824C73.2382 83.6553 66.3211 84.7417 58.6436 84.7417H36.9146V68.1191ZM36.9146 91.9123V75.7242H58.6436C67.2627 75.7242 74.8316 76.702 81.3503 78.6576C87.869 80.6132 93.3374 83.438 97.7556 87.1319C102.174 90.7534 105.506 95.063 107.751 100.061C109.996 104.986 111.119 110.454 111.119 116.466C111.119 123.854 109.707 130.445 106.882 136.239C104.057 141.961 100.073 146.814 94.9309 150.798C89.8608 154.781 83.9216 157.823 77.1132 159.924C70.3048 161.952 62.8807 162.966 54.841 162.966C48.1775 162.966 41.6226 162.06 35.1763 160.25C28.8025 158.367 23.0081 155.578 17.7932 151.884C12.6507 148.118 8.52217 143.41 5.40769 137.76C2.36564 132.038 0.844613 125.266 0.844613 117.444H32.2429C32.2429 121.5 33.2569 125.121 35.285 128.308C37.313 131.495 40.1015 133.994 43.6506 135.805C47.2721 137.615 51.2919 138.521 55.7102 138.521C60.7078 138.521 64.9812 137.615 68.5302 135.805C72.1517 133.922 74.9041 131.314 76.7872 127.982C78.7428 124.578 79.7206 120.631 79.7206 116.14C79.7206 110.346 78.6704 105.71 76.5699 102.233C74.4695 98.6844 71.4636 96.077 67.5524 94.4111C63.6412 92.7452 59.0057 91.9123 53.6459 91.9123H36.9146Z" fill="#E9FFEF"/>
                    </svg>
                )
            }
        ]
    }
    const joinFamContent = {
        title: {
            id: 'Ingin Menjadi Bagian dari Era-Fam?',
            en: 'Ingin Menjadi Bagian dari Era-Fam?',
        },
        caption: {
            id: 'Mari berkarya bersama kami untuk menciptakan ekosistem pertanian Indonesia yang lebih baik!',
            en: 'Mari berkarya bersama kami untuk menciptakan ekosistem pertanian Indonesia yang lebih baik!',
        },
        lowongan: {
            id: 'Cek Lowongan Di Sini',
            en: 'Cek Lowongan Di Sini',
            url: '/career'
        }
    }

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>
            <Sections.About { ...aboutContent } />
            <Sections.VisiMisi { ...visiMisiContent } />
            <Sections.Team { ...{ data: teamContent } } />
            <Sections.Culture { ...culutreContent } />
            <Sections.JoinFam { ...joinFamContent } />
        </>
    )
}