import React from 'react'
import PropTypes from 'prop-types'
import Star from '../../../assets/vector/star_outline.svg'
import Place from '../../../assets/vector/place.svg'
import styles from '../../../pages/career/[id]/career_detail.module.sass'

const CareerDetailMobileView = ({ router, data }) => (
  <>
    <div className={styles.navigation_mobile}>
      <div className={styles.wrapper_circle} onClick={() => router.back()}>
        <i className="fas fa-angle-left"></i>
      </div>
      <h4 className={styles.navigation_mobile_title}>Detil Pekerjaan</h4>
    </div>
    <div className={styles.wrapper_content_career_mobile}>
      <h4 className={styles.wrapper_content_career_mobile_title}>{data.job_title}</h4>
      <h5 className={styles.wrapper_content_career_mobile_category}>{data.job_category}</h5>
      <div className={styles.wrapper_content_career_mobile_wrapper_job_desc} style={{ marginBottom: '12px' }}>
        <Star />
        <h5 className={styles.wrapper_content_career_mobile_wrapper_job_desc_text}>{`${data.job_experience} tahun pengalaman`}</h5>
      </div>
      <div className={styles.wrapper_content_career_mobile_wrapper_job_desc} style={{ marginBottom: '20px' }}>
        <Place />
        <h5 className={styles.wrapper_content_career_mobile_wrapper_job_desc_text}>{data.job_location}</h5>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_type}>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Job Level</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>{data.job_level}</h4>
        </div>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Type</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>{data.job_type}</h4>
        </div>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Batas Waktu</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>{`${data.job_day} ${data.job_month} ${data.job_year}`}</h4>
        </div>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Requirements:</h3>
        <div dangerouslySetInnerHTML={{ __html: data.job_requirements }}></div>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Responsibilities:</h3>
        <div dangerouslySetInnerHTML={{ __html: data.job_responsibilities }}></div>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Benefit:</h3>
        <div dangerouslySetInnerHTML={{ __html: data.job_benefits }}></div>
      </div>
    </div>
    <button className={styles.register_now}><a href={data.job_link_url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Daftar Sekarang</a></button>
  </>
)

CareerDetailMobileView.propTypes = {}

export default CareerDetailMobileView