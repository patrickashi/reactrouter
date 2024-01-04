import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div>
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, voluptas.</p>

            <nav>
              <NavLink path="faq">View the FAQ</NavLink>
              <NavLink path="contact">Contact Us</NavLink>
            </nav>

          
            <Outlet />
            
        </div>
    </div>
  )
}
