import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {PageAnimation} from '../Animation'
import ScrollTop from './ScrollTop'
export default function Contact() {
  return (
    <Contactstyle >
       <div className="contact-head">
       <h1> "Let's Connect!" </h1>
        <p>Feel free to connect with me on social media!
            <br />
        Below you will find links to my <span>GitHub</span>,<span> Instagram</span>,<span> LinkeIdn</span>
        </p>
        <div className="icons">
            <a  href="https://github.com/Afifi24" target='blank'>
            <i className="fa fa-github hello" ></i>
            </a>
            <a  href="https://www.instagram.com/afifi-brahim" target='blank'>
            <i id='color' className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/brahim-afifi" target='blank'>
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/afifi_brahim" target='blank'>
            <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
        </div>
       </div>
       
       <div className="chat">
      <h1> Want To Chat? </h1>
      <p>Fill out this form to collaborate, ask a question about my word , or just say hi! </p>
      <form className='form'>
         <input type="text" placeholder='Name' />
         <input type="email" placeholder='Email' />
         <textarea name="message" id="" cols="33" rows="15"></textarea>
         <input type="submit" value="Send" className='btn' />
      </form>
      </div>
      <ScrollTop/>
      <div className="line"></div>
      <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me <i class="fa-solid fa-heart"></i></p>
    </Footer>
    </Contactstyle>
  )
}

// styled-compnents

const Contactstyle = styled.div`
.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}
/* min-height: 100vh; */
.contact-head{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  p{
    margin: 2rem;
    line-height: 30px;
    
    span{
      background: linear-gradient(to left,#acb6e5,#86fde8);
      -webkit-text-fill-color:transparent;
       background-clip:text;
       font-size: 20px;

       background-clip: text;
     -webkit-background-clip: text;
      color: transparent;
    }
  }
  .icons{
    a{
      margin: 1rem;
      font-size: 2rem;
      color: rgb(85,26,139);
      &:hover{
        color: #00fff0;

      }
    }
    
  }
}
.chat{
  min-height: 100vh;
  display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 4rem;
 p{
  margin: 3rem;
  text-align: center;
 }
 .form{
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 20rem;
    height: 2.2rem;
    margin: 0.9rem 0rem;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    outline: none;
    &:focus{
      border: 2px solid #444;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
      border-radius: 5px;
    }
  }
  textarea{
    outline: none;
    padding: 0.5rem;
    width: 20rem;
    &:focus{
      border: 2px solid #444;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
      border-radius: 5px;
      
    }
  }
 
  .btn{
         
          border-radius: 30px;
          background-color: #06beb6;
          cursor: pointer;
          color:#fff;
          &:hover{
          border: 1px solid #06beb6;
          background-color: transparent;
          color: #000;
          transition: all 0.5s ease;
          font-weight: bold;
          }
          &:focus{
            border: 1px solid #06beb6;
          border-radius: 30px;

          }
   }
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
  .fa-heart{
    color: red;
   
  }
}
`
