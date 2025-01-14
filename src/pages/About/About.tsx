import React from 'react'
import HeroSection from './component/Herosection'
import FarmSection from './component/FarmSection'
import CrewSection from './component/CreawSection'
import JourneySection from './component/JourneySection'
import OurGoal from './component/OurGoal'
import Certified from './component/Cerivid'

export default function About() {
  return (
    <div>
      <HeroSection />
      <FarmSection />
      <JourneySection />
      <Certified />
      <OurGoal />                    
    </div>
  )
}
