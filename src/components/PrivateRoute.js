import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/authSelectors"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}





