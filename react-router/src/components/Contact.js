import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Contact = () => {

  const navigate = useNavigate();

  function handleSubmit(){
    navigate("/")
  }

  return (
    <>
      <div className='component'>Contact</div>
      <button onClick={handleSubmit}>Back To Home</button>
    </>
    
  )
}
