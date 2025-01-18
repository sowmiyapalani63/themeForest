import React from 'react';
import Home1 from '../../Components/Home1/Head'
import Cards from '../../Components/Home1/Cardds';
import Propertycards from '../../Components/Home1/Propertycards';
import DiscoverHelp from '../../Components/Home1/Help'
import Homeloan from '../../Components/Home1/Homeloan';
import Neighbour from '../../Components/Home1/Neighbour';
import HouseListing from '../../Components/Home1/HouseListing';
import WorktTogether from '../../Components/Home1/WorktTogether';
import Insight from '../../Components/Home1/Insight';



const HomePage = () => {
  return (
    
   <>
   
    <Home1 />
    <Cards />
    <Propertycards />
    <DiscoverHelp />
    <Homeloan />
    <Neighbour />
    <HouseListing />
    <WorktTogether />
    <Insight />
    </>
  )
}

export default HomePage ;