import { logOut } from "components/redux/auth/authOperations";
import { selectUser } from "components/redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux"

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (
        <div>
            <p>Welcome, {user.name }</p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>   
    )
}