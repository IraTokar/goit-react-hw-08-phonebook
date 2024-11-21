import { selectIsLoggedIn } from "components/redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            {isLoggedIn &&(<NavLink to='/contacts'>Contacts</NavLink>)}
            
        </nav>
    )
}