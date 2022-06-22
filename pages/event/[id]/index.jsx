import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

// compoenents & styles
import styles from './detail_event.module.sass'
import Breadcrumb from 'components/breadcrumb'
import Fb from '../../../assets/svgs/fb.svg'
import Twitter from '../../../assets/svgs/twitter.svg'
import Whatsapp from '../../../assets/svgs/whatsapp.svg'
import Link from '../../../assets/svgs/link.svg'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

const EventDetail = props => {
  const router = useRouter()
  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  const nav = [
    {
      link: router,
      name: 'Agenda'
    },
    {
      link: '',
      name: router.query.id
    }
  ]

  return (
    <div className={styles.container_eventdetail}>
      <Breadcrumb nav={nav} />
      <div className={styles.eventdetail}>
        {deviceWidth === 'small' ?
          <>
            <img src='https://statik.tempo.co/data/2020/11/25/id_983211/983211_720.jpg' className={styles.img} alt='alt' />
            <h2 className={styles.title}>Grand Launching Eratani Mobile-Apps untuk Petani Indonesia</h2>
            <h4 className={styles.article_date}>Eratani / 12 Mei 2022</h4>
          </> :
          <>
            <h2 className={styles.title}>Grand Launching Eratani Mobile-Apps untuk Petani Indonesia</h2>
            <h4 className={styles.article_date}>Eratani / 12 Mei 2022</h4>
            <img src='https://statik.tempo.co/data/2020/11/25/id_983211/983211_720.jpg' className={styles.img} alt='alt' />
          </>
        }
        <h4 className={styles.article}>
          Halo Sobat Eratani!

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque elit lorem nunc nibh porttitor posuere lorem vehicula. Vitae natoque tincidunt viverra vulputate morbi aliquet. Tristique urna tristique risus natoque in. Gravida praesent faucibus bibendum nisi, in leo. Pretium at nunc et, ac nullam risus parturient tortor massa. Viverra nunc ipsum etiam imperdiet ultrices amet vivamus elementum mattis. Quis morbi sit varius morbi fusce in purus. Mauris, morbi vestibulum sed enim dignissim tellus vestibulum, in. At a gravida auctor tellus arcu auctor. Imperdiet eget leo amet lectus nibh. Pharetra dis molestie tellus nisl, sit nisi id nisl eget.

          Lectus elit suscipit nullam et, placerat. Massa amet sit ultrices dictumst sapien. A interdum dui, egestas leo, gravida. Sagittis nulla proin id mauris turpis consectetur. Velit vel congue sit volutpat sit. Tincidunt non faucibus urna diam.

          Amet purus in velit lacus, nullam in quam. Scelerisque ipsum hac varius morbi nunc. Quis arcu elit consectetur montes, accumsan. Nulla quis in cras imperdiet lectus. Scelerisque ut posuere nulla fermentum ut ut eu, sit. Varius sed varius sit a. Magna orci vestibulum enim elit dis. Enim a, consectetur gravida risus mattis sagittis dui ultrices. Tincidunt elit vulputate varius sed eu bibendum. Mi, mauris amet vitae urna lorem ut curabitur. Leo morbi elementum mi rhoncus, varius bibendum phasellus tellus.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque elit lorem nunc nibh porttitor posuere lorem vehicula. Vitae natoque tincidunt viverra vulputate morbi aliquet. Tristique urna tristique risus natoque in. Gravida praesent faucibus bibendum nisi, in leo. Pretium at nunc et, ac nullam risus parturient tortor massa. Viverra nunc ipsum etiam imperdiet ultrices amet vivamus elementum mattis. Quis morbi sit varius morbi fusce in purus. Mauris, morbi vestibulum sed enim dignissim tellus vestibulum, in. At a gravida auctor tellus arcu auctor. Imperdiet eget leo amet lectus nibh. Pharetra dis molestie tellus nisl, sit nisi id nisl eget.

          Lectus elit suscipit nullam et, placerat. Massa amet sit ultrices dictumst sapien. A interdum dui, egestas leo, gravida. Sagittis nulla proin id mauris turpis consectetur. Velit vel congue sit volutpat sit. Tincidunt non faucibus urna diam.

          Amet purus in velit lacus, nullam in quam. Scelerisque ipsum hac varius morbi nunc. Quis arcu elit consectetur montes, accumsan. Nulla quis in cras imperdiet lectus. Scelerisque ut posuere nulla fermentum ut ut eu, sit. Varius sed varius sit a. Magna orci vestibulum enim elit dis. Enim a, consectetur gravida risus mattis sagittis dui ultrices. Tincidunt elit vulputate varius sed eu bibendum. Mi, mauris amet vitae urna lorem ut curabitur. Leo morbi elementum mi rhoncus, varius bibendum phasellus tellus.
        </h4>
        <button className={styles.button_daftar_petani}>Daftar sebagai Petani</button>
        <div className={styles.share}>
          <h5 className='bold c-natural-50'>Bagikan Postingan Ini</h5>
          <div className={styles.wrapper_icon}>
            <Whatsapp className={styles.icon} />
            <Fb className={styles.icon} />
            <Twitter className={styles.icon} />
            <Link className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

EventDetail.propTypes = {}

export default EventDetail