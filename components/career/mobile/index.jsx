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
        {data.job_requirements}
        {/* <ul>
          <li>Minimum 2 years of hands-on experience in designing, developing, testing, and deploying front end applications in React JS.</li>
          <li>Ability to work with clean code and good design practice.</li>
          <li>Understand Typescript, Next JS, Tailwind, Redux persist, and Native Js.</li>
          <li>Understand cloud service and version control systems like Git.</li>
          <li>Understand the latest UI/UX trend is considered an added value.</li>
          <li>Ability to generate a user interface aligned with the UI/UX design.</li>
        </ul> */}
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Responsibilities:</h3>
        {/* <ul>
          <li>Design and develop the frontend using React JS as the framework.</li>
          <li>Be responsible for the overall delivery and the solution architecture of the feature your team will be working on.</li>
          <li>Show initiatives and ownership of the product.</li>
          <li>Provide mentorship and learn from other experiences and mistakes.</li>
          <li>Be responsible for the growth and happiness of your team members.</li>
        </ul> */}
      </div>
      <div className={styles.wrapper_content_career_mobile_job_desc}>
        <h3 className={styles.wrapper_content_career_mobile_job_desc_title}>Benefit:</h3>
        {data.job_benefits}
        {/* <ul>
          <li>BPJS</li>
          <li>Assurance</li>
          <li>Bonus</li>
        </ul> */}
      </div>
    </div>
    <button className={styles.register_now}><a href={data.job_link_url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Daftar Sekarang</a></button>
  </>
)

CareerDetailMobileView.propTypes = {}

export default CareerDetailMobileView