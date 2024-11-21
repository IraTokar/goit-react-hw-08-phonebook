
import { logIn } from "components/redux/auth/authOperations";
import { useDispatch } from "react-redux"

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label >Email</label>
                <input type="email" name="email"/>

                <label >Password</label>
                <input type="password" name="password" />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}