import React from 'react'
import styled from 'styled-components'
import WorkData from '../WorkData'
import WorkItem from './WorkItem'
export default function Work() {
  return (
    <Workstyle>
      <h1 className='work'>My Work</h1>
    <div className="work-content">
    {WorkData.map((item)=>(
    <WorkItem item={item}/>
     ))}
    </div>
    <div className="line"></div>
     <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Workstyle>
  )
}

const Workstyle = styled.div`
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