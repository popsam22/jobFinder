import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2>Error 404</h2>
        <p>Page Not Found, Go to <Link to='/'>Home Page</Link>.</p>
    </div>
  )
}

export default ErrorPage