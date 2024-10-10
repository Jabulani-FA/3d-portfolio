import React from 'react'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from "./canvas"
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='x-28 h-28' key={technology.name}>
      <p>tech</p>
        <BallCanvas icon={technology.name}/>
      </div>
    ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")