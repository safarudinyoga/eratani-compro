import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.sass'

export default function Layout ({ children }) {
    return (
        <>
            <Header />
            <section className={ styles.pagescroll }>
                <main>{ children }</main>
                <Footer />
            </section>
        </>
    )
}