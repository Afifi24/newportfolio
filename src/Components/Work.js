import React from 'react'
import styled from 'styled-components'
import WorkData from '../WorkData'
import WorkItem from './WorkItem'
import ScrollTop from './ScrollTop'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import {motion} from 'framer-motion'
import {Fade} from '../Animation'
export default function Work() {
  // const[element,view] =useInView({threshold:0.5})
  // const controls = useAnimation()
  // if(view){
  //   controls.start('show')
  // }else{
  //   controls.start('hidden')
  // }
  // variants={Fade} ref={element} initial='hidden' animate='show'
  return (
    <Workstyle >
      <h1 className='work'>My Work</h1>
    <div className="work-content">
    {WorkData.map((item)=>(
    <WorkItem key={item.id} item={item}/>
     ))}
    </div>
    <ScrollTop/>
    <div className="line"></div>
     <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Workstyle>
  )
}

const Workstyle = styled(motion.div)`
min-height: 100vh;
width: 80%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.work{
  font-size: 3rem;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}

/* media query */


`
// footer

const Footer = styled.div`
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
  text-align: center;
}
`