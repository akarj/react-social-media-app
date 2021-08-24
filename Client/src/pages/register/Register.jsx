import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Social...
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className="registerInput"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="registerInput"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              name="password"
              placeholder="Password Again..."
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>

            <button className="loginButton">Log in...</button>
          </div>
        </div>
      </div>
    </div>
  );
}
