import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="/" style={{ color: "#fff" }}>Organizer</NavLink>
                </div>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <NavLink exact to="/" className="nav-link">
                            Пингвины
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/Tasks" className=" nav-link">
                            Дела
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;