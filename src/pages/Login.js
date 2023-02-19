import './Login.css'
function Login(){
    return <div className="main">  	
    <form  id="form_login" method="post" name="form">
        <label>Signin</label>
        <input type="text" id="input_email" name="email" placeholder="email" className="username"/>
        <div className="email_error"></div>
        <input type="password" id="input_password" name="password" placeholder="Password" className="pass password" />
        <div className="password_error"></div>
        <div className="form_error"></div>
        <button type="submit" className="button">Signin</button>    
    </form>
</div>;
}
export default Login;