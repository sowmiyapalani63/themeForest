import React from 'react'
import SectionPropertyImage from '../../Components/IndividualPropertyV2/ImageSection'
import InidividualDetails from '../../Components/IndividualPropertyV1/inidividualDetails'
import SectionOpinion from '../../Components/IndividualPropertyV1/SectionOpinion'

const IndividualPropertyV2 = () => {
  return (
    <div>
        <SectionPropertyImage/>
        <InidividualDetails/>
        <SectionOpinion/>
    </div>
  )
}

export default IndividualPropertyV2