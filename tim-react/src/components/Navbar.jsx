import "../styles/App.css"
import logo from "../assets/images/logo.svg"

export default function Navbar() {
    return (
        <> 
        <header>
            <nav className="header-navbar">
                <img src={logo} alt="React Logo"/>        
                <h1>ReactFacts</h1> 
            </nav>
        </header>

        </>
    )
}