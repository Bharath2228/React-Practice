import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const ProductDetail = () => {

  const [serachParams] = useSearchParams();

  const params = useParams();
  console.log(params);

  return (
    <div className='component'>ProductDetail</div>
  )
}
