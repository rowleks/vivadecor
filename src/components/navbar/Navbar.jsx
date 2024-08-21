import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <img className="logo" src="./logo1.png" alt="" />
        <div className="nav-menu">
            <span>Home</span>
            <span>Services</span>
            <span>Contact</span>
            <span>Support</span>
        </div>

        <span className="signup-btn">Sign Up</span>
      
    </nav>
  )
}

export default Navbar
