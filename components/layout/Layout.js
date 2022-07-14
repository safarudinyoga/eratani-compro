import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.sass'

export default function Layout ({ children }) {
    return (
        <main className={ styles.pagescroll }>
            <Header />
            { children }
            <Footer />
        </main>
    )
}