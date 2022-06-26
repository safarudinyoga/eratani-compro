import Head from 'next/head'

import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Slick from "react-slick";

import styles from './Faq.module.sass'
import Container from '/components/custom/Container';
import Accordion from '/components/custom/Accordion';
import Typograph from '/components/custom/Typograph'

import NextVect from '/assets/vector/paginate-next.svg'

export default function AboutUsPage() {
    const { locale } = useRouter()

    const pageTitle = {
        id: 'Pertanyaan',
        en: 'FAQ'   
    }

    const otherContent = {
        title: {
            id: 'Pertanyaan',
            en: 'Pertanyaan'
        },
        caption: {
            id: 'Pilih kategori untuk memudahkan mencari jawaban.',
            en: 'Pilih kategori untuk memudahkan mencari jawaban.'
        }
    }

    const filterContent = [
        {
            name: 'umum',
            id: 'Umum',
            en: 'Umum'
        },
        {
            name: 'useApp',
            id: 'Penggunaan Aplikasi',
            en: 'Penggunaan Aplikasi'
        },
        {
            name: 'mitra',
            id: 'Kemitraan',
            en: 'Kemitraan'
        },
        {
            name: 'karir',
            id: 'Karir',
            en: 'Karir'
        },
        {
            name: 'other',
            id: 'Lainnya',
            en: 'Lainnya'
        }
    ]

    const faqData = {
        umum: [
            {
                q: {
                    id: 'Apa itu Eratani?',
                    en: 'Apa itu Eratani?',
                },
                a: {
                    id: 'Eratani adalah perusahaan startup agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas pertanian dan kesejahteraan ekosistem pertanian.',
                    en: 'Eratani adalah perusahaan startup agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas pertanian dan kesejahteraan ekosistem pertanian.'
                }
            },
            {
                q: {
                    id: 'Apa yang kami lakukan?',
                    en: 'Apa yang kami lakukan?',
                },
                a: {
                    id: 'Eratani memberikan kemudahan akses dan solusi kepada petani Indonesia yang mengalami kesulitan dalam proses bercocok tanam. Akses yang diberikan dapat berupa kemudahan akses finansial, pengadaan sarana pertanian, edukasi pertanian, dan akses distribusi hasil panen dengan harga yang terstandarisasi. Melalui solusi yang diberikan, Eratani berharap dapat menyejahterakan ekosistem pertanian dengan #SelaluAdaUntukPetani demi meneruskan langkah para petani dalam bercocok tanam dan menjaga ketahanan pangan di Indonesia.',
                    en: 'Eratani memberikan kemudahan akses dan solusi kepada petani Indonesia yang mengalami kesulitan dalam proses bercocok tanam. Akses yang diberikan dapat berupa kemudahan akses finansial, pengadaan sarana pertanian, edukasi pertanian, dan akses distribusi hasil panen dengan harga yang terstandarisasi. Melalui solusi yang diberikan, Eratani berharap dapat menyejahterakan ekosistem pertanian dengan #SelaluAdaUntukPetani demi meneruskan langkah para petani dalam bercocok tanam dan menjaga ketahanan pangan di Indonesia.',
                }
            },
            {
                q: {
                    id: 'Apa yang dimaksud dengan #SelaluAdaUntukPetani?',
                    en: 'Apa yang dimaksud dengan #SelaluAdaUntukPetani?',
                },
                a: {
                    id: 'Eratani hadir untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian dari hulu hingga ke hilir melalui digitalisasi dengan fokus membangun ekosistem pertanian yang kuat. Eratani berupaya memberikan kemudahan akses kepada petani dengan teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.',
                    en: 'Eratani hadir untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian dari hulu hingga ke hilir melalui digitalisasi dengan fokus membangun ekosistem pertanian yang kuat. Eratani berupaya memberikan kemudahan akses kepada petani dengan teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.',
                }
            },
            {
                q: {
                    id: 'Apa saja lingkup bisnis kami?',
                    en: 'Apa saja lingkup bisnis kami?',
                },
                a: {
                    id: 'Eratani bukan hanya berperan sebagai pemberi bantuan finansial, tetapi juga bergerak di segala proses dalam ekosistem pertanian. Eratani bergerak dari hulu ke hilir dalam mendigitalisasi ekosistem pertanian. Dari hulu, dimana Eratani memberikan bantuan pendanaan serta pengelolaan rantai pasokan kepada para petani. Hingga hilir, dimana Eratani membantu proses pendistribusian dan penyaluran hasil panen.',
                    en: 'Eratani bukan hanya berperan sebagai pemberi bantuan finansial, tetapi juga bergerak di segala proses dalam ekosistem pertanian. Eratani bergerak dari hulu ke hilir dalam mendigitalisasi ekosistem pertanian. Dari hulu, dimana Eratani memberikan bantuan pendanaan serta pengelolaan rantai pasokan kepada para petani. Hingga hilir, dimana Eratani membantu proses pendistribusian dan penyaluran hasil panen.'
                }
            },
            {
                q: {
                    id: 'Siapa yang dimaksud dengan Petani Binaan Eratani?',
                    en: 'Siapa yang dimaksud dengan Petani Binaan Eratani?',
                },
                a: {
                    id: 'Petani Binaan Eratani ialah mereka yang telah secara resmi bergabung menjadi bagian dari Eratani. Dimana mereka mendapatkan bantuan dari Eratani untuk meningkatkan produktivitas dalam bercocok tanam.',
                    en: 'Petani Binaan Eratani ialah mereka yang telah secara resmi bergabung menjadi bagian dari Eratani. Dimana mereka mendapatkan bantuan dari Eratani untuk meningkatkan produktivitas dalam bercocok tanam.'
                }
            },
            {
                q: {
                    id: 'Apa saja keuntungan menjadi Petani Binaan Eratani?',
                    en: 'Apa saja keuntungan menjadi Petani Binaan Eratani?',
                },
                a: {
                    id: 'Melalui nilai Eratani #SelaluAdaUntukPetani, tentu kesejahteraan para petani menjadi poin utama yang diperhatikan dan diperjuangkan oleh Eratani. Dimana Eratani memberikan solusi atas masalah yang mereka hadapi, solusi terhadap lingkungan, dan juga peduli dengan kesejahteraan mereka. Adapun beberapa keuntungan yang akan didapatkan oleh petani binaan antara lain: akses bantuan permodalan, akses bahan baku dan sarana pertanian, peningkatan pengetahuan terkait teknologi dan proses pertanian, serta bantuan penyaluran hasil panen dengan harga terstandarisasi.',
                    en: 'Melalui nilai Eratani #SelaluAdaUntukPetani, tentu kesejahteraan para petani menjadi poin utama yang diperhatikan dan diperjuangkan oleh Eratani. Dimana Eratani memberikan solusi atas masalah yang mereka hadapi, solusi terhadap lingkungan, dan juga peduli dengan kesejahteraan mereka. Adapun beberapa keuntungan yang akan didapatkan oleh petani binaan antara lain: akses bantuan permodalan, akses bahan baku dan sarana pertanian, peningkatan pengetahuan terkait teknologi dan proses pertanian, serta bantuan penyaluran hasil panen dengan harga terstandarisasi.',
                }   
            },
            {
                q: {
                    id: 'Bagaimana cara bergabung menjadi Petani Binaan Eratani?',
                    en: 'Bagaimana cara bergabung menjadi Petani Binaan Eratani?'
                },
                a: {
                    id: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577',
                    en: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577'
                }
            },
            {
                q: {
                    id: 'Bagaimana cara bergabung menjadi mitra atau vendor hasil panen pada ekosistem Eratani?',
                    en: 'Bagaimana cara bergabung menjadi mitra atau vendor hasil panen pada ekosistem Eratani?',
                },
                a: {
                    id: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577',
                    en: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577'
                }
            }
        ]
    }

    const [filter, setFilter] = useState('umum')

    return (
        <>
            <Head>
                <title>Eratani - { pageTitle[locale] }</title>
            </Head>

            <Container id={ styles.Faq } paddingTop='72' paddingBottom='156'>
                <Typograph tag='h2' size='lg-1' color='green-70' align='center'>{ otherContent.title[locale] }</Typograph>
                <Typograph tag='p' size='md-3' align='center'>{ otherContent.caption[locale] }</Typograph>
            
                <div className={ `row no-margin middle-xs center-xs ${ styles.filter }` }>
                    <a href='#'><NextVect className='flip-x'/></a>
                    <div className={ styles.filter_cat }>
                        <div className='row no-margin between-xs'>
                            { filterContent.map((f, index) => 
                                <Typograph key={ index } tag='a' href='#' size='sm-2' weight='bold' line='62' align='center' onClick={ () => setFilter(f.name) } className={ (filter == f.name) ? styles.active : undefined }>{ f[locale] }</Typograph>
                            ) }
                        </div>
                    </div>
                    <a href='#'><NextVect /></a>
                </div>

                <div className={ styles.accordion }>
                    <Accordion toggleOther>
                        { faqData.umum.map((faq, index) => 
                            <li key={ index } title={ faq.q[locale] }>
                                <Typograph tag='p' size='sm-2' line='26'>{ faq.a[locale] }</Typograph>
                            </li>
                        )}
                    </Accordion>
                </div>
            </Container>
        </>
    ) 
}