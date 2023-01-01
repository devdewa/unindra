import './login.css';

function Login() {
    return (
      <div className="container flex">
        <div className="login-box-left">
          <img src="images/unindra-logo.png" alt="Logo Unindra"></img>
        </div>
        <div className="flex">
          <input type="text" className="w-100" />
        </div>
      </div>
    );
  }
  
export default Login;