import { Link, Outlet } from "react-router-dom"

export const Home = () => {
    return <div>
        <h1>this is home page</h1>
        <Link to="/contact">contact</Link>
        <Link to="/dashboard">dashboard</Link>
        <Outlet></Outlet>
    </div>
}