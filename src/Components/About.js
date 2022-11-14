import React from 'react'
import styled from 'styled-components'
export default function About() {
  return (
    <Aboutstyle>
      <div className="header">
     <h1>ai</h1>
        <h2>afifi ibrahim </h2>
        <h4>Front-End Developer</h4>
        <p>I am a Developer with a working proficiency in HTML, CSS, Javascript and React </p>
     </div>
     <SectionAbout>
          <h1> <span><i class="fa-solid fa-address-card"></i></span> A little about Me</h1>
          <div className="about-content">
            <div className="about-content-text">
             <h2>Hello</h2>
             <p>My name is brahim afifi and i'm a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technologies.
                <br /><br />
                My goal is to continously grow as a developer while staying current with the latest trend and technologies.
                <br /><br />
                I would love to work for a team that is passionate about what they create and that is constantly striving to move forward.
             </p>
            </div>
            <div className="about-content-skills">
           <h2>Skills</h2>
            <div className="languages">
            <h4>HTML</h4>
             <h4>CSS</h4>
             <h4>JavaScript</h4>
             <h4>React</h4>
             <h4>SASS</h4>
             <h4>Git</h4>
             <h4>Github</h4>
            </div>
            </div>
          </div>
     </SectionAbout>
     <div className="line"></div>
     <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Aboutstyle>
  )
}
// styeld-components

const Aboutstyle = styled.div`
padding-top:5rem ;
width: 80%;
margin: auto;
.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}
.header{
    min-height: 70vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   h1{
   font-size: clamp(17rem,2.5rem, 20rem);
    color: #00fff0;
   }
   h1::first-letter{
  color: #000;
   }
   h4{
    margin: 2rem;
   }
   h2{
    margin-top: 1rem;
   }
   
}

/* media query */
@media(max-width:600px){
    .header{
        padding: 0rem 2rem;
        h1{
            font-size: 11rem;
        }
    }
}
@media(max-width:500px){
    p{
        font-size: 16px;
    }
   }
`
// section about
const SectionAbout = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
margin-bottom: 4rem;
h1{
    text-align: center;
    margin-top: 1rem;
.fa-address-card{
    color:#00fff0;
}
}
.about-content{
    display: flex;
    align-items: center;
    justify-content: center;
     gap: 4rem;
}
.about-content-text{
    flex: 1;
    h2{
    margin-bottom: 2rem;
    background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-align: center;
    display: block;
}
p{
    line-height: 27px;
}
}
.about-content-skills{
  height: 17rem;
  display: flex;
 flex-direction: column;
 justify-content: space-between;
 h2{
    margin-bottom: 2rem;
    background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-align: center;
    display: block;
}
    flex: 1;
    .languages{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 2rem;
        h4{
            border: 1px solid black;
            width: 6rem;
            text-align: center;
            padding: 0.5rem;
        }
    }
}

/* media query */
@media(max-width:700px){
    .about-content{
        flex-direction: column;
    }
}
@media(max-width:500px){
    .about-content-text{
       p{
        font-size: 16px;
        text-align: center;
       }
    }
}
@media(max-width:426px){
   h1{
    margin-bottom: 2rem;
    font-size: 1.5rem;
   }
}
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