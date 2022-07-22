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
import { globalText } from 'utils/globalText'

export async function getServerSideProps({ params }) {
  const id = params.id

  try {
    const eventResponse = await (await fetch(`https://compro-api.eratani.co.id/api/events/url/${id}`)).json()

    return {
      props: {
        eventDetail: eventResponse.data || null,
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

  const origin =
    typeof window !== 'undefined' && window.location.origin
        ? `${window.location.origin}${router.asPath}`
        : '';

  console.log(origin);

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
          <h5 className='bold c-natural-50'>{globalText.share[router.locale]}</h5>
          <div className={styles.wrapper_icon}>
            <a href={`https://wa.me?text=${encodeURIComponent(origin)}`} target="_blank" rel="noopener noreferrer">
              <Whatsapp className={styles.icon} />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Fb className={styles.icon} />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Twitter className={styles.icon} />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Link className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

EventDetail.propTypes = {}

export default EventDetail