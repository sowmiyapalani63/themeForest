import React from 'react'
import '../../Styles/css/animate.min.css'
import '../../Styles/css/bootstrap.css'
import '../../Styles/css/styles.css'
import '../../Styles/css/styles.css.map'
import Homesearch from '../../Components/Home05/Homesearch'
import Popularsearch from '../../Components/Home02/popularsearch'
import Categories from '../../Components/Home03/Categories'
import Sellinghome from '../../Components/Home05/sellinghome'
import Worktogether from '../../Components/Home02/worktogether'
import Testimonials from '../../Components/Home02/testimonials'
import Downloads from '../../Components/Home05/downloads'
import Preapproved from '../../Components/Home05/preapproved'
import Opinion from '../../Components/Home02/opinion'
import Localagent5 from '../../Components/Home05/localagent5'
const Home5 = () => {
  return (
    <div class="theme-color-4">
      <Homesearch />
      <Popularsearch />
      <Categories />
      <Sellinghome />
      <Worktogether />
      <Testimonials />
      <Downloads />
      <Localagent5 />
      <Preapproved />
      <Opinion />
    </div>
  )
}

export default Home5