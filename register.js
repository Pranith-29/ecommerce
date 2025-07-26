const register=()=>{
    return `
    <div class="register">
            <form action="">
                <div><h1>Register</h1></div>
                <div>
                    <input type="name" name="name" placeholder="Name">
                </div>
                <div>
                    <input type="email" name="mail" placeholder="Mail">
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div>
                    <input type="password" name="re-password" placeholder="re-password">
                </div>
                <div>
                    <textarea name="address" id="" placeholder="address"></textarea>
                </div>
                <div>
                    <input type="file">
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                
            </form>

        </div></div>`
}
export default register