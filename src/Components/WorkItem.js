import React from 'react'
import styled from 'styled-components'
import WorkSubItem from './WorkSubItem'
export default function WorkItem({item}) {
  return (
    <Workitemstyle>
      <div className="work-text-description">
       <h1>{item.title}</h1>
       <h4>{item.date}</h4>
       <p>{item.description}</p>
       <div className="web-icons">
           <a href={item.github} target='blank'>
            <i className="fab fa-github" aria-hidden="true"></i>
            </a>
           <a href={item.web} target='blank'>
           <i className="fa-solid fa-globe"></i>
            </a>

           </div>
           <div className="subtitem">
           {item.languages.map((subitem=>(
            <WorkSubItem subitem={subitem}/>
           )))}
           </div>
      </div>
      <div className="work-image">
      <img src={`../images/${item.image}`} alt="" />
      </div>
    </Workitemstyle>
  )
}

// styled components
const Workitemstyle = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
gap: 2rem;

.work-text-description{
    flex: 1;
   display: flex;
   flex-direction: column;
   
    h1{
        font-size: 24px;
    }
    .web-icons{
        display: flex;
        align-items: center;
        margin-bottom:2rem;
        .fa-solid{
        margin-left:1rem;
    }
    }
    .subtitem{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
       
    }
    h4{
        margin: 2rem 0rem;
    }
    p{
        margin-bottom:2rem;
        line-height: 30px;
    }
}
.work-image{
    flex: 1;
    img{
        width: 100%;
        height: 100%;
        box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
        border-radius:20px;
    }
}
/* media query */
@media(max-width:1020px){
    .work-text-description{
  h4{
    margin: 1rem 0rem;
  }
  p{
    margin-bottom:1rem;
  }
}
}
@media(max-width:868px){
    .work-text-description{
  h4{
    margin: 0.5rem 0rem;
  }
  p{
    margin-bottom:0.5rem;
  }
  .web-icons{
      margin-bottom: 0.5rem;
  }
}
}
@media(max-width:824px){
    flex-direction: column;
    .work-text-description{
        align-items: center;
        justify-content: center;
        text-align: center;
        /* padding: 0rem 2rem; */
     order: 2;
     h4{
    margin: 1rem 0rem;
  }
  p{
    margin-bottom:1rem;
  }
  .web-icons{
      margin-bottom: 1rem;
  }
  }
  .work-image{
    order: 1;
    /* padding: 0rem 2rem; */
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
}

@media(max-width:500px){
    .work-text-description{
        h1{
            font-size: 20px;
        }
        p{
            font-size: 13px;
            
        }
        .subtitem{
            align-items: center;
            justify-content: center;
        }
    }
}
`