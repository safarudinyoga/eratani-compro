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

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

export async function getServerSideProps(context) {
  try {
    const eventResponse = await (await fetch('https://compro-api.eratani.co.id/api/jobs')).json()

    return {
      props: {
        careerData: eventResponse.data || []
      }
    }
  } catch (error) {
    return {
      props: {
        careerData: []
      }
    }
  }
}

const CardCareer = ({ deviceWidth, data }) => (
  <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4 ${styles.reset_box}`}>
    <div className={`${styles.box_career}`}>
      <h4 className={styles.title_job}>
        {data.job_title}
      </h4>
      <h4 className={styles.desc_job}>
        {data.job_category}
      </h4>
      <div className={styles.wrapper_career_info} style={{ marginBottom: deviceWidth === 'small' ? '24px' : '35px' }}>
        <div>
          <h4 className={styles.title}>Job Level</h4>
          <h4 className={styles.desc}>{data.job_level}</h4>
        </div>
        <div>
          <h4 className={`${styles.title} center-align`}>Tipe</h4>
          <h4 className={`${styles.desc} center-align`}>{data.job_type}</h4>
        </div>
        <div>
          <h4 className={styles.title}>Batas Waktu</h4>
          <h4 className={styles.desc}>{`${data.job_day} ${data.job_month} ${data.job_year}`}</h4>
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
      <Link href={`/career/${data.job_url}`}>
        <button className={styles.career_button_detail}>Lihat Detil</button>
      </Link>
    </div>
  </div>
)

const Career = ({ careerData }) => {
  const { locale } = useRouter()
  // const [ filter, setFilter ] = useState('semua')

  const remapData = careerData.map(res => ({
    ...res,
    job_day: new Date(res.job_application_deadline).toLocaleDateString('default', { day: 'numeric' }),
    job_month: new Date(res.job_application_deadline).toLocaleDateString('default', { month: 'long' }),
    job_year: new Date(res.job_application_deadline).toLocaleDateString('default', { year: 'numeric' })
  }))

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
        <h3 className={styles.title_career}>Bergabung Menjadi EraFam</h3>
      }
      <h4 className={styles.sub_title}>Ayo bergabung bersama kami mewujudkan ekosistem yang sehat dari hulu sampai hilir untuk pertanian Indonesia.</h4>
      {deviceWidth !== 'small' && (
        <>
          <div className={styles.career_search}>
            <div className={styles.search}>
              <span><i className="fas fa-search"/></span>
              <input type="text" name="" id="" placeholder='Cari pekerjaan disini' />
            </div>
            {/* <div className={styles.box}>
              <Filter />
            </div>
            <div className={styles.box}>
              <ImportExport />
            </div> */}
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
        {remapData.map((data, i) =>
          <CardCareer key={i} deviceWidth={deviceWidth} data={data} />
        )}
      </div>
      <button className={styles.button_more} style={{ display: careerData.length > 6 ? 'block' : 'none' }}>Lihat Lebih Banyak</button>
    </section>
  )
}

Career.propTypes = {}

export default Career