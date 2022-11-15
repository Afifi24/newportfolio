import React from 'react'
import Work from '../Components/Work'
import styled from 'styled-components'
import { PageAnimation } from '../Animation'
import {motion} from 'framer-motion'
export default function WorkPage() {
  return (
    <Workpa variants={PageAnimation} initial='hidden' animate='show' exit='exit'>
      <Work/>
    </Workpa>
  )
}

// styled-components

const Workpa = styled(motion.div)`

`