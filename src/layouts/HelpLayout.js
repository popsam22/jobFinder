import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h1>Welcome To Our Help Page!</h1>
      <br />
      <br />
      <p>
        You'll find answers to frequently asked questions and useful resources
        to assist you. Whether you have a specific question or need guidance on
        how to use our platform effectively, we've got you covered.
      </p>
      <br />
      <br />

      <nav>
        <NavLink to='faq'>FAQs</NavLink>
        <NavLink to='contact-us'>Contact Us</NavLink>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HelpLayout;
