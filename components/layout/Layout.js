import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.sass'
import { createRef, useEffect, useRef } from 'react'

export default function Layout ({ children }) {

    const scrollRef = createRef()

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0)
    })

    return (
        <main ref={ scrollRef } className={ styles.pagescroll }>
            <Header />
            { children }
            <Footer />
        </main>
    )
}