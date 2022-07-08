import Parse from 'html-react-parser'
import React, { useState, createRef, useEffect, Fragment } from 'react';
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
                <div className='col-xs-12 col-md-6 align-center align-left-md'>
                    <Typograph tag='h3' size='sm-1 md-1-sm lg-3-md' color='green-70'>{ title[locale] }</Typograph>
                    <Typograph tag='p' size='xsm-1 sm-1-sm md-3-md'>{ caption[locale] }</Typograph>
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div className={ `row no-margin center-xs start-md ${ styles.search }` }>
                        <Input type='text' className='col-xs' placeholder={ search.placeholder[locale] } model='1' />
                        <Button href='#' fontSize='sm-1' textColor='white' backgroundColor='green-60'><FindWhiteVect /><span>{ search.button[locale] }</span></Button>
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
                <Button href='#' fontSize='sm-1' textColor='white' backgroundColor='green-60'><FindWhiteVect /><span>{ button[locale] }</span></Button>
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
            <Typograph tag='h2' size='xsm-1 sm-1-sm md-3-md' weight='medium' color='natural-40'>{ title[locale] }</Typograph>
            <div className={ `row ${ styles.list }` }>
                <SetRatio ax='1.105' ay='1' className={ `${ styles.card } col-xs-12 col-md-8 col-lg-6 ${ styles.card_2x }` }>
                    <Link href={ `/blog/article/read/${ articleData.highlight.url }` }>
                        <a>
                            <div className={ styles.photo }>
                                <img src={ `/article/${ articleData.highlight.photo }` } width='100%' className='image-cover' />
                            </div>
                            <div className={ styles.caption }>
                                <div>
                                    <Typograph tag='h4' size='sm-2 md-1-sm' color='green-70'>{ articleData.highlight.title }</Typograph>
                                    <Ellipsis className={ `font-xsm-2 font-xsm-1-sm text-natural-50 align-justify` }>{ articleData.highlight.content }</Ellipsis>
                                </div>
                                <div className='row no-margin middle-xs between-xs'>
                                    <Typograph tag='h6' size='xsm-2 xsm-1-sm' color='natural-50'>{ articleData.highlight.creator } / { articleData.highlight.date }</Typograph>
                                    <EyeViewVect width='30' />
                                </div>
                            </div>
                        </a>
                    </Link>
                </SetRatio>
                <div className={ `${ styles.card } col-xs-12 col-lg-md-8 col-lg-6 ${ styles.card_2x_mobile }` }>
                    <Link href={ `/blog/article/read/${ articleData.highlight.url }` }>
                        <a>
                            <SetRatio ax='1.43' ay='1' className={ styles.photo }>
                                <img src={ `/article/${ articleData.highlight.photo }` } width='100%' className='image-cover' />
                            </SetRatio>
                            <div className={ styles.caption }>
                                <div>
                                    <Typograph tag='h4' size='sm-2' color='green-70'>{ articleData.highlight.title }</Typograph>
                                    <Ellipsis className={ `font-xsm-2 text-natural-50 align-justify` }>{ articleData.highlight.content }</Ellipsis>
                                </div>
                                <div className='row no-margin bottom-xs between-xs'>
                                    <Typograph tag='h6' size='xsm-2' weight='semibold' color='natural-50'>{ articleData.highlight.creator } / { articleData.highlight.date }</Typograph>
                                    <EyeViewVect width='22' />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='col-xs-12 col-md-4 col-lg-6'>
                    <div className='row'>
                        { articleData.topFour.map((item, index) => 
                            <Fragment key={ index }>
                                <SetRatio ax='1.07' ay='1' className={ `${ styles.card } col-xs-12 col-sm-6 col-md-12 col-lg-6 ${ styles.card_1x }` }>
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
                                                    <EyeViewVect width='22' />
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </SetRatio>
                                <SetRatio ax='2.54' ay='1' className={ `${ styles.card } col-xs-12 col-sm-6 ${ styles.card_1x_mobile }` }>
                                    <Link href={ `/blog/article/read/${ item.url }` }>
                                        <a>
                                            <div className={ styles.photo }>
                                                <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                            </div>
                                            <div className={ styles.caption }>
                                                <div>
                                                    <Typograph tag='h4' size='sm-2' color='green-70'>{ item.title }</Typograph>
                                                </div>
                                                <div className='row no-margin top-xs between-xs'>
                                                    <Typograph tag='h6' size='xsm-2' weight='semibold' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                                    <EyeViewVect width='22' />
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </SetRatio>
                            </Fragment>
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
            <Typograph tag='h4' size='xsm-1 sm-1-sm md-3-md' weight='medium' color='natural-40'>{ title[locale] }</Typograph>
            <div className={ `row ${ styles.list }` }>
                { listData.map((item, index) => 
                    <Fragment key={ index }>
                        <SetRatio ay='1.3' ax='1' className={ `${ styles.card } ${ styles.card_xv } col-xs-12 col-sm-6 col-lg-4` }>
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
                                            <EyeViewVect width='26' />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </SetRatio>
                        <div className={ `${ styles.card } ${ styles.card_xv_mobile } col-xs-6` }>
                            <Link href={ `/blog/${ path }/read/${ item.url }` }>
                                <a>
                                    <SetRatio ay='1.19' ax='1' className={ styles.photo }>
                                        <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                    </SetRatio>
                                    <div className={ styles.caption }>
                                        <div>
                                            <Typograph tag='h4' size='sm-2' color='green-70'>{ item.title }</Typograph>
                                        </div>
                                        <div className='row no-margin top-xs between-xs'>
                                            <Typograph tag='h6' size='xsm-2' weight='semibold' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                            <EyeViewVect width='22' />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </Fragment>
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
            <Typograph tag='h4' size='sm-1 md-1-sm lg-1-md' color='green-70'>{ title[locale] }</Typograph>
            <div className={ `row center-xs ${ styles.list }` }>
                { listData.map((item, index) => 
                    <Fragment key={ index }>
                        <SetRatio ay='1' ax='2' max='320' className={ `${ styles.card } ${ styles.card_xh } col-xs-8 col-md-6 align-left` }>
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
                                            <EyeViewVect width='22' />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </SetRatio>
                        <div className={ `${ styles.card } ${ styles.card_xv_mobile } col-xs-6 align-left` }>
                            <Link href={ `/blog/${ path }/read/${ item.url }` }>
                                <a>
                                    <SetRatio ay='1.19' ax='1' className={ styles.photo }>
                                        <img src={ `/article/${ item.photo }` } width='100%' className='image-cover' />
                                    </SetRatio>
                                    <div className={ styles.caption }>
                                        <div>
                                            <Typograph tag='h4' size='sm-2' color='green-70'>{ item.title }</Typograph>
                                        </div>
                                        <div className='row no-margin top-xs between-xs'>
                                            <Typograph tag='h6' size='xsm-2' weight='semibold' color='natural-50'>{ item.creator } / { item.date }</Typograph>
                                            <EyeViewVect width='22' />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </Fragment>
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
            <div>
                <Typograph tag='a' href='/blog' size='xsm-2 xsm-1-sm' color='natural-50'>Blog</Typograph>
                { links.map((link, index) => 
                    <span key={ index }>
                        <Typograph tag='p' size='xsm-2 xsm-1-sm' color='natural-50'>&nbsp;&nbsp;/&nbsp;&nbsp;</Typograph>
                        <Typograph tag='a' href={ link.url } size='xsm-1' weight={ ((index + 1) == links.length) ? 'bold' : 'regular' } color={ ((index + 1) == links.length) ? 'green-70' : 'natural-50' }>{ link.name }</Typograph>
                    </span>
                ) }
            </div>
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
                    <Link href={ (currentPage > 1) ? `/blog/${ path }/1` : '#' }><a className='flip-x'><PaginateLastVect height='16' /></a></Link>
                </li>
                <li>
                    <Link href={ (currentPage > 1) ? `/blog/${ path }/${ (currentPage - 1) }` : '#' }><a className='flip-x'><PaginateNextVect height='16' /></a></Link>
                </li>&nbsp;&nbsp;&nbsp;
                { Array.from(Array(totalPage), (e, index) => 
                    <li key={ index }>
                        <Typograph tag='a' href={ `/blog/${ path }/${ (index + 1) }` } size='xsm-1 md-1-md' color={ (currentPage == (index + 1)) ? 'white' : 'green-60' } weight='bold' className={ (currentPage == (index + 1)) ? 'bg-green-60' : '' }>{ (index + 1) }</Typograph>
                    </li>
                ) }&nbsp;&nbsp;&nbsp;
                <li>
                    <Link href={ (currentPage < totalPage) ? `/blog/${ path }/${ (currentPage + 1) }` : '#' }><a><PaginateNextVect height='16' /></a></Link>
                </li>
                <li>
                    <Link href={ (currentPage < totalPage) ? `/blog/${ path }/${ totalPage }` : '#' }><a><PaginateLastVect height='16'/></a></Link>
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
            <div>
                <Article title={ data.title } cover={ `/article/${ data.photo }` } creator={ data.creator } date={ data.date }>
                    <>{ Parse(data.content) }</>
                    <Button href={ daftar.url } fontSize='md-3' textColor='white' backgroundColor='green-60'>{ daftar[locale] }</Button>
                </Article>    
            </div>
        </Container>
    )
}
/* ------------------ End Read ------------------ */

export default { Heading, ArticleTop, ListType1, ListType2, Devider, LoadMore, Breadcrumb, Search, NavPaginate, Read }