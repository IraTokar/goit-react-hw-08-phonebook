import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";

export default function AppBar() {
    return (
        <header>
            <Navigation />
            <AuthNav />
            <UserMenu/>
        </header>
    )
}