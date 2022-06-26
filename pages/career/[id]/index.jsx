import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import CareerDetailWebContent from './web'
import CareerDetailMobileContent from './mobile'
import styles from './career_detail.module.sass'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

const CareerDetail = props => {
  const router = useRouter()
  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  return (
    <div className={styles.container_careerdetail}>
      { deviceWidth !== undefined && deviceWidth !== 'small' ?
        <CareerDetailWebContent /> :
        <CareerDetailMobileContent />
      }
    </div>
  )
}

CareerDetail.propTypes = {}

export default CareerDetail