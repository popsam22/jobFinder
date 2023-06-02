import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation()

    let path = ''

    const breadcrumbs = location.pathname.split('/')
      .filter(breadcrumb => breadcrumb !== '')
      .map(breadcrumb => {
        path += `/${breadcrumb}`

        return (
          <div className='breadcrumb' key={breadcrumb}> 
            <Link to={path}>{breadcrumb}</Link>
          </div>
        )
      })
  return (
    <div className='breadcrumbs'>
      {breadcrumbs}
    </div>
  )
}

export default BreadCrumbs