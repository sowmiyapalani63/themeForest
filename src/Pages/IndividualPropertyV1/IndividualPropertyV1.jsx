import React from 'react'
import SectionPropertyImage from '../../Components/IndividualPropertyV1/ImageSection'
import InidividualDetails from '../../Components/IndividualPropertyV1/inidividualDetails'
import SectionOpinion from '../../Components/IndividualPropertyV1/SectionOpinion'

const IndividualPropertyV1 = () => {
  return (
    <div>
        <SectionPropertyImage/>
        <InidividualDetails/>
        <SectionOpinion/>
    </div>
  )
}

export default IndividualPropertyV1