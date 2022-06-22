import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.sass'

export default function Layout ({ children }) {
    return (
        <section className={ styles.pagescroll }>
            <Header />
            <main>{ children }</main>
            <Footer />
        </section>
    )
}