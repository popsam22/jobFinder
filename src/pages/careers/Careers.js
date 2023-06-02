import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const Careers = () => {
    const careers = useLoaderData()
  return (
    <div className='careers'> 
        {careers.map(career => (
            <Link key={career.id} to={career.id.toString()}>
                <h2>{career.title}</h2>
                <p>{career.location}</p>
            </Link>
        ))}
    </div>
  )
}

//loader function
const careersLoader = async () => {
    const res = await fetch('http://localhost:3008/careers')

    if(!res.ok) throw Error('Careers API could not be fetched')

    return res.json() //returns a promise which is handled by react router dom
}

export {careersLoader}
export default Careers