import './login.css';

function Login() {
    return (
      <div className="container-fluid d-flex row">
        <div className="login-box-left col-md-5 d-flex justify-content-center align-items-center">
          <img src="images/unindra-logo.png" alt="Logo Unindra"></img>
        </div>
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <form className="w-50">
          <div class="mb-3 row">
            <input type="text" className="form-control px-2 w-100" placeholder="Username"/>
          </div>
          <div class="mb-3 row">
            <input type="text" className="form-control px-2 w-100" placeholder="Password"/>
          </div>
          </form>
        </div>
      </div>
    );
  }
  
export default Login;