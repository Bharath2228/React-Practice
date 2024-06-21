import React from 'react'

export const BoxCard = ({ result, children }) => {
  return (
    <>
        <div className={`box ${result}`}>
        {children}
        </div>
        <button>Hide</button>
    </>
    
  )
}

