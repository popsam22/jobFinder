import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CareerDetails = () => {
    // const {id} = useParams()
    const career = useLoaderData()
  return (
    <div className='career-details'>
        <h2>{career.title}</h2>
        <p>Salary: {career.salary}</p> 
        <p>Location: {career.location}</p>
        <div className='detail'>
            <p>This is some placeholder for our career details and insight of JD</p>
        </div>
    </div>
  )
}

const careerDetailsLoader = async ({params}) => {
    const res = await fetch(`http://localhost:3008/careers/${params.id}`)

    if(!res.ok) throw Error ('Could not find career opening')

    return res.json()
}


export {careerDetailsLoader}
export default CareerDetails