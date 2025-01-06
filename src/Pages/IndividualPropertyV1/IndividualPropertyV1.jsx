import React from 'react'
import Head from '../../Components/Common/Head'
import SectionPropertyImage from '../../Components/IndividualPropertyV1/ImageSection'
import InidividualDetails from '../../Components/IndividualPropertyV1/inidividualDetails'
import SectionOpinion from '../../Components/IndividualPropertyV1/SectionOpinion'

const IndividualPropertyV1 = () => {
  return (
    <div>
       <Head/>
        <SectionPropertyImage/>
        <InidividualDetails/>
        <SectionOpinion/>
    </div>
  )
}

export default IndividualPropertyV1