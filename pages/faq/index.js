import Head from 'next/head'

import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import Slick from "react-slick";

import styles from './Faq.module.sass'
import Container from '/components/custom/Container';
import Accordion from '/components/custom/Accordion';
import Typograph from '/components/custom/Typograph'

export default function AboutUsPage() {
    const PAGE_TITLE = 'Pertanyaan'

    const faqData = {
        umum: [
            {
                q: 'Apa itu Eratani?',
                a: 'Eratani adalah perusahaan startup agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas pertanian dan kesejahteraan ekosistem pertanian.'
            },
            {
                q: 'Apa yang kami lakukan?',
                a: 'Eratani memberikan kemudahan akses dan solusi kepada petani Indonesia yang mengalami kesulitan dalam proses bercocok tanam. Akses yang diberikan dapat berupa kemudahan akses finansial, pengadaan sarana pertanian, edukasi pertanian, dan akses distribusi hasil panen dengan harga yang terstandarisasi. Melalui solusi yang diberikan, Eratani berharap dapat menyejahterakan ekosistem pertanian dengan #SelaluAdaUntukPetani demi meneruskan langkah para petani dalam bercocok tanam dan menjaga ketahanan pangan di Indonesia.'
            },
            {
                q: 'Apa yang dimaksud dengan #SelaluAdaUntukPetani?',
                a: 'Eratani hadir untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian dari hulu hingga ke hilir melalui digitalisasi dengan fokus membangun ekosistem pertanian yang kuat. Eratani berupaya memberikan kemudahan akses kepada petani dengan teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.'
            },
            {
                q: 'Apa saja lingkup bisnis kami?',
                a: 'Eratani bukan hanya berperan sebagai pemberi bantuan finansial, tetapi juga bergerak di segala proses dalam ekosistem pertanian. Eratani bergerak dari hulu ke hilir dalam mendigitalisasi ekosistem pertanian. Dari hulu, dimana Eratani memberikan bantuan pendanaan serta pengelolaan rantai pasokan kepada para petani. Hingga hilir, dimana Eratani membantu proses pendistribusian dan penyaluran hasil panen.'
            },
            {
                q: 'Siapa yang dimaksud dengan Petani Binaan Eratani?',
                a: 'Petani Binaan Eratani ialah mereka yang telah secara resmi bergabung menjadi bagian dari Eratani. Dimana mereka mendapatkan bantuan dari Eratani untuk meningkatkan produktivitas dalam bercocok tanam.'
            },
            {
                q: 'Apa saja keuntungan menjadi Petani Binaan Eratani?',
                a: 'Melalui nilai Eratani #SelaluAdaUntukPetani, tentu kesejahteraan para petani menjadi poin utama yang diperhatikan dan diperjuangkan oleh Eratani. Dimana Eratani memberikan solusi atas masalah yang mereka hadapi, solusi terhadap lingkungan, dan juga peduli dengan kesejahteraan mereka. Adapun beberapa keuntungan yang akan didapatkan oleh petani binaan antara lain: akses bantuan permodalan, akses bahan baku dan sarana pertanian, peningkatan pengetahuan terkait teknologi dan proses pertanian, serta bantuan penyaluran hasil panen dengan harga terstandarisasi.'
            },
            {
                q: 'Bagaimana cara bergabung menjadi Petani Binaan Eratani?',
                a: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577'
            },
            {
                q: 'Bagaimana cara bergabung menjadi mitra atau vendor hasil panen pada ekosistem Eratani?',
                a: 'Untuk mendapatkan informasi lebih lanjut, dapat menghubungi Customer Support kami melalui Email info@eratani.co.id atau melalui Whatsapp ke nomor +62 811 952 2577'
            }
        ]
    }

    return (
        <>
            <Head>
                <title>Eratani - { PAGE_TITLE }</title>
            </Head>

            <Container id={ styles.Faq } normalPadding paddingTop='72' paddingBottom='156'>
                <Typograph tag='h2' size='lg-1' color='green-70' align='center'>Pertanyaan</Typograph>
                <Typograph tag='p' size='md-3' align='center'>Pilih kategori untuk memudahkan mencari jawaban.</Typograph>
            
                <div className={ styles.accordion }>
                    <Accordion toggleOther>
                        { faqData.umum.map((faq, index) => 
                            <li key={ index } title={ faq.q }>
                                <Typograph tag='p' size='sm-2' line='26'>{ faq.a }</Typograph>
                            </li>
                        )}
                    </Accordion>
                </div>
            </Container>
        </>
    ) 
}