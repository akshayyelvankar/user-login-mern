import './style.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar navbars navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand nav_brands" href="#">User Registration From</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/home"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/login"}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/register"}>Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>

  )
}
export default Header;