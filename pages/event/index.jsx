// import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// components & styles
import styles from './event.module.sass'

// utils

const CardAgenda = ({ id }) => (
  <div className={`col-xs-12 col-md-6 col-lg-4`}>
    <div className={styles.card}>
      <img src='https://statik.tempo.co/data/2020/11/25/id_983211/983211_720.jpg' className={styles.img} alt='alt' />
      <div className={styles.card_desc}>
        <h5 className='regular left-align c-green-60' style={{ marginBottom: '15px' }}>Panen Raya Cantigi</h5>
        <h6 className={styles.desc}>Panen Raya adalah acara tahunan yang dilaksanakan oleh petani - petani di seluruh daerah seperti halnya di Kecamatan Cantigi, Indramayu, Jawa Barat ini. Acara ini akan dihadiri oleh Menteri Pertanian Republik Indonesia Bapak Syahrul Yasin Limpo ...</h6>
      </div>
      <div className={styles.divider} />
      <div className={styles.place}>
        <div>
          <h4 className={styles.place_title}>Kecamatan Cantigi</h4>
          <h4 className={styles.place_desc}>Indramayu, Jawa Barat</h4>
        </div>
        <Link href={`/event/${id}`}>
          <button className={styles.button_detail}>Lihat Detail</button>
        </Link>
      </div>
    </div>
  </div>
)

const Agenda = props => {
  return (
    <section className={styles.agenda}>
      <h3 className='bold center-align c-green-70' style={{ marginBottom: '15px' }}>Akan Datang</h3>
      <h4 className={styles.sub_title}>Ayo ikuti kegiatan Eratani dengan mendaftar pada kegiatan-kegiatan dibawah ini.</h4>
      <div className={`row ${styles.wrapper_agenda}`}>
        {[1,2,3,4,5,6].map((res, i) =>
          <CardAgenda key={i} id={i} />
        )}
      </div>
      <button className={styles.button_more}>Lihat Lebih Banyak</button>
    </section>
  )
}

Agenda.propTypes = {}

export default Agenda