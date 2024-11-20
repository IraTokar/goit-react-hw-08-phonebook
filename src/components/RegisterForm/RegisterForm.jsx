export default function RegisterForm() {
    // const handleSubmit = event => {
    //     event.preventDefault();

    // }

    return (
        <div>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" name="name"/>

                <label htmlFor="">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="">Password</label>
                <input type="password" name="password" />
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}