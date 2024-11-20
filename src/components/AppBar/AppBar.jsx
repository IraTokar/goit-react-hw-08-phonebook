import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";

export default function AppBar() {
    return (
        <header>
            <Navigation />
            <AuthNav />
            <UserMenu/>
        </header>
    )
}