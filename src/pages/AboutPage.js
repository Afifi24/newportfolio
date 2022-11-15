import React from 'react'
import About from '../Components/About'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { PageAnimation } from '../Animation'
export default function AboutPage() {
  return (
    <Div variants={PageAnimation} initial='hidden' animate='show' exit='exit' >
      <About/>
    </Div>
  )
}
// styled-components

const Div = styled(motion.div)`

`
