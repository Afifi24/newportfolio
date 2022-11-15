import React from 'react'
import styled from 'styled-components'
import Contact from '../Components/Contact'
import { PageAnimation } from '../Animation'
import {motion} from 'framer-motion'
export default function ContactPage() {
  return (
    <Aboutpa variants={PageAnimation} initial='hidden' animate='show' exit ='exit'>
      <Contact/>
    </Aboutpa>
  )
}
// styled-components

const Aboutpa = styled(motion.div)`

`
