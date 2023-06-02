import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>Here are a few career options we have carefully selected for you</p>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default CareersLayout