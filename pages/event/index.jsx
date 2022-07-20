import Link from 'next/link'
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

const CardAgenda = ({ id, data }) => (
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
        <h5 className='bold left-align c-green-60' style={{ marginBottom: '15px' }}>{data.event_title}</h5>
        <h6 className={styles.desc}>{data.event_article}</h6>
      </div>
      <div className={styles.divider} />
      <div className={styles.place}>
        <div style={{ maxWidth: '50%' }}>
          <h4 className={styles.place_title}>Kecamatan Cantigi</h4>
          <h4 className={styles.place_desc}>Indramayu, Jawa Barat</h4>
        </div>
        <Link href={`/event/${data.event_url}`}>
          <button className={styles.button_detail}>Lihat Detail</button>
        </Link>
      </div>
    </div>
  </div>
)

const Agenda = ({ eventData }) => {
  const date = new Date

  const remapData = eventData.map(res => ({
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
  }))

  return (
    <section className={styles.event}>
      <h3 className={styles.title_page} style={{ marginBottom: '15px' }}>Akan Datang</h3>
      <h4 className={styles.sub_title}>Ayo ikuti kegiatan Eratani dengan mendaftar pada kegiatan-kegiatan dibawah ini.</h4>
      <div className={`row ${styles.wrapper_event}`}>
        {remapData.map((data, i) =>
          <CardAgenda key={i} id={i} data={data} />
        )}
      </div>
      <button className={styles.button_more} style={{ display: eventData.length > 6 ? 'block' : 'none' }}>Lihat Lebih Banyak</button>
    </section>
  )
}

Agenda.propTypes = {}

export default Agenda