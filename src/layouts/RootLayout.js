import { NavLink, Outlet} from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
// import BreadCrumbs from '../components/BreadCrumbs'

const RootLayout = () => {
  return (
    <div>
        <header>
            <nav>
                <h1>Job Finder</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='careers'>Careers</NavLink>
                <NavLink to='help'>Help</NavLink>
            </nav>
            <BreadCrumbs />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout