import './home.css';

function Login() {
    return (
      <div className="container-fluid d-flex row">
        <div className="login-box-left col-md-5 d-flex justify-content-center align-items-center">
          <img src="images/unindra-logo.png" alt="Logo Unindra"></img>
        </div>
        <div className="col-md-7 d-flex justify-content-center align-items-center flex-wrap">
          <form className="w-50">
            <h2 className="mx-auto mb-5 d-flex justify-content-center">Welcome</h2>
            <div class="mb-3 row">
              <input type="text" className="form-control px-2 w-100 mb-3" placeholder="Username"/>
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