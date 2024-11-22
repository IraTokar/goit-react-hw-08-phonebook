
import { register } from "components/redux/auth/authOperations";
import { useDispatch } from "react-redux"

export default function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label >Name</label>
                <input type="text" name="name" required/>

                <label >Email</label>
                <input type="email" name="email" required/>

                <label >Password</label>
                <input type="password" name="password" required/>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}