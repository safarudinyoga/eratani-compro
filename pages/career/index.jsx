import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// components & styles
import ImportExport from '../../assets/svgs/import_export.svg'
import Filter from '../../assets/svgs/filter.svg'
import Star from '../../assets/svgs/star_outline.svg'
import Place from '../../assets/svgs/place.svg'
import styles from './career.module.sass'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

const CardCareer = ({ id, deviceWidth }) => (
  <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
    <div className={`${styles.box_career}`}>
      <h4 className={styles.title_job}>
        Accounting Internal
      </h4>
      <h4 className={styles.desc_job}>
        Finance & Accounting
      </h4>
      <div className={styles.wrapper_career_info} style={{ marginBottom: deviceWidth === 'small' ? '24px' : '35px' }}>
        <div>
          <h4 className={styles.title}>Job Level</h4>
          <h4 className={styles.desc}>Mid Level</h4>
        </div>
        <div>
          <h4 className={`${styles.title} center-align`}>Job Level</h4>
          <h4 className={`${styles.desc} center-align`}>Mid Level</h4>
        </div>
        <div>
          <h4 className={styles.title}>Batas Waktu</h4>
          <h4 className={styles.desc}>13 Mei 2022</h4>
        </div>
      </div>
      <div className={styles.wrapper_career_info} style={{ marginBottom: deviceWidth === 'small' ? '24px' : '25px' }}>
        <div className={styles.wrapper_year}>
          <Star />
          <h5 className={styles.title_wrapper_year} style={{ width: '50%' }}>
            1 tahun pengalaman
          </h5>
        </div>
        <div className={styles.wrapper_year}>
          <Place />
          <h5 className={styles.title_wrapper_year}>
            Jakarta, Indonesia
          </h5>
        </div>
      </div>
      {deviceWidth === 'small' && <div className={styles.divider} />}
      <Link href={`/career/${id}`}>
        <button className={styles.career_button_detail}>Lihat Detil</button>
      </Link>
    </div>
  </div>
)

const Career = props => {

  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  return (
    <section className={styles.career}>
      {deviceWidth === 'small' ?
        <h4 className={styles.title_career}>Karir</h4> :
        <h3 className='bold center-align c-green-70'>Bergabung Menjadi EraFam</h3>
      }
      <h4 className={styles.sub_title}>Ayo bergabung bersama kami mewujudkan ekosistem yang sehat dari hulu sampai hilir untuk pertanian Indonesia.</h4>
      {deviceWidth !== 'small' && <div className={styles.career_search}>
        <div className={styles.search}>
          <span><i className="fas fa-search"/></span>
          <input type="text" name="" id="" placeholder='Cari pekerjaan disini' />
        </div>
        <div className={styles.box}>
          <Filter />
        </div>
        <div className={styles.box}>
          <ImportExport />
        </div>
      </div>}
      <div className={styles.wrapper_box_career}>
        {[1,2,3,4,5,6].map((res, i) =>
          <CardCareer key={i} id={i} deviceWidth={deviceWidth} />
        )}
      </div>
      <button className={styles.button_more}>Lihat Lebih Banyak</button>
    </section>
  )
}

Career.propTypes = {}

export default Career