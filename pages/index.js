import Head from 'next/head'
import Sections from '/components/sections/Home'

export async function getServerSideProps(context) {
    try {
        const mapRes = await (await fetch(`https://compro-api.eratani.co.id/api/locations`)).json()
        if (!mapRes) return { notFound: true }

        return { props: { mapData: mapRes.data } }
    } catch (error) {
        return { props: { mapData: [] } }
    }    
}

export default function HomePage({ mapData }) {

    const heroContent = {
        background: 'IEP05860 1.jpg',
        hashtag: {
            id: 'Selalu Ada Untuk Petani',
            en: 'Selalu Ada Untuk Petani'
        },
        caption: {
            id: 'Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!',
            en: 'Kemudahan bertani di dalam genggaman Anda. Semua kebutuhan petani dapat terpenuhi hanya dengan satu aplikasi. Ayo daftar sekarang dan rasakan manfaatnya!'
        },
        download: {
            id: 'Unduh Aplikasi Eratani',
            en: 'Unduh Aplikasi Eratani',
            url: '#'
        }
    }
    const ecosystemContent = {
        title: {
            id: <>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</>,
            en: <>Menuju Ekosistem yang<br />Lebih Kuat Bersama Eratani</>
        },
        data: [
            {
                no: '01',
                title: {
                    id: 'Memiliki 1.000+ Petani Binaan',
                    en: 'Memiliki 1.000+ Petani Binaan',
                },
                description: {
                    id: 'Sejak berdiri 1 tahun lalu, Eratani telah membantu lebih dari 5.000 petani dengan memberikan kemudahan akses modal dan membuka akses pasar untuk mendapatkan harga terbaik pada penjualan komoditas petani.',
                    en: 'Sejak berdiri 1 tahun lalu, Eratani telah membantu lebih dari 5.000 petani dengan memberikan kemudahan akses modal dan membuka akses pasar untuk mendapatkan harga terbaik pada penjualan komoditas petani.',
                },
                photo: 'DSC04813 1.jpg'
            },
            {
                no: '02',
                title: {
                    id: 'Lebih dari 20 Miliar Pendanaan Tersalurkan',
                    en: 'Lebih dari 20 Miliar Pendanaan Tersalurkan',
                },
                description: {
                    id: 'Eratani telah menyalurkan lebih dari 20 Miliar pendanaan untuk petani binaan. Angka ini mengalami peningkatan 100% dari sebelumnya yang membuktikan bahwa Eratani semakin dipercaya untuk menjadi bagian dari ekosistem pertanian di Indonesia.',
                    en: 'Eratani telah menyalurkan lebih dari 20 Miliar pendanaan untuk petani binaan. Angka ini mengalami peningkatan 100% dari sebelumnya yang membuktikan bahwa Eratani semakin dipercaya untuk menjadi bagian dari ekosistem pertanian di Indonesia.',
                }, 
                photo: 'DSC04798 1.jpg'
            },
            {
                no: '03',
                title: {
                    id: 'Pendapatan Petani Meningkat Lebih dari 20%',
                    en: 'Pendapatan Petani Meningkat Lebih dari 20%',
                },
                description: {
                    id: 'Bukan hanya memberikan akses permodalan kepada petani, Eratani juga membantu para petani binaan untuk meningkatkan pendapatan yang didukung dengan pemberian edukasi dan saprotan yang berkualitas tinggi.',
                    en: 'Bukan hanya memberikan akses permodalan kepada petani, Eratani juga membantu para petani binaan untuk meningkatkan pendapatan yang didukung dengan pemberian edukasi dan saprotan yang berkualitas tinggi.',
                },
                photo: 'Eratanijogja-106 1.jpg'
            },
            {
                no: '04',
                title: {
                    id: 'Telah Memiliki Lebih dari 5.000 Ha Lahan Binaan',
                    en: 'Telah Memiliki Lebih dari 5.000 Ha Lahan Binaan',
                },
                description: {
                    id: 'Luas lahan binaan Eratani kini telah mencapai lebih dari 5.000 Ha yang tersebar di pulau Jawa. Eratani akan terus memperluas cakupan lahan binaan hingga ke seluruh Indonesia.',
                    en: 'Luas lahan binaan Eratani kini telah mencapai lebih dari 5.000 Ha yang tersebar di pulau Jawa. Eratani akan terus memperluas cakupan lahan binaan hingga ke seluruh Indonesia.',
                },
                photo: 'Eratanijogja-18 2.jpg'
            },
            {
                no: '05',
                title: {
                    id: 'Memiliki 1.000+ Petani Binaan',
                    en: 'Memiliki 1.000+ Petani Binaan',
                },
                description: {
                    id: 'Eratani membantu para petani binaan untuk meningkatkan produktivitas dan hasil panen dengan memberikan pendampingan bersama para ahli di bidang pertanian.',
                    en: 'Eratani membantu para petani binaan untuk meningkatkan produktivitas dan hasil panen dengan memberikan pendampingan bersama para ahli di bidang pertanian.',
                },
                photo: 'DSC04891 1.jpg'
            }
        ]   
    }
    const solutionContent = {
        title: {
            id: 'Solusi Untuk Lahan Pertanian Anda',
            en: 'Solusi Untuk Lahan Pertanian Anda'
        },
        caption: {
            id: 'Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan petani di seluruh Indonesia. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.',
            en: 'Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan petani di seluruh Indonesia. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.'
        },
        data: [
            {
                title1: {
                    id: <>Bantuan<br />Permodalan dan<br />Pendampingan</>,
                    en: <>Bantuan<br />Permodalan dan<br />Pendampingan</>,
                },
                title2: {
                    id: <>Bantuan Permodalan dan<br />Pendampingan</>,
                    en: <>Bantuan Permodalan dan<br />Pendampingan</>,
                },
                description: {
                    id: 'Unduh aplikasi Eratani sekarang untuk mendapatkan bantuan permodalan, pemenuhan kebutuhan sarana produksi pertanian, penyaluran hasil panen, hingga pendampingan dari para ahli di bidang pertanian.',
                    en: 'Unduh aplikasi Eratani sekarang untuk mendapatkan bantuan permodalan, pemenuhan kebutuhan sarana produksi pertanian, penyaluran hasil panen, hingga pendampingan dari para ahli di bidang pertanian.',
                },
                link: {
                    id: 'Unduh Sekarang',
                    en: 'Unduh Sekarang',
                    url: '#'
                },
                photo: 'Pendampingan 3.jpg'
            },
            {
                title1: {
                    id: <>Pilihan<br />Sarana Produksi<br />Pertanian Terbaik</>,
                    en: <>Pilihan<br />Sarana Produksi<br />Pertanian Terbaik</>,
                },
                title2: {
                    id: <>Pilihan Sarana Produksi<br />Pertanian Terbaik</>,
                    en: <>Pilihan Sarana Produksi<br />Pertanian Terbaik</>,
                },
                description: {
                    id: 'Eratani bekerja sama dengan berbagai produsen sarana produksi pertanian untuk bisa menyediakan sarana produksi pertanian dengan kualitas terbaik kepada para petani binaan. Segera hubungi kami untuk mendapatkan berbagai pilihan sarana produksi pertanian terbaik dengan harga terstandarisasi.',
                    en: 'Eratani bekerja sama dengan berbagai produsen sarana produksi pertanian untuk bisa menyediakan sarana produksi pertanian dengan kualitas terbaik kepada para petani binaan. Segera hubungi kami untuk mendapatkan berbagai pilihan sarana produksi pertanian terbaik dengan harga terstandarisasi.',
                },
                link: {
                    id: 'Hubungi Kami',
                    en: 'Hubungi Kami',
                    url: '#'
                },
                photo: 'DSC04912.jpg'
            },
            {
                title1: {
                    id: <>Penyaluran Beras<br />dan Gabah<br />Terbaik</>,
                    en: <>Penyaluran Beras<br />dan Gabah<br />Terbaik</>,
                },
                title2: {
                    id: <>Penyaluran Beras dan Gabah<br />Terbaik</>,
                    en: <>Penyaluran Beras dan Gabah<br />Terbaik</>,
                },
                description: {
                    id: 'Pada proses pasca panen, Eratani membantu untuk mengolah hasil panen dengan menyalurkan gabah dan beras dari petani binaan yang tersebar di seluruh Indonesia. Bagi Anda yang ingin menjual ataupun membeli gabah dan beras dengan kualitas terbaik, silakan hubungi kami untuk informasi lebih lanjut.',
                    en: 'Pada proses pasca panen, Eratani membantu untuk mengolah hasil panen dengan menyalurkan gabah dan beras dari petani binaan yang tersebar di seluruh Indonesia. Bagi Anda yang ingin menjual ataupun membeli gabah dan beras dengan kualitas terbaik, silakan hubungi kami untuk informasi lebih lanjut.',
                },
                link: {
                    id: 'Hubungi Kami',
                    en: 'Hubungi Kami',
                    url: '#'
                },
                photo: 'Hasil Panen.jpg'
            }
        ]
    }
    // const mapProvincePosition = {
    //     'Aceh': { x: 73, y: 86 },
    //     'Sumatera Utara': { x: 118, y: 147 },
    //     'Sumatera Barat': { x: 153, y: 220 },
    //     'Sumatera Selatan': { x: 241, y: 299 },
    //     'Lampung': { x: 288, y: 345 },
    //     'Sulawesi Selatan': { x: 713, y: 282 },
    //     'Jawa Barat': { x: 366, y: 398 },
    //     'Jawa Tengah': { x: 412, y: 409 },
    //     'Daerah Istimewa Yogyakarta': { x: 434, y: 436 },
    //     'Jawa Timur': { x: 485, y: 422 }
    // }
    const mapsContent = {
        title: {
            id: <>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</>,
            en: <>Kami Mendukung Pertumbuhan dan<br />Digitalisasi Pertanian Seluruh Indonesia</>,
        },
        caption: {
            id: 'Program Eratani sudah tersebar di beberapa wilayah di Indonesia dan akan terus menjalar ke seluruh Indonesia.',
            en: 'Program Eratani sudah tersebar di beberapa wilayah di Indonesia dan akan terus menjalar ke seluruh Indonesia.'
        },
        data: mapData.locations.map.map(prov => {
            return {
                prov: prov.province,
                cities: prov.cities.map(city => city.nama.replace(/^(kabupaten|kota|kab)[\.\s]*/gi, "")),
                pos: prov.pos,
                // pos: (mapProvincePosition[prov.province] === undefined) ? { x: 0, y: 0 } : mapProvincePosition[prov.province],
                comingSoon: prov.coming_soon
            }
        })
        // data: [
        //     {
        //         id: 11,
        //         prov: 'Aceh',
        //         cities: [],
        //         pos: { x: 73, y: 86},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Sumatera Utara',
        //         cities: ['Medan'],
        //         pos: { x: 118, y: 147},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Sumatera Barat',
        //         cities: ['Padang'],
        //         pos: { x: 153, y: 220},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Sumatera Selatan',
        //         cities: [],
        //         pos: { x: 241, y: 299},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Lampung',
        //         cities: [],
        //         pos: { x: 288, y: 345},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Sulawesi Selatan',
        //         cities: [],
        //         pos: { x: 713, y: 282},
        //         comingSoon: true
        //     },
        //     {
        //         prov: 'Jawa Barat',
        //         cities: ['Cirebon', 'Indramayu', 'Karawang', 'Majalengka', 'Sumedang'],
        //         pos: { x: 366, y: 398},
        //         comingSoon: false
        //     },
        //     {
        //         prov: 'Jawa Tengah',
        //         cities: ['Klaten'],
        //         pos: { x: 412, y: 409},
        //         comingSoon: false
        //     },
        //     {
        //         prov: 'Daerah Istimewa Yogyakarta',
        //         cities: ['Bantul', 'Kulon', 'Progo'],
        //         pos: { x: 434, y: 436},
        //         comingSoon: false
        //     },
        //     {
        //         prov: 'Jawa Timur',
        //         cities: ['Ngawi', 'Jombang'],
        //         pos: { x: 485, y: 422},
        //         comingSoon: false
        //     }
        // ]
    }

    const mediaContent = {
        mitraTitle: {
            id: 'Mitra Kami',
            en: 'Mitra Kami'
        },
        diliputTitle: {
            id: 'Diliput oleh',
            en: 'Diliput oleh'
        },
        caption: {
            id: 'Kami bekerja sama dengan mitra dan media terkemuka untuk mewujudkan ekosistem pertanian yang kuat demi mendukung kesejahteraan petani Indonesia.',
            en: 'Kami bekerja sama dengan mitra dan media terkemuka untuk mewujudkan ekosistem pertanian yang kuat demi mendukung kesejahteraan petani Indonesia.'
        },
        mitraData: [
            {image: '1.png', alt: 'bulog'},
            {image: '2.png', alt: 'bulog'},
            {image: '3.png', alt: 'bulog'},
            {image: '4.png', alt: 'bulog'},
            {image: '5.png', alt: 'bulog'},
            {image: '6.png', alt: 'bulog'},
            {image: '7.png', alt: 'bulog'},
            {image: '8.png', alt: 'bulog'},
            {image: '9.png', alt: 'bulog'},
            {image: '10.png', alt: 'bulog'},
            {image: '11.png', alt: 'bulog'},
            {image: '12.png', alt: 'bulog'},
            {image: '13.png', alt: 'bulog'},
            {image: '14.png', alt: 'bulog'},
            {image: '15.png', alt: 'bulog'},
            {image: '16.png', alt: 'bulog'},
            {image: '17.png', alt: 'bulog'},
            {image: '18.png', alt: 'bulog'},
            {image: '19.png', alt: 'bulog'},
            {image: '20.png', alt: 'bulog'},
            {image: '21.png', alt: 'bulog'},
            {image: '22.png', alt: 'bulog'},
        ],
        diliputData: [
            {image: '1.png', alt: 'bulog'},
            {image: '2.png', alt: 'bulog'},
            {image: '3.png', alt: 'bulog'},
            {image: '4.png', alt: 'bulog'},
            {image: '5.png', alt: 'bulog'},
        ]
    }
    const joinContent = {
        title: {
            id: 'Segera Bergabung Menjadi',
            en: 'Segera Bergabung Menjadi'
        },
        caption: {
            id: <>Daftar sekarang dan nikmati berbagai manfaat dari Eratani, mulai dari bantuan permodalan, penyediaan saprotan, hingga penyaluran gabah dan beras.<br />Mari bersama mewujudkan ekosistem pertanian yang kuat!</>,
            en: <>Daftar sekarang dan nikmati berbagai manfaat dari Eratani, mulai dari bantuan permodalan, penyediaan saprotan, hingga penyaluran gabah dan beras.<br />Mari bersama mewujudkan ekosistem pertanian yang kuat!</>,
        },
        daftar: {
            id: 'Daftar Sekarang',
            en: 'Daftar Sekarang',
        },
        data: [
            {
                id: 'Petani',
                en: 'Petani',
                color: 'green-60'
            },
            {
                id: 'Gapoktan',
                en: 'Gapoktan',
                color: 'green-40'
            },
            {
                id: 'Poktan',
                en: 'Poktan',
                color: 'green-70'
            },
            {
                id: 'Toko Tani',
                en: 'Toko Tani',
                color: 'green-50'
            },
            {
                id: 'Supplier',
                en: 'Supplier',
                color: 'green-68'
            },
            {
                id: 'Buyer',
                en: 'Buyer',
                color: 'green-30'
            }
        ]
    }
    const testimoniContent = {
        title: {
            id: 'Testimoni Mitra',
            en: 'Testimoni Mitra'
        },
        caption: {
            id: 'Kami merangkum beberapa mitra yang telah bergabung menjadi petani, gapoktan dan toko tani binaan Eratani.',
            en: 'Kami merangkum beberapa mitra yang telah bergabung menjadi petani, gapoktan dan toko tani binaan Eratani.'
        },
        data: [
            {
                name: 'Yanto',
                type: 'Petani',
                domisili: 'Jawa Barat',
                testi: 'Eratani memudahkan dalam permodalan sawah saya sehingga saya bisa menikmati hasilnya bersama keluarga.',
                photo: 'yanto.jpg'
            },
            {
                name: 'Katimin',
                type: 'Petani',
                domisili: 'Jawa Tengah',
                testi: 'Gabung Eratani tidak ribet dan sangat membantu saya dalam hal permodalan melalui teknologi dimana saja dan kapan saja.',
                photo: 'katimin.jpg'
            },
            {
                name: 'Nugroho Noto',
                type: 'Petani',
                domisili: 'Jawa Timur',
                testi: 'Eratani memudahkan kita dalam menyediakan saprotan dengan kualitas produksi yang baik.',
                photo: 'nugroho.jpg'
            },
            {
                name: 'Pranata',
                type: 'Gapoktan',
                domisili: 'Jawa Timur',
                testi: 'Eratani menjadi partner yang baik dengan membawa perubahan kepada sektor pertanian dengan memanfaatkan teknologi.',
                photo: 'pranata.jpg'
            },
            {
                name: 'Arif',
                type: 'Mitra EraKios',
                domisili: 'Jawa Barat',
                testi: 'Bergabung dengan EraKios sangat menguntungkan karena memudahkan penyediaan saprotan yang berkualitas sehingga meningkatkan transaksi di toko tani.',
                photo: 'arif.jpg'
            }
        ]
    }
    const downloadContent = {
        subtitle: {
            id: 'Ingin menjadi petani sukses?',
            en: 'Ingin menjadi petani sukses?'
        },
        title: {
            id: 'Segera Unduh Aplikasi Eratani di Handphone Anda!',
            en: 'Segera Unduh Aplikasi Eratani di Handphone Anda!'
        },
        caption: {
            id: (<><em>One-stop solution</em> untuk memenuhi kebutuhan petani Indonesia menuju ekosistem pertanian yang lebih kuat. Unduh untuk mendapatkan bantuan permodalan, saprotan berkualitas baik, hingga pendampingan dari para ahli di bidang pertanian.</>),
            en: (<><em>One-stop solution</em> untuk memenuhi kebutuhan petani Indonesia menuju ekosistem pertanian yang lebih kuat. Unduh untuk mendapatkan bantuan permodalan, saprotan berkualitas baik, hingga pendampingan dari para ahli di bidang pertanian.</>),
        },
        url: '#'
    }

    return (
        <>
            <Head>
                <title>Eratani</title>
            </Head>
            <Sections.Hero { ...heroContent } />
            <Sections.Ecosystem { ...ecosystemContent } />
            <Sections.Solution { ...solutionContent } />
            <Sections.Maps { ...mapsContent } />
            <Sections.Media { ...mediaContent } />
            <Sections.Join { ...joinContent } />
            <Sections.Testimoni { ...testimoniContent } />
            <Sections.Download { ...downloadContent } />
        </>
    ) 
}