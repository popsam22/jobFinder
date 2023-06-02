import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

//layout
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

//pages
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/helppages/FAQ'
import Contact, { contactAction } from './pages/helppages/Contact'
import ErrorPage from './pages/ErrorPage'
import Careers, {careersLoader} from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareerError from './pages/careers/CareerError'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<ErrorPage/>}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>

            <Route path='help' element={<HelpLayout />}>
                <Route path='faq' element={<FAQ />}/>
                <Route path='contact-us' element={<Contact />} action={contactAction}/>
            </Route>

            <Route path='careers' element={<CareersLayout />} errorElement={<CareerError />}>
                <Route index element={<Careers/>} loader={careersLoader}/>
                <Route path=':id' element={<CareerDetails/>} loader={careerDetailsLoader}/>
            </Route>
        </Route>
    )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App