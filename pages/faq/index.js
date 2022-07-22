import Head from 'next/head'
import Link from 'next/link'
import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Slick from "react-slick";
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

import styles from './Faq.module.sass'
import Container from '/components/custom/Container';
import Accordion from '/components/custom/Accordion';
import Typograph from '/components/custom/Typograph'

import NextVect from '/assets/vector/paginate-next.svg'

gsap.registerPlugin(ScrollToPlugin)

export default function FaqPage() {
    const { locale } = useRouter()
    const pageTitle = {
        id: 'Pertanyaan',
        en: 'FAQ'
    }
    const otherContent = {
        title: {
            id: 'Pertanyaan',
            en: 'FAQ'
        },
        caption: {
            id: 'Pilih kategori untuk memudahkan mencari jawaban.',
            en: 'Pilih kategori untuk memudahkan mencari jawaban.'
        }
    }
    const faqData2 = [
        {
            slugName: 'umum',
            id: 'Umum',
            en: 'General',
            disable: false,
            list: [
                {
                    q: {
                        id: 'Apa itu Eratani?',
                        en: 'What is Eratani?',
                    },
                    a: {
                        id: <>Eratani adalah perusahaan startup agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir.<br /><br/>Eratani memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas pertanian dan kesejahteraan ekosistem pertanian.</>,
                        en: <>Eratani is a start-up agri-tech company which focuses on building a strong agricultural ecosystem by digitizing the agriculture process from upstream to downstream.<br /><br/>Eratani provides easy access to the farmers through technology to increase farming productivity and the welfare of the agricultural ecosystem.</>
                    }
                },
                {
                    q: {
                        id: 'Apa yang kami lakukan?',
                        en: 'What does Eratani do?',
                    },
                    a: {
                        id: <>Eratani memberikan kemudahan akses dan solusi kepada petani Indonesia yang mengalami kesulitan dalam proses bertani. Akses yang diberikan dapat berupa kemudahan akses finansial, pengadaan sarana pertanian, edukasi pertanian, dan akses distribusi hasil panen dengan harga yang terstandarisasi.<br/><br/>Melalui solusi yang diberikan, Eratani berharap dapat menyejahterakan ekosistem pertanian dengan #SelaluAdaUntukPetani demi meneruskan langkah para petani dalam bertani dan menjaga ketahanan pangan di Indonesia.</>,
                        en: <>Eratani gives easy access and solutions to farmers who experience difficulty during their farming activity. The access provided includes easy financial access, agriculture supply provision, farming education, and access to agricultural products distribution at standardized price.<br/><br/>Through giving solutions, Eratani hopes to improve the agriculture ecosystem by #SelaluAdaUntukPetani for the sake of continuing the farmers’ steps in planting and maintaining food security.</>,
                    }
                },
                {
                    q: {
                        id: 'Apa yang dimaksud dengan #SelaluAdaUntukPetani?',
                        en: 'What is the meaning of Eratani #SelaluAdaUntukPetani?',
                    },
                    a: {
                        id: <>Eratani hadir untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian dari hulu hingga ke hilir melalui digitalisasi dengan fokus membangun ekosistem pertanian yang kuat.<br/><br/>Eratani berupaya memberikan kemudahan akses kepada petani dengan teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.
                        </>,
                        en: <>Eratani is here to help prosper the local farmers by reinforcing the agricultural process from upstream to downstream by digitalization with the focus on strengthening the agricultural ecosystem.<br/><br/>Eratani strives to provide easy access to the farmers via technology to increase productivity and improve the agriculture ecosystem.</>,
                    }
                },
                {
                    q: {
                        id: 'Apa saja lingkup bisnis kami?',
                        en: 'What is Eratani’s business scope?',
                    },
                    a: {
                        id: <>Eratani tidak hanya berperan sebagai pemberi bantuan finansial, tetapi juga bergerak di segala proses ekosistem pertanian. Eratani bergerak dari hulu ke hilir dalam mendigitalisasi ekosistem pertanian.<br/><br/>Dari hulu, dimana Eratani memberikan bantuan pendanaan serta pengelolaan rantai pasokan kepada para petani.<br/><br/>Hingga hilir, dimana Eratani membantu proses pendistribusian dan penyaluran hasil panen.
                        </>,
                        en: 'Eratani does not only take the role as a funder, but also works through all processes in an agricultural ecosystem. Eratani digitizes the system from upstream, where Eratani provides financial support and supply chain management to the farmers, to downstream, where we help with the agricultural products sales and distribution.'
                    }
                },
            ]
        },
        {
            slugName: 'penggunaan-aplikasi',
            id: 'Penggunaan Aplikasi',
            en: 'Use of Application',
            disable: false,
            list: [
                {
                    q: {
                        id: 'Apa saja yang dapat dilakukan dengan aplikasi Eratani?',
                        en: 'What can you do with the Eratani mobile application?',
                    },
                    a: {
                        id: 'Ada beberapa hal yang dapat dilakukan oleh petani melalui aplikasi Eratani yaitu Registrasi, Mengajukan Pembiayaan, dan Pengambilan Saprotan.',
                        en: 'There are several things that can be done in the mobile application, such as registration, offering funds, and acclaiming agricultural production supplies.'
                    }
                },
                {
                    q: {
                        id: 'Bagaimana cara registrasi pada aplikasi Eratani?',
                        en: 'How to register on the Eratani mobile application?',
                    },
                    a: {
                        id: <>Pertama, Anda dapat mengunduh aplikasi Eratani pada Google Play Store.<br/><br/>Kedua, buat akun mulai dari mengisi nama, nomor handphone, dan kata sandi, kemudian tekan tombol “Daftar”.<br/><br/>Ketiga, setelah akun berhasil dibuat, tekan tombol “Masuk di sini” dan ulangi pengisian nomor handphone serta kata sandi. Sampai di tahap ini, kamu berhasil registrasi pada aplikasi Eratani.</>,
                        en: <>Firstly, you can download the Eratani mobile application at Google Play Store.<br/><br/>Secondly, make an account by filling out the name, phone number and password, and then pressing the “Register” button.<br/><br/>Thirdly, after you make the account, press “Log in” and fill out the phone number and password again. At this step, you have been registered on the Eratani application.</>,
                    }
                },
                {
                    q: {
                        id: 'Siapa saja yang dapat menggunakan aplikasi Eratani?',
                        en: 'Who can use the Eratani mobile application?',
                    },
                    a: {
                        id: 'Aplikasi Eratani dapat diunduh oleh semua orang, namun hanya petani yang telah terdaftar sebagai petani binaan Eratani yang dapat secara langsung menggunakan dan menikmati fitur pada aplikasi Eratani.',
                        en: 'The Eratani mobile application can be downloaded by everyone. However, only the farmers who have been registered as Eratani’s fostered farmers can directly use and enjoy the features of the application.'
                    }
                },
            ]
        },
        {
            slugName: 'kemitraan',
            id: 'Kemitraan',
            en: 'Partnership',
            disable: false,
            list: [
                {
                    q: {
                        id: 'Siapa yang dimaksud dengan Petani Binaan Eratani?',
                        en: 'Who are meant by Eratani’s fostered farmers?',
                    },
                    a: {
                        id: 'Petani binaan Eratani ialah mereka yang telah secara resmi bergabung menjadi bagian dari Eratani. Mereka mendapatkan bantuan dari Eratani untuk meningkatkan produktivitas dalam bertani.',
                        en: 'Eratani’s fostered farmers are those who have officially joined as a part of Eratani. They will receive help from Eratani to increase their land productivity.'
                    }
                },
                {
                    q: {
                        id: 'Apa saja keuntungan menjadi seorang petani binaan Eratani?',
                        en: 'What are the benefits of joining as Eratani’s farmers?',
                    },
                    a: {
                        id: <>Melalui nilai Eratani #SelaluAdaUntukPetani, kesejahteraan para petani menjadi perhatian dan prioritas utama Eratani. Eratani memberikan solusi atas masalah yang mereka hadapi, solusi terhadap lingkungan, dan peduli dengan kesejahteraan mereka.<br/><br/>Adapun beberapa keuntungan yang akan didapatkan oleh petani binaan antara lain: akses bantuan permodalan, akses bahan baku dan sarana pertanian, peningkatan pengetahuan terkait teknologi dan proses pertanian, serta bantuan penyaluran hasil panen dengan harga terstandarisasi.</>,
                        en: 'Embodying the value of #SelaluAdaUntukPetani, certainly, the farmers’ welfare becomes the main point of Eratani’s concerns and objectives. Eratani aims to provide solutions to the problems they face, including solutions to the environment, as well as to care for their well-being. Some of the benefits they will receive include access to financial support, access to raw materials and farming supplies, increasing knowledge on farming technology and processes, and access to agricultural products distribution at standardized price.',
                    }
                },
                {
                    q: {
                        id: 'Bagaimana cara bergabung menjadi Petani Binaan Eratani?',
                        en: 'How to join Eratani as farmers?'
                    },
                    a: {
                        id: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577',
                        en: 'For further information, contact our Customer Support through email info@eratani.co.id or Whatsapp number +62 811 952 2577.'
                    }
                },
                {
                    q: {
                        id: 'Apa yang dimaksud dengan EraKios?',
                        en: 'What is EraKios?'
                    },
                    a: {
                        id: 'EraKios adalah toko tani modern yang menjadi bagian dari program kemitraan EraTani sebagai bagian dari bentuk komitmen untuk #SelaluAdaUntukPetani. EraKios bertujuan untuk membantu toko tani menjadi toko yang memiliki daya saing melalui pemberdayaan usaha yang berkesinambungan dan menjadi one-stop service point untuk melayani kebutuhan petani Indonesia.',
                        en: 'EraKios are modern agricultural supply stores that join as a part of Eratani’s partnership program as a form of commitment towards #SelaluAdaUntukPetani. EraKios aims to help the agricultural supply stores to compete on the market through a continuous business empowerment and to be a one stop service point to serve the needs of farmers in Indonesia.'
                    }
                },
                {
                    q: {
                        id: 'Apa saja keuntungan mendaftar sebagai Toko Tani/Mitra EraKios?',
                        en: 'What are the advantages of joining as supply stores/EraKios partner?'
                    },
                    a: {
                        id: <>
                                Ada beberapa keuntungan yang akan diperoleh oleh toko tani apabila bergabung menjadi Mitra EraKios, antara lain:<br/><br/>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li style={{ listStyleType: 'disc' }}>
                                        Bergabung dengan Komunitas Toko Tani Modern di Indonesia
                                        <div>
                                            Menjadi bagian dari jaringan terluas Komunitas Toko Tani Modern yang saling bertukar informasi dan pengetahuan untuk terus bertumbuh menjadi lebih baik dalam menyediakan kebutuhan-kebutuhan untuk petani di Indonesia.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }}>
                                        Pemenuhan Stok Toko Tani Berkualitas
                                        <div>
                                            Dukungan berupa pemenuhan stok toko dalam bentuk sarana produksi pertanian yang asli dan berkualitas dengan berbagai jenis dan merek. Memudahkan Toko Tani dalam menyediakan sarana yang tepat untuk kebutuhan lahan.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }}>
                                        Meningkatkan Penjualan melalui Perluasan Konsumen melalui Petani Binaan Eratani
                                        <div>
                                            Berkesempatan mendapatkan peningkatan penjualan dengan menyediakan kebutuhan petani-petani binaan Eratani yang berada di sekitar EraKios.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }}>
                                        Mendapatkan Pendampingan Berkelanjutan menjadi Toko Tani Modern
                                        <div>
                                            Pendampingan usaha yang berkelanjutan tidak hanya dari sisi pemenuhan stok, namun juga manajemen order hingga pengelolaan karyawan dan keuangan secara digital.
                                        </div>
                                    </li>
                                </ul>
                            </>,
                        en: <>
                                There are some advantages you will receive by joining as EraKios partner, such as:<br/><br/>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li style={{ listStyleType: 'disc' }} title='Joining the Indonesian Modern Agricultural Supply Stores Community'>
                                        Joining the Indonesian Modern Agricultural Supply Stores Community
                                        <div>
                                            Being a part of the biggest network of modern agricultural supply stores community which allows its members to exchange knowledge and information to grow together to become even better suppliers of the local farmers needs.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }} title=''>
                                        Provision of high-quality agricultural supply stocks
                                        <div>
                                            A support in the form of provision of the stocks, including original, high-quality agricultural production supplies from various types and brands. It helps the stores to provide the right supply according to the field needs.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }} title=''>
                                        Increasing sales through consumer expansion by Eratani’s fostered farmers
                                        <div>
                                            Getting an opportunity to increase sales by providing the needs of Eratani’s fostered farmers who live around the EraKios.
                                        </div>
                                    </li><br/>
                                    <li style={{ listStyleType: 'disc' }} title=''>
                                        Getting continuous assistance to be a modern agricultural supply store
                                        <div>
                                            Getting continuous assistance not only in terms of stock provision, but also in the management of orders, employees, and finance in digital.
                                        </div>
                                    </li>
                                </ul>
                            </>,
                    }
                },
                {
                    q: {
                        id: 'Bagaimana cara bergabung menjadi mitra asuransi untuk petani?',
                        en: 'How to join as insurance partner for farmers?'
                    },
                    a: {
                        id: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau Whatsapp ke nomor +62 811 952 2577',
                        en: 'For further information, contact our Customer Support through email info@eratani.co.id or Whatsapp number +62 811 952 2577.'
                    }
                },
            ]
        },
        {
            slugName: 'karir',
            id: 'Karir',
            en: 'Karir',
            disable: false,
            list: [
                {
                    q: {
                        id: 'Bagaimana cara bergabung menjadi bagian dari Era-Fam atau karyawan Eratani?',
                        en: "How to join as a part of EraFam or Eratani's employee?"
                    },
                    a: {
                        id: <>Kami selalu membuka kesempatan bagi semua orang yang ingin menjadi bagian dari misi kami untuk membentuk ekosistem pertanian yang kuat dan menyejahterakan petani di Indonesia. Untuk informasi lebih lanjut dapat <Link href="/career" replace>klik di sini</Link>.</>,
                        en: <>We always provide the chance for everyone who wants to be a part of our mission to build a strong agricultural ecosystem and improve the wellbeing of Indonesian farmers. For further information, click <Link href="/career" replace>here</Link>.</>
                    }
                },
            ]
        },
        {
            slugName: 'lainnya',
            id: 'Lainnya',
            en: 'Other',
            disable: false,
            list: [
                {
                    q: {
                        id: 'Bagaimana cara bergabung menjadi mitra atau vendor hasil panen pada ekosistem Eratani?',
                        en: 'How to join Eratani as partners or vendors of agricultural products?',
                    },
                    a: {
                        id: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau Whatsapp ke nomor +62 811 952 2577.',
                        en: 'For further information, contact our Customer Support through email info@eratani.co.id or Whatsapp number +62 811 952 2577.'
                    }
                }
            ]
        }
    ]
    const scrollWrapperRef = createRef()
    const faqListRef = createRef()

    const [lock, setLock] = useState(1)
    const [filterId, setFilterId] = useState(0)

    const scrollRight = (event) => {
        const wrapper = scrollWrapperRef.current
        gsap.to(wrapper, { duration: 1, ease: 'Power1.easeInOut', scrollTo: { x: wrapper.scrollLeft + wrapper.clientWidth }})
    }

    const scrollLeft = (event) => {
        const wrapper = scrollWrapperRef.current
        gsap.to(wrapper, { duration: 1, ease: 'Power1.easeInOut', scrollTo: { x: wrapper.scrollLeft - wrapper.clientWidth }})
    }

    useEffect(() => {
        const list = faqListRef.current.childNodes

        gsap.set(list, { display: 'none' })
        setTimeout(() => {
            gsap.set(list[filterId], { display: 'block' })
            gsap.to(list[filterId], { opacity: 1, duration: 0.4, onComplete: () => setLock(0) })
        }, 100)
    }, [])

    const changeFilter = (nextFilterId) => {
        if (nextFilterId === filterId || lock) return
        setLock(1)

        const list = faqListRef.current.childNodes
        const lastFilterId = filterId
        setFilterId(nextFilterId)

        gsap.to(list[lastFilterId], { opacity: 0, duration: 0.4, onComplete: () => {
            gsap.set(list[lastFilterId], { display: 'none' })
            gsap.set(list[nextFilterId], { display: 'block' })
            gsap.to(list[nextFilterId], { opacity: 1, duration: 0.4, onComplete: () => setLock(0) })
        } })
    }

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>

            <Container id={ styles.Faq } normalPadding paddingTop='72' paddingBottom='156'>
                <Typograph tag='h2' size='sm-1 md-1-sm lg-1-md' color='green-70' align='center'>{ otherContent.title[locale] }</Typograph>
                <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md' align='center'>{ otherContent.caption[locale] }</Typograph>

                <div className={ `${ styles.filter }` }>
                    {faqData2.length > 5 && <a href='#' className={ styles.arrow_left } onClick={ scrollLeft }><NextVect height='20' className='flip-x'/></a>}
                    <div ref={ scrollWrapperRef } className={ styles.scroll_wrapper }>
                        <div className={ `${ styles.filter_cat }` }>
                            { faqData2.map((f, index) =>
                                <div className='col-xs-6 col-sm-4 col-md-3 col-lg' key={ index }>
                                    <Typograph tag='a' href='#' size='xsm-1 sm-2-md' weight='bold' align='center' disable={ (f.disable || f.list.length == 0) } onClick={ () => changeFilter(index) } className={ `${ (f.disable || f.list.length == 0) ? styles.disabled : undefined } ${ (filterId == index) ? styles.active : undefined }` }>{ f[locale] }</Typograph>
                                </div>
                            ) }
                        </div>
                    </div>
                    {faqData2.length > 5 && <a href='#' className={ styles.arrow_right } onClick={ scrollRight }><NextVect height='20' /></a>}
                </div>
                <div ref={ faqListRef }>
                    { faqData2.map((f, indexF) =>
                        <div key={ indexF } className={ styles.accordion }>
                            <Accordion toggleOther>
                            { f.list.map((faq, index) =>
                                    <li key={ index } title={ faq.q[locale] }>
                                        <Typograph tag='p' size='xsm-2 sm-2-md' align='justify left-sm'>{ faq.a[locale] }</Typograph>
                                    </li>
                                )}
                            </Accordion>
                        </div>
                    )}
                </div>
            </Container>
        </>
    )
}