import React from 'react'
import PropTypes from 'prop-types'
import Star from '../../../assets/vector/star_outline.svg'
import Place from '../../../assets/vector/place.svg'
import styles from '../../../pages/career/[id]/career_detail.module.sass'

const CareerDetailWebview = ({ router, data }) => (
  <>
    <div className={styles.navigation}>
      <h4>Detil Pekerjaan</h4>
      <button className={styles.back_button}  onClick={() => router.back()}><i className="fas fa-arrow-left" style={{ color: '#055C46', marginRight: '15px' }}/>Kembali</button>
    </div>
    <div className={styles.wrapper_content_career}>
      <div className={`${styles.wrapper_content_career_first}`}>
        <h4 className={styles.job_title}>{data.job_title}</h4>
        <h4 className={styles.job_category}>{data.job_category}</h4>
        <div className={styles.wrapper_job_desc} style={{ marginBottom: '10px' }}>
          <Star />
          <h5 className={`${styles.wrapper_job_desc_text}`}>
            {`${data.job_experience} tahun pengalaman`}
          </h5>
        </div>
        <div className={styles.wrapper_job_desc} style={{ marginBottom: '40px' }}>
          <Place />
          <h5 className={`${styles.wrapper_job_desc_text}`}>
            {data.job_location || '-'}
          </h5>
        </div>
        <div className={styles.wrapper_job_level}>
          <h4 className={styles.wrapper_job_level_title}>Job Level</h4>
          <h4 className={styles.wrapper_job_level_desc}>{data.job_level}</h4>
        </div>
        <div className={styles.wrapper_job_type}>
          <div>
            <h4 className={styles.wrapper_job_type_title}>Tipe</h4>
            <h4 className={styles.wrapper_job_type_desc} style={{ width: '80%' }}>{data.job_type}</h4>
          </div>
          <div >
            <h4 className={styles.wrapper_job_type_title}>Batas Waktu</h4>
            <h4 className={styles.wrapper_job_type_desc}>{`${data.job_day} ${data.job_month} ${data.job_year}`}</h4>
          </div>
        </div>
        <button className={styles.register_now}><a href={data.job_link_url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Daftar Sekarang</a></button>
      </div>
      <div className={`${styles.wrapper_content_career_second}`}>
        <div>
          <h3 className={`${styles.wrapper_content_career_second_title}`}>
            Requirements:
          </h3>
          <div dangerouslySetInnerHTML={{ __html: data.job_requirements }}></div>
        </div>
        <div>
          <h3 className={`${styles.wrapper_content_career_second_title}`}>
            Responsibilities:
          </h3>
          <div dangerouslySetInnerHTML={{ __html: data.job_responsibilities }}></div>
        </div>
        <div>
          <h3 className={`${styles.wrapper_content_career_second_title}`}>
            Benefit:
          </h3>
          <div dangerouslySetInnerHTML={{ __html: data.job_benefits }}></div>
        </div>
      </div>
    </div>
  </>
)

CareerDetailWebview.propTypes = {}

export default CareerDetailWebview