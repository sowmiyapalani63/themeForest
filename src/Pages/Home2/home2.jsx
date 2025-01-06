import React from 'react'
import Homesearch from '../../Components/Home02/Homesearch'
import Categories from '../../Components/Home02/categories';
import Trusted from '../../Components/Home02/trusted';
import Popularsearch from '../../Components/Home02/popularsearch';
import Reality from '../../Components/Home02/reality';
import Localagent from '../../Components/Home02/localagent';
import Neighborhoods from '../../Components/Home02/neighborhoods';
import Testimonials from '../../Components/Home02/testimonials';
import Appraisal from '../../Components/Home02/appraisal';
import Worktogether from '../../Components/Home02/worktogether';
import Opinion from '../../Components/Home02/opinion';


const Home2 = () => {
  return (
   <div className='theme-color-1'>
   <Homesearch />
   <Categories />
   <Trusted />
   <Popularsearch />
   <Reality />
   <Localagent />
   <Neighborhoods />
   <Testimonials />
   <Appraisal />
   <Worktogether />
   <Opinion />  
   </div>
  )
}

export default Home2