import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "components/redux/auth/authSelectors";

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <Navigation /> 
            {isLoggedIn ? <UserMenu/> : <AuthNav />} 
        </header>
    )
}