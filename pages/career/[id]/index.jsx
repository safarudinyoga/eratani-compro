import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import styles from './career_detail.module.sass'

const CareerDetail = props => {
  const router = useRouter()

  return (
    <div className={styles.container_careerdetail}>
      <div className={styles.navigation}>
        <h4>Detil Pekerjaan</h4>
        <button className={styles.back_button}><i className="fas fa-arrow-left" style={{ color: '#055C46', marginRight: '15px' }}/>Kembali</button>
      </div>
    </div>
  )
}

CareerDetail.propTypes = {}

export default CareerDetail