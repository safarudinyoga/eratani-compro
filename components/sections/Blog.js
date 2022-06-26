import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link' 

import SetRatio from '../custom/SetRatio'
import Ellipsis from '../custom/Ellipsis'
import Typograph from '../custom/Typograph'
import Button from '../custom/Button'
import Container from '../custom/Container'
import Input from '../custom/Input'
import Article from '../custom/Article'

import styles from './Blog.module.sass'
import EyeViewVect from '/assets/vector/eye-view.svg'
import EyeViewSmVect from '/assets/vector/eye-view-sm.svg'
import FindWhiteVect from '/assets/vector/find-white.svg'
import PaginateNextVect from '/assets/vector/paginate-next.svg'
import PaginateLastVect from '/assets/vector/paginate-last.svg'

/* ------------------ Heading ------------------ */
const Heading = ({ title, caption, search }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.Heading } normalPadding paddingTop='81' paddingBottom='20'>
            <div className='row bottom-xs'>
                <div className='col-xs-6'>
                    <Typograph tag='h3' size='lg-3' color='green-70'>{ title[locale] }</Typograph>
                    <Typograph tag='p' size='md-3'>{ caption[locale] }</Typograph>
                </div>
                <div className='col-xs-6'>
                    <div className={ `row no-margin ${ styles.search }` }>
                        <Input type='text' className='col-xs' placeholder={ search.placeholder[locale] } model='1' />
                        <Button href='#' fontSize='sm-1' textColor='white' backgroundColor='green-60' xPadding='37' yPadding='15'><FindWhiteVect />{ search.button[locale] }</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End Heading ------------------ */

/* ------------------ Search ------------------ */
const Search = ({ placeholder, button }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.Search } normalPadding paddingTop='48' paddingBottom='18'>
                <div className={ `row no-margin ${ styles.search } center-xs` }>
                    <Input type='text' className='col-xs' placeholder={ placeholder[locale] } model='1' />
                    <Button href='#' fontSize='sm-1' textColor='white' backgroundColor='green-60' xPadding='37' yPadding='15'><FindWhiteVect />{ button[locale] }</Button>
                </div>
        </Container>
    )
}
/* ------------------ End Search ------------------ */

/* ------------------ ArticleTop ------------------ */
const ArticleTop = ({ data, title }) => {
    const { locale } = useRouter()
    const articleData = {
        highlight: data[0],
        topFour: data.slice(1)
    }

    return ( 
        <Container id={ styles.ArticleTop } normalPadding paddingTop='36' paddingBottom='36'>
            <Typograph tag='h2' size='md-3' weight='medium' color='natural-40'>{ title[locale] }</Typograph>
            <div className={ `row ${ styles.list }` }>
                <SetRatio ax='1.15' ay='1' className={ `${ styles.card } ${ styles.card_2x } col-xs-6` }>
                    <Link href={ `/blog/article/read/${ articleData.highlight.url }` }>
                        <a>
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
                                    <EyeViewVect />
                                </div>
                            </div>
                        </a>
                    </Link>
                </SetRatio>
                <div className='col-xs-6'>
                    <div className='row'>
                        { articleData.topFour.map((item, index) => 
                            <SetRatio key={ index } ax='1.15' ay='1' className={ `${ styles.card } ${ styles.card_1x } col-xs-6` }>
                                <Link href={ `/blog/article/read/${ item.url }` }>
                                    <a>
                                        <div className={ styles.photo }>
                                            <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                        </div>
                                        <div className={ styles.caption }>
                                            <div>
                                                <Typograph tag='h4' size='sm-1' color='green-70'>{ item.title }</Typograph>
                                            </div>
                                            <div className='row no-margin middle-xs between-xs'>
                                                <Typograph tag='h6' size='xsm-2' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                                <EyeViewSmVect />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </SetRatio>
                        ) }
                    </div>
                </div>
            </div>
        </Container>
    )
}
/* ------------------ End ArticleTop ------------------ */

/* ------------------ ListType1 ------------------ */
const ListType1 = ({ data: listData, title, path }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.ListType1 } normalPadding paddingTop='36' paddingBottom='36'>
            <Typograph tag='h4' size='md-3' weight='medium' color='natural-40'>{ title[locale] }</Typograph>
            <div className={ `row ${ styles.list }` }>
                { listData.map((item, index) => 
                    <SetRatio key={ index } ay='1.3' ax='1' className={ `${ styles.card } ${ styles.card_xv } col-xs-4` }>
                        <Link href={ `/blog/${ path }/read/${ item.url }` }>
                            <a>
                                <div className={ styles.photo }>
                                    <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                </div>
                                <div className={ styles.caption }>
                                    <div>
                                        <Typograph tag='h4' size='md-3' color='green-70'>{ item.title }</Typograph>
                                        <Ellipsis className={ `font-xsm-1 text-natural-50 align-justify` }>{ item.content }</Ellipsis>
                                    </div>
                                    <div className='row no-margin middle-xs between-xs'>
                                        <Typograph tag='h6' size='xsm-1' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                        <EyeViewVect />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </SetRatio>
                ) }
            </div>
        </Container>
    )
}
/* ------------------ End ListType1 ------------------ */

