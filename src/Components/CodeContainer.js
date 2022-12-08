import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
export default function Codecontainer() {
  return (
    <Codecontainerstyle>
      <div className="code-container">
        <div className="code-toolbar">
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
        </div>
        <div className="code">
            <ol className='line-numbers'>
             <li> &nbsp;let afifi = FrontEnd Developer();</li>
             <li> &nbsp; afifi . education = {'{'} </li>
             <li> &nbsp;&nbsp;&nbsp;&nbsp;    school: “ Cadi Ayyad University | Morocco ”,</li>
             <li> &nbsp;&nbsp;&nbsp;&nbsp;    graduationYear: 2021,</li>
             <li> &nbsp;&nbsp;&nbsp;&nbsp;    major: “ master's degree in Advanced Materials”,</li>
             <li>&nbsp; {'}'} </li>
             <li>&nbsp;afifi.skills = {'{'} </li>
             <li>&nbsp;&nbsp;&nbsp;&nbsp; languages: [“HTML” , “CSS” , “JavaScript” , “React”,    “SASS”, “Python”, “C++” ],</li>
             <li>&nbsp;&nbsp;&nbsp;&nbsp; software: [ “Mathlab”, “Premier Pro”, “Git”]</li>
             <li>&nbsp;{'}'}</li>
             <li>&nbsp; afifi.interests = [“Workout”, “sci-fi movies”, “coding”, “football”]</li>
             <li>&nbsp; afifi.funFacts = {'{'}</li>
             <li>&nbsp;&nbsp;&nbsp;&nbsp; pets:{'{'}</li>
             <li>&nbsp;&nbsp;&nbsp;&nbsp; hasDogs = true,</li>
             <li>&nbsp;&nbsp;&nbsp;&nbsp; numberOfDogs = 3,</li>
             <li>&nbsp;&nbsp; {'}'}</li>
             <li>&nbsp;  {'}'}</li>
             <li>&nbsp; favCoffee = “Vanilla Sweet Cream Cold Brew”</li>
             <li>&nbsp;<span className="bold ACCGrey">&lt;!--END OF CODE</span></li>
             <li>&nbsp;<span className="bold ACCGrey">Thanks for scrolling this far!</span></li>
             <li>&nbsp;<span className="bold ACCGrey">Have questions?? Send me an email : <a href="mailto:afifi71brahim@gmail.com"><span class="ACCPink underline">afifi71brahim@gmail.com</span></a> </span> </li>
             <li>&nbsp;<span class="bold ACCGrey">--&gt;</span></li>
             
            </ol>
        </div>
      </div>
    </Codecontainerstyle>
  )
}

// styled components

const Codecontainerstyle = styled.div`
  

.code-container{
  position: relative;
  width: 90%;
  max-width: 950px;
  margin: auto;
  max-height: 450px;
  background-color: #fbfbfb;
  overflow-y: scroll;
  box-shadow: 2px 4px 10px rgba(0,0,0,.25);
  border-radius: 10px 10px;
 
}

.code-toolbar{
position: sticky;
width: 100%;
z-index: 10;
top: 0;
background-color: #111;
padding: 15px;
border-bottom: 1px solid #d9d9d9;
border-radius: 10px 10px 0 0;
.circle{
  border-radius: 50%;
  height: 12px;
  width: 12px;
  display: inline-block;
  margin-right: 15px;
}
}
.circle:nth-child(1){
  background-color: #ff5454;
}
.circle:nth-child(2){
  background-color: #ffbf43;
}
.circle:nth-child(3){
  background-color: #90de2c;
}
.code{
line-height: 200%;
/* font-size: 1em; */
margin-left: 1em;
color: #000;
.line-numbers{
line-height: 200%;
font-size: 1rem;
color: #000;
padding: 0rem 2rem;


li::marker {
  color: #7A7A7A;
  font-size: 1em;
}


li{
  font-size: 18px;
  font-family: 'Source Code Pro', monospace;
  .ACCGrey{
    color: #7A7A7A;
  }
  .ACCPink{
    color:#FF006F;
    font-weight: normal;
  }
  .bold{
    font-weight: 600;
  }
  .underline{
    text-decoration: underline;
  }
}
}
}
`
