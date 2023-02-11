import React from 'react'
import Analytics from '../components/Analytics'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

const Home = () => {  
  return (
    <div>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Cards/>
    </div>
  )
}

export default Home