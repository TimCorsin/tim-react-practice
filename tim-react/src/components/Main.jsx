import "../styles/App.css"
import group from "../assets/images/group.svg"

export default function Main() {
    return (
        <>
            <main className="facts">
                <h1 className="facts-title">Fun facts about React</h1>
                <ul className="react-facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={group} className="background-logo" alt="React Logo"/>
            </main>
        </>     
    )
}