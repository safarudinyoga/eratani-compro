import Head from 'next/head'
import '../styles/flexboxgrid.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/Base.sass'
import Layout from '../components/layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible" content="IE=edge' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      </Head>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </>
  ) 
}
