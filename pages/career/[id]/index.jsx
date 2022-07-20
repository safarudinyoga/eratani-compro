import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import CareerDetailWebContent from '../../../components/career/web'
import CareerDetailMobileContent from '../../../components/career/mobile'
import styles from './career_detail.module.sass'

// utils
import useWindowDimensions from 'hooks/useWindowDimensions'

export async function getServerSideProps({ params }) {
  const id = params.id

  try {
    const careerResponse = await (await fetch(`https://compro-api.eratani.co.id/api/jobs/url/${id}`)).json()

    return {
      props: {
        careerDetail: careerResponse.data || null
      }
    }
  } catch (error) {
    return { careerDetail: null }
  }
}

const CareerDetail = ({ careerDetail }) => {
  const router = useRouter()
  const { width } = useWindowDimensions();
  const deviceWidth = width > 546 ? (width > 900 ? 'large' : 'medium') : 'small'

  const remapData = {
    ...careerDetail,
    job_requirements: careerDetail.job_requirements.split('</p>')[0]
      .replace(/(<([^>]+)>)/gi, " ")
      .replace('&nbsp;', " ")
      .trim()
      .replace(/\s+/g, " "),
    job_benefits: careerDetail.job_benefits.split('</p>')[0]
      .replace(/(<([^>]+)>)/gi, " ")
      .replace('&nbsp;', " ")
      .trim()
      .replace(/\s+/g, " "),
    job_day: new Date(careerDetail.job_application_deadline).toLocaleDateString('default', { day: 'numeric' }),
    job_month: new Date(careerDetail.job_application_deadline).toLocaleDateString('default', { month: 'long' }),
    job_year: new Date(careerDetail.job_application_deadline).toLocaleDateString('default', { year: 'numeric' })
  }

  return (
    <div className={styles.container_careerdetail}>
      { deviceWidth !== undefined && deviceWidth !== 'small' ?
        <CareerDetailWebContent router={router} data={remapData} /> :
        <CareerDetailMobileContent router={router} data={remapData} />
      }
    </div>
  )
}

CareerDetail.propTypes = {}

export default CareerDetail