/* ------------------ ListType2 ------------------ */
const ListType2 = ({ data: listData, title, path }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.ListType2 } normalPadding paddingTop='36' paddingBottom='36'>
            <Typograph tag='h4' size='lg-1' color='green-70'>{ title[locale] }</Typograph>
            <div className={ `row ${ styles.list }` }>
                { listData.map((item, index) => 
                    <SetRatio key={ index } ay='1' ax='2.18' className={ `${ styles.card } ${ styles.card_xh } col-xs-6` }>
                        <Link href={ `/blog/${ path }/read/${ item.url }` }>
                            <a>
                                <div className={ styles.photo }>
                                    <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                </div>
                                <div className={ styles.caption }>
                                    <div>
                                        <Typograph tag='h4' size='sm-1' color='green-70'>{ item.title }</Typograph>
                                        <Ellipsis className={ `font-xsm-1 text-natural-50 align-justify` }>{ item.content }</Ellipsis>
                                    </div>
                                    <div className='row no-margin middle-xs between-xs'>
                                        <Typograph tag='h6' size='xsm-2' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                        <EyeViewVect />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </SetRatio>
                ) }
            </div>
        </Container>
    )
}
/* ------------------ End ListType2 ------------------ */

/* ------------------ LoadMore ------------------ */
const LoadMore = ({ href, children }) => {
    return ( 
        <Container id={ styles.LoadMore } normalPadding paddingTop='36' paddingBottom='36'>
            <div className='align-center'>
                <Button href={ href } className={ styles.loadmore } fontSize='20' textColor='green-60' borderColor='green-60' borderWidth='1' xPadding='36' yPadding='16'>{ children }</Button>
            </div>
        </Container>
    )
}
/* ------------------ End LoadMore ------------------ */

/* ------------------ Devider ------------------ */
const Devider = () => {
    return ( 
        <Container id={ styles.Devider } normalPadding paddingTop='36' paddingBottom='36'></Container>
    )
}
/* ------------------ End Devider ------------------ */

/* ------------------ Breadcrumb ------------------ */
const Breadcrumb = ({ links }) => {
    return ( 
        <Container id={ styles.Breadcrumb } normalPadding paddingTop='68'>
            <Typograph tag='a' href='/blog' size='xsm-1' color='natural-50'>Blog</Typograph>
            { links.map((link, index) => 
                <span key={ index }>
                    <Typograph tag='p' size='xsm-1' color='natural-50'>&nbsp;&nbsp;/&nbsp;&nbsp;</Typograph>
                    <Typograph tag='a' href={ link.url } size='xsm-1' weight={ ((index + 1) == links.length) ? 'bold' : 'regular' } color={ ((index + 1) == links.length) ? 'green-70' : 'natural-50' }>{ link.name }</Typograph>
                </span>
            ) }
        </Container>
    )
}
/* ------------------ End Breadcrumb ------------------ */

/* ------------------ NavPaginate ------------------ */
const NavPaginate = ({ path, currentPage, totalPage }) => {
    return ( 
        <Container id={ styles.NavPaginate } normalPadding paddingTop='60' paddingBottom='60' className='align-center'>
            <ul>
                <li>
                    <Link href={ (currentPage > 1) ? `/blog/${ path }/1` : '#' }><a className='flip-x'><PaginateLastVect /></a></Link>
                </li>
                <li>
                    <Link href={ (currentPage > 1) ? `/blog/${ path }/${ (currentPage - 1) }` : '#' }><a className='flip-x'><PaginateNextVect /></a></Link>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;
                { Array.from(Array(totalPage), (e, index) => 
                    <li key={ index }>
                        <Typograph tag='a' href={ `/blog/${ path }/${ (index + 1) }` } size='md-1' color={ (currentPage == (index + 1)) ? 'white' : 'green-60' } weight='bold' className={ (currentPage == (index + 1)) ? 'bg-green-60' : '' }>{ (index + 1) }</Typograph>
                    </li>
                ) }&nbsp;&nbsp;&nbsp;&nbsp;
                <li>
                    <Link href={ (currentPage < totalPage) ? `/blog/${ path }/${ (currentPage + 1) }` : '#' }><a><PaginateNextVect /></a></Link>
                </li>
                <li>
                    <Link href={ (currentPage < totalPage) ? `/blog/${ path }/${ totalPage }` : '#' }><a><PaginateLastVect /></a></Link>
                </li>
            </ul>            
        </Container>
    )
}
/* ------------------ End NavPaginate ------------------ */

/* ------------------ Read ------------------ */
const Read = ({ data, daftar }) => {
    const { locale } = useRouter()
    return ( 
        <Container id={ styles.Read } normalPadding paddingTop='64' paddingBottom='60'>
            <Article title={ data.title } cover={ `/article/${ data.photo }` } creator={ data.creator } date={ data.date }>
                <>{ Parse(data.content) }</>
                <Button href={ daftar.url } fontSize='md-3' textColor='white' backgroundColor='green-60'>{ daftar[locale] }</Button>
            </Article>    
        </Container>
    )
}
/* ------------------ End Read ------------------ */

export default { Heading, ArticleTop, ListType1, ListType2, Devider, LoadMore, Breadcrumb, Search, NavPaginate, Read }