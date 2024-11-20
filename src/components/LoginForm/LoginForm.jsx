export default function LoginForm() {
    return (
        <div>
            <form>
                <label htmlFor="">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="">Password</label>
                <input type="password" name="password" />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}