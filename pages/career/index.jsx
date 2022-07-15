import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router';

// components & styles
import ImportExport from '../../assets/vector/import_export.svg'
import Filter from '../../assets/vector/filter.svg'
import Star from '../../assets/vector/star_outline.svg'
import Place from '../../assets/vector/place.svg'
import styles from './career.module.sass'
import Typograph from '/components/custom/Typograph'
import NextVect from '/assets/vector/paginate-next.svg'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

const CardCareer = ({ id, deviceWidth }) => (
  <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4 ${styles.reset_box}`}>
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
  const { locale } = useRouter()
  const [filter, setFilter] = useState('semua')

  const filterContent = [
    {
        name: 'semua',
        id: 'Semua',
        en: 'Semua'
    },
    {
        name: 'finance_accounting',
        id: 'Finance & Accounting',
        en: 'Finance & Accounting'
    },
    {
        name: 'product_design',
        id: 'Product & Design',
        en: 'Product & Design'
    },
    {
        name: 'tech_development',
        id: 'Technology & Development',
        en: 'Technology & Development'
    },
    {
        name: 'hr',
        id: 'Human Resources',
        en: 'Human Resources'
    },
    {
      name: 'farmer_acquisition',
      id: 'Farmer Acquisition',
      en: 'Farmer Acquisition'
    }
  ]
  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  return (
    <section className={styles.career} id={ styles.Career }>
      {deviceWidth === 'small' ?
        <h4 className={styles.title_career}>Karir</h4> :
        <h3 className='bold center-align c-green-70'>Bergabung Menjadi EraFam</h3>
      }
      <h4 className={styles.sub_title}>Ayo bergabung bersama kami mewujudkan ekosistem yang sehat dari hulu sampai hilir untuk pertanian Indonesia.</h4>
      {deviceWidth !== 'small' && (
        <>
          <div className={styles.career_search}>
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
          </div>
          {/* !nitip masbur */}
          {/* <div className={ `row no-margin middle-xs center-xs ${ styles.filter }` }>
            <a href='#'><NextVect className='flip-x'/></a>
            <div className={ styles.filter_cat }>
              <div className='row no-margin between-xs'>
                { filterContent.map((f, index) =>
                  <Typograph key={ index } tag='a' href='#' size='sm-2' weight='bold' align='center' onClick={ () => setFilter(f.name) } className={ (filter == f.name) ? styles.active : undefined }>{ f[locale] }</Typograph>
                ) }
              </div>
            </div>
            <a href='#'><NextVect /></a>
          </div> */}
        </>
      )}
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