import Parse from 'html-react-parser'
import React, { useState, createRef } from 'react';
import Link from 'next/link' 

import SetRatio from '../custom/SetRatio'
import Ellipsis from '../custom/Ellipsis'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Container from '../custom/Container'

import styles from './Blog.module.sass'
import EyeViewVect from '/assets/vector/eye-view.svg'
import EyeViewSmVect from '/assets/vector/eye-view-sm.svg'

/* ------------------ Title ------------------ */
const Title = () => {
    return ( 
        <Container id={ styles.Title } normalPadding paddingTop='81' paddingBottom='56'>
            <div className='row bottom-xs'>
                <div className='col-xs-6'>
                    <Typograph tag='h3' size='lg-3' color='green-70'>Sekilas Info tentang Eratani dan Pertanian</Typograph>
                    <Typograph tag='p' size='md-3'>Simak artikel terbaru dan berbagai keseruan Eratani dalam membangun ekosistem pertanian yang kuat.</Typograph>
                </div>
                <div className='col-xs-6'>
                    {/* <Typograph tag='h3' size='lg-3' color='green-70'>Sekilas Info tentang Eratani dan Pertanian</Typograph> */}
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Title ------------------ */

/* ------------------ Hero Article ------------------ */
const Article = () => {
    const articleData = {
        highlight: {
            title: 'Dicari: Petani Muda Berdedikasi Tinggi Untuk Indonesia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'unsplash_QFmNQXLPbZc.jpg',
            url: '#'
        },
        topFour: [
            {
                title: 'Kerjasama Eratani dengan Kementrian Pertanian',
                creator: 'Eratani',
                date: '12 Mei 2022',
                photo: '1744_sosmed 1.jpg',
                url: '#'
            },
            {
                title: 'Jepang dan Inovasi Teknologi Pertaniannya',
                creator: 'Eratani',
                date: '12 Mei 2022',
                photo: 'unsplash_aaYeR44t8Lk.jpg',
                url: '#'
            },
            {
                title: 'Minat Bertani Anak Muda Indonesia Turun 80%',
                creator: 'Eratani',
                date: '12 Mei 2022',
                photo: 'unsplash_VoHrP4Ay97w.jpg',
                url: '#'
            },
            {
                title: 'Petani Terancam Punah pada Tahun 2045',
                creator: 'Eratani',
                date: '12 Mei 2022',
                photo: 'unsplash_SBCvP6i8hR8.jpg',
                url: '#'
            }
        ]
    }
    
    return ( 
        <Container id={ styles.Article } normalPadding>
            <Typograph tag='h2' size='md-3' weight='medium' color='natural-40'>ARTIKEL</Typograph>
            <div className={ `row ${ styles.list }` }>
                <SetRatio ax='1.15' ay='1' className={ `${ styles.card } ${ styles.card_big } col-xs-6` }>
                    <div>
                        <div className={ styles.photo }>
                            <img src={ `/article/${ articleData.highlight.photo }` } width='100%' className='image-cover' />
                        </div>
                        <div className={ styles.caption }>
                            <div>
                                <Typograph tag='h4' size='md-1' color='green-70'>{ articleData.highlight.title }</Typograph>
                                <Ellipsis className={ `font-xsm-1 text-natural-50 align-justify` }>{ articleData.highlight.content }</Ellipsis>
                            </div>
                            <div className='row no-margin middle-xs between-xs'>
                                <Typograph tag='h6' size='xsm-1' color='natural-50'>{ articleData.highlight.creator } / { articleData.highlight.date }</Typograph>
                                <Link href={ articleData.highlight.url }><a><EyeViewVect /></a></Link>
                            </div>
                        </div>
                    </div>
                </SetRatio>
                <div className='col-xs-6'>
                    <div className='row'>
                        { articleData.topFour.map((item, index) => 
                            <SetRatio key={ index } ax='1.15' ay='1' className={ `${ styles.card } col-xs-6` }>
                                <div>
                                    <div className={ styles.photo }>
                                        <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                    </div>
                                    <div className={ styles.caption }>
                                        <div>
                                            <Typograph tag='h4' size='sm-1' color='green-70'>{ item.title }</Typograph>
                                        </div>
                                        <div className='row no-margin middle-xs between-xs'>
                                            <Typograph tag='h6' size='xsm-2' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                            <Link href={ articleData.highlight.url }><a><EyeViewSmVect /></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </SetRatio>
                        ) }
                    </div>
                </div>
            </div>
            <div className='align-center'>
                <Button href='#' className={ styles.loadmore } fontSize='20' textColor='green-60' borderColor='green-60' borderWidth='1' xPadding='36' yPadding='16'>Lihat Artikel Lainnya</Button>
            </div>
        </Container>
    )
}
/* ------------------ End Article ------------------ */

/* ------------------ Hero Tips ------------------ */
const Tips = () => {
    const tipsData = [
        {
            title: 'Cara Membuat Lahan dengan Konsep Verticulture',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'VertiCrop 1.jpg',
            url: '#'
        },
        {
            title: 'Varietas Padi yang Cocok Untuk Lahan Gambut',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: '20170215virna 1.jpg',
            url: '#'
        },
        {
            title: 'Tips Restorasi Lahan Bekas Sawit Agar Kembali Produktif',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'Sawit-Bukan-Penyebab-Deforestasi-1280x640 1.jpg',
            url: '#'
        },
        {
            title: 'Cara Melakukan Fermentasi Beras Menjadi Sake Minuman Khas Jepang',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'PhotoPictureResizer_191128_171006032_crop_800x500.jpg',
            url: '#'
        },
        {
            title: 'Mempercepat Proses Perontokan Padi Dengan Mesin Quick H-140 R',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'iDBckA2i-mesin-panen.jpg',
            url: '#'
        },
        {
            title: 'Komposisi Pupuk Untuk Tanaman Padi yang Masih Kurus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla rhoncus, tincidunt eros tempus, auctor mi. Sed congue augue id ligula vehicula pharetra. Nullam eu magna nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada arcu mauris, vitae feugiat eros pretium quis. Sed non leo quis ex consequat malesuada id a sem. In euismod ipsum nec lacus porta porttitor sit amet et turpis. Vestibulum aliquet vulputate nisl. Etiam lacinia molestie velit quis commodo. Aenean vulputate maximus lectus, non tempor tellus convallis a. Duis ultricies semper malesuada. Donec tincidunt eros vel ex ullamcorper vulputate. In tincidunt turpis pharetra, bibendum leo quis, tempor ex. Curabitur vitae orci efficitur, aliquet orci sed, laoreet erat. Integer accumsan nec sapien non aliquet.',
            creator: 'Eratani',
            date: '12 Mei 2022',
            photo: 'unsplash_2Q3Ivd-HsaM.jpg',
            url: '#'
        }
    ]

    return ( 
        <Container id={ styles.Tips } normalPadding paddingTop='72' paddingBottom='104'>
            <Typograph tag='h2' size='md-3' weight='medium' color='natural-40'>TIPS PERTANIAN</Typograph>
            <div className={ `row ${ styles.list }` }>
                { tipsData.map((tip, index) => 
                    <SetRatio key={ index } ay='1.28' ax='1' className={ `${ styles.card } ${ styles.card_normal } col-xs-4` }>
                        <div>
                            <div className={ styles.photo }>
                                <img src={ `/article/${ tip.photo }` } width='100%' className='image-cover' />
                            </div>
                            <div className={ styles.caption }>
                                <div>
                                    <Typograph tag='h4' size='md-3' color='green-70'>{ tip.title }</Typograph>
                                    <Ellipsis className={ `font-xsm-1 text-natural-50 align-justify` }>{ tip.content }</Ellipsis>
                                </div>
                                <div className='row no-margin middle-xs between-xs'>
                                    <Typograph tag='h6' size='xsm-1' color='natural-50'>{ tip.creator } / { tip.date }</Typograph>
                                    <Link href={ tip.url }><a><EyeViewVect /></a></Link>
                                </div>
                            </div>
                        </div>
                    </SetRatio>
                ) }
            </div>
            <div className='align-center'>
                <Button href='#' className={ styles.loadmore } fontSize='20' textColor='green-60' borderColor='green-60' borderWidth='1' xPadding='36' yPadding='16'>Lihat Tips Lainnya</Button>
            </div>
        </Container>
    )
}
/* ------------------ End Tips ------------------ */

export default { Title, Article, Tips }