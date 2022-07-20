import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

// compoenents & styles
import styles from './detail_event.module.sass'
import Breadcrumb from 'components/breadcrumb'
import Fb from '../../../assets/vector/fb.svg'
import Twitter from '../../../assets/vector/twitter.svg'
import Whatsapp from '../../../assets/vector/whatsapp.svg'
import Link from '../../../assets/vector/link.svg'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

export async function getServerSideProps({ params }) {
  const id = params.id

  try {
    const eventResponse = await (await fetch(`https://compro-api.eratani.co.id/api/events/url/${id}`)).json()

    return {
      props: {
        eventDetail: eventResponse.data || null
      }
    }
  } catch (error) {
    return { eventDetail: null }
  }
}

const EventDetail = ({ eventDetail }) => {
  const router = useRouter()
  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  const remapData = {
    ...eventDetail,
    event_image: eventDetail?.event_image || '/dummy.png',
    event_article: eventDetail.event_article
      .split('</p>')[0]
      .replace(/(<([^>]+)>)/gi, " ")
      .replace('&nbsp;', " ")
      .trim()
      .replace(/\s+/g, " ") || 'Tidak ada Konten',
    event_start_day: new Date(eventDetail.event_start).toLocaleDateString('default', { day: 'numeric' }),
    event_start_month: new Date(eventDetail.event_start).toLocaleDateString('default', { month: 'long' }),
    event_start_year: new Date(eventDetail.event_start).toLocaleDateString('default', { year: 'numeric' })
  }

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
            <img
              src={remapData.event_image}
              className={styles.img}
              alt='alt'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src =
                  '/dummy.png'
              }}
            />
            <h2 className={styles.title}>{remapData.event_title}</h2>
            <h4 className={styles.article_date}>{`Eratani / ${remapData.event_start_day} ${remapData.event_start_month} ${remapData.event_start_year}`}</h4>
          </> :
          <>
            <h2 className={styles.title}>{remapData.event_title}</h2>
            <h4 className={styles.article_date}>{`Eratani / ${remapData.event_start_day} ${remapData.event_start_month} ${remapData.event_start_year}`}</h4>
            <img
              src={remapData.event_image}
              className={styles.img}
              alt='alt'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src =
                  '/dummy.png'
              }}
            />
          </>
        }
        <h4 className={styles.article}>
          {remapData.event_article}
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