import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Nav() {
    const [isopen,setIsopen] = useState(false)
    const CloseOpen =()=>{
        setIsopen(!isopen)
    }
    const Close = ()=>{
        setIsopen(false)
    }
  return (
   <Header>
     <Navstyle>
     <Link className='logo' to='/'>afifi</Link>
     <div className="icon-menu" onClick={CloseOpen}>
        <i className={isopen?'fas fa-times':'fas fa-bars'}/>
     </div>
      <ul className={isopen ? 'nav-menu active': 'nav-menu'}>
        <li onClick={Close} className='nav-item'><Link to='/' className='nav-link'>About</Link></li>
        <li onClick={Close} className='nav-item'><Link to='/work' className='nav-link'>Work</Link></li>
        <li onClick={Close} className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
      </ul>
    </Navstyle>
   </Header>
  )
}
// styled-components

const Header = styled.div`
  min-height: 12vh;
  background-color: #000;
  display: flex;
  align-items: center;
  position: fixed;
  box-shadow: 2px 5px 10px rgba(0,0,0,0.1) ;
   top: 0;
   left: 0;
   right: 0;

`
const Navstyle = styled.div`
   display: flex;
   align-items: center;
   width: 80%;
   margin: auto;
   justify-content: space-between;

 
   .logo{
    text-decoration:none;
    font-family: 'Lobster', cursive;
    background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    border: 1px solid #acb6e5;
    padding: 0.3rem;
    border-radius: 20px;
    padding-bottom: 0.4rem;
   }
   .icon-menu{
    display: none;
   }
   .nav-menu{
    display: flex;
    list-style: none;
    justify-content: space-around;
   }
   .nav-item{
    margin-left: 5rem;
   }
   .nav-link{
    text-decoration: none;
     /* color: #fff; */
     background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    font-weight: bold;
   }
   /* media query */
    @media(max-width:700px){
        .logo{
            
        }

        .icon-menu{
            display: block;
          position: absolute;
          right: 2rem;
          
          color: #fff;
         font-size: 2rem;
         cursor: pointer;
         z-index: 10;
        }
        .nav-menu{
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0%;
            left: -100%;
            background-color: #222;
            transition: all 0.5s ease;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        .nav-item{
          margin: 0;
        }
        .active{
            left: 0%;
        }
        

    }
`
