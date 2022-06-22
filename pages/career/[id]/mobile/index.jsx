import React from 'react'
import PropTypes from 'prop-types'
import Star from '../../../../assets/svgs/star_outline.svg'
import Place from '../../../../assets/svgs/place.svg'
import styles from '../career_detail.module.sass'

const CareerDetailMobileView = props => (
  <>
    <div className={styles.navigation_mobile}>
      <div className={styles.wrapper_circle}>
        <i className="fas fa-angle-left"></i>
      </div>
      <h4 className={styles.navigation_mobile_title}>Detil Pekerjaan</h4>
    </div>
    <div className={styles.wrapper_content_career_mobile}>
      <h4 className={styles.wrapper_content_career_mobile_title}>Front-End Engineer</h4>
      <h5 className={styles.wrapper_content_career_mobile_category}>Tech</h5>
      <div className={styles.wrapper_content_career_mobile_wrapper_job_desc} style={{ marginBottom: '12px' }}>
        <Star />
        <h5 className={styles.wrapper_content_career_mobile_wrapper_job_desc_text}>1 tahun pengalaman</h5>
      </div>
      <div className={styles.wrapper_content_career_mobile_wrapper_job_desc} style={{ marginBottom: '20px' }}>
        <Place />
        <h5 className={styles.wrapper_content_career_mobile_wrapper_job_desc_text}>Jakarta, Indonesia</h5>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_type}>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Job Level</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>Mid Level</h4>
        </div>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Type</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>Fulltime</h4>
        </div>
        <div>
          <h4 className={styles.wrapper_content_career_mobile_job_type_title}>Batas Waktu</h4>
          <h4 className={styles.wrapper_content_career_mobile_job_type_desc}>13 Mei 2022</h4>
        </div>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Requirements:</h3>
        <ul>
          <li>Minimum 2 years of hands-on experience in designing, developing, testing, and deploying front end applications in React JS.</li>
          <li>Ability to work with clean code and good design practice.</li>
          <li>Understand Typescript, Next JS, Tailwind, Redux persist, and Native Js.</li>
          <li>Understand cloud service and version control systems like Git.</li>
          <li>Understand the latest UI/UX trend is considered an added value.</li>
          <li>Ability to generate a user interface aligned with the UI/UX design.</li>
        </ul>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Responsibilities:</h3>
        <ul>
          <li>Design and develop the frontend using React JS as the framework.</li>
          <li>Be responsible for the overall delivery and the solution architecture of the feature your team will be working on.</li>
          <li>Show initiatives and ownership of the product.</li>
          <li>Provide mentorship and learn from other experiences and mistakes.</li>
          <li>Be responsible for the growth and happiness of your team members.</li>
        </ul>
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Benefit:</h3>
        <ul>
          <li>BPJS</li>
          <li>Assurance</li>
          <li>Bonus</li>
        </ul>
      </div>
    </div>
  </>
)

CareerDetailMobileView.propTypes = {}

export default CareerDetailMobileView