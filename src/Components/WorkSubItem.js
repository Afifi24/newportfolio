import React from 'react'
import styled from 'styled-components'
export default function WorkSubItem({subitem}) {
  return (
    <Subitem>
      <p>{subitem.title}</p>
    </Subitem>
  )
}
// styled-components

const Subitem = styled.div`
p{
    padding: 0.2rem 1rem;
    border: 1px solid black;
    font-size: 15px;
    color: #555;
    
}
@media(max-width:500px){
   
   p{
    padding: 0rem 0.5rem;

   }
       
    }
`