import React from 'react'
import { Link ,useRouteError } from 'react-router-dom'

const CareerError = () => {
    const error = useRouteError() //used to access error thrown in careers component
  return (
    <div className='career-error'>
        <h1>Error 404</h1>
        <p>{error.message}</p>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default CareerError