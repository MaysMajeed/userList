import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="formContainer">
      <form className="loginForm">
        <p className="formHeader">Log in</p>

        <div className="formSection">
          <label htmlFor="loginEmail">Email</label>
          <input type="email" id="loginEmail"></input>
        </div>

        <div className="formSection">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword"></input>
        </div>

        <button className="formSection btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
