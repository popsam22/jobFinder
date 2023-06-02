import React from 'react'
import { Form, redirect } from 'react-router-dom'

const contactAction = async ({request}) => {
  console.log(request)
  const data = await request.formData()

  const formSubmission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(formSubmission)
  return redirect('/help')
}

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Contact Us</h2>
        <Form method='post' action='/help/contact-us'>
            <label>
            <span>Your Email:</span>
            <input type='text' name='email' required/>
            </label>
            <label>
            <span>Your Message:</span>
            <textarea name='message' required></textarea>
            </label>
            <button>Submit</button>
        </Form>
    </div>
  )
}

export {contactAction}
export default Contact