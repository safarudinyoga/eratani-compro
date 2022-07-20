import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// components & styles
import styles from './event.module.sass'

// utils

export async function getServerSideProps(context) {
  try {
    const eventResponse = await (await fetch('https://compro-api.eratani.co.id/api/events')).json()

    return {
      props: {
        eventData: eventResponse.data || []
      }
    }
  } catch (error) {
    return {
      props: {
        eventData: []
      }
    }
  }
}

const content = {
  title: {
    en: 'Coming Next',
    id: 'Akan Datang'
  },
  desc: {
    en: 'Let’s participate in Eratani’s events by registering for these upcoming activities.',
    id: 'Mari berpartisipasi pada kegiatan Eratani dengan mendaftar pada kegiatan-kegiatan di bawah ini.'
  },
  button: {
    en: 'See Details',
    id: 'Lihat Detil'
  },
  pagination: {
    en: 'See More',
    id: 'Lihat Lebih Banyak'
  }
}

const CardAgenda = ({ data, locale }) => (
  <div className={`col-xs-12 col-md-6 col-lg-4`}>
    <div className={styles.card}>
      <div className={styles.date_wrap}>
        <h3 className={styles.date_dd}>{data.event_start_day}</h3>
        <h5 className={styles.date_mm_yyyy}>{`${data.event_start_month} ${data.event_start_year}`}</h5>
      </div>
      <div className={styles.image_wrap}>
        <img
          src={data.event_image}
          className={styles.img}
          alt='alt'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src =
              '/dummy.png'
          }}
        />
      </div>
      <div className={styles.card_desc}>
        <h5 className='bold left-align c-green-60' style={{ marginBottom: '15px' }}>{data.event_title || ''}</h5>
        <h6 className={styles.desc}>{data.event_article || ''}</h6>
      </div>
      <div className={styles.divider} />
      <div className={styles.place}>
        <div style={{ maxWidth: '50%' }}>
          <h4 className={styles.place_title}>{data.event_location_title || ''}</h4>
          <h4 className={styles.place_desc}>{data.event_location_subtitle || ''}</h4>
        </div>
        <Link href={`/event/${data.event_url}`}>
          <button className={styles.button_detail}>{content.button[locale]}</button>
        </Link>
      </div>
    </div>
  </div>
)

const Agenda = ({ eventData }) => {
  const { locale } = useRouter()

  const [ expand, setExpand ] = useState(1)
  const [ data, setData ] = useState(eventData.map(res => ({
    ...res,
    event_image: res.event_image || '/dummy.png',
    event_article: res.event_article
      .split('</p>')[0]
      .replace(/(<([^>]+)>)/gi, " ")
      .replace('&nbsp;', " ")
      .trim()
      .replace(/\s+/g, " "),
    event_start_day: new Date(res.event_start).toLocaleDateString('default', { day: 'numeric' }),
    event_start_month: new Date(res.event_start).toLocaleDateString('default', { month: 'long' }),
    event_start_year: new Date(res.event_start).toLocaleDateString('default', { year: 'numeric' })
  })).slice(0, 6))

  const handleExpand = (expandedCount) => {
    setExpand(expandedCount)
    setData(eventData.map(res => ({
      ...res,
      event_image: res.event_image || '/dummy.png',
      event_article: res.event_article
        .split('</p>')[0]
        .replace(/(<([^>]+)>)/gi, " ")
        .replace('&nbsp;', " ")
        .trim()
        .replace(/\s+/g, " "),
      event_start_day: new Date(res.event_start).toLocaleDateString('default', { day: 'numeric' }),
      event_start_month: new Date(res.event_start).toLocaleDateString('default', { month: 'long' }),
      event_start_year: new Date(res.event_start).toLocaleDateString('default', { year: 'numeric' })
    })).slice(0, expandedCount))
  }

  return (
    <section className={styles.event}>
      <h3 className={styles.title_page} style={{ marginBottom: '15px' }}>{content.title[locale]}</h3>
      <h4 className={styles.sub_title}>{content.desc[locale]}</h4>
      <div className={`row ${styles.wrapper_event}`}>
        {data.map((data, i) =>
          <CardAgenda key={i} data={data} locale={locale} />
        )}
      </div>
      <button className={styles.button_more} style={{ display: eventData.length > 6 && eventData.length > (expand * 6) ? 'block' : 'none' }} onClick={() => handleExpand((expand+1) * 6)}>{content.pagination[locale]}</button>
    </section>
  )
}

Agenda.propTypes = {}

export default Agenda