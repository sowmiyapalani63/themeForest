import React from 'react'
import Homesearch from '../../Components/Home03/Homesearch'
import Help from '../../Components/Home03/help'
import Appraisal from '../../Components/Home03/appraisal'
import Categories from '../../Components/Home03/Categories'
import Popularsearch from '../../Components/Home02/popularsearch'
import Localagent from '../../Components/Home02/localagent'
import Featured from '../../Components/Home03/featured'
import Why from '../../Components/Home03/why'
import Testimonials from '../../Components/Home02/testimonials'
import Worktogether from '../../Components/Home02/worktogether'
import Opinion from '../../Components/Home02/opinion'

const Home3 = () => {
  return (
    <div className='theme-color-2'>
    <Homesearch />
    <Help />
    <Appraisal />
    <Categories />
    <Popularsearch />
    <Localagent />
    <Featured />
    <Why />
    <Testimonials />
    <Worktogether />
    <Opinion />
    </div>
  )
}

export default Home3