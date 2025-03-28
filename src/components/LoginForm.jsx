import React, { useState } from "react";
import "./LoginForm.css";
import { Eye, EyeOff, Copy } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    toast.success("Logged in successfully!");
    localStorage.setItem("token", "adsfuiashkdjfkasdfnkasf");
    navigate("/dashboard");
  };

  const copyCredentials = () => {
    navigator.clipboard.writeText("Email: admin@admin.com\nPassword: 12345678");
    toast.info("Credentials copied to clipboard!");
  };

  return (
    <div className="login-form d-block">
      <div className="login-wrap">
        <div
          className="login-left py-4 d-flex justify-content-center align-items-center bg-center bg-img"
          style={{
            backgroundImage:
              'url("https://drivemond-admin.codemond.com/public/assets/admin-module/img/media/login-bg.png")',
          }}
        >
          <div className="tf-box d-flex flex-column gap-3 align-items-center justify-content-center p-4 py-sm-5 p-md-5 mx-md-5 mx-4">
            <img
              className="login-logo mb-2"
              src="https://drivemond-admin.codemond.com/storage/app/public/business/2023-11-20-655adbb133299.png"
              alt="Logo"
            />
            <h2 className="text-center absolute-white">
              Share the <strong>Ride</strong> Share <br /> The{" "}
              <strong>Journey</strong>
            </h2>
          </div>
        </div>
        <div className="login-right-wrap">
          <div className="d-flex justify-content-end mt-2 me-2">
            <span className="badge badge-success fz-12 opacity-75 version">
              Software Version : 2.3
            </span>
          </div>
          <div className="login-right w-100 m-auto px-0 pb-3">
            <div className="inner-div px-4">
              <div className="text-center mb-30">
                <h2 className="text-uppercase mb-3">DriveMond</h2>
                <h3 className="mb-2">Sign In</h3>
                <p className="opacity-75">Sign in to stay connected</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group_tooltip position-relative">
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Ex: ********"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="password-toggle-icon position-absolute end-0 pe-3"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      cursor: "pointer",
                      top: "60%",
                      transform: "translateY(-16%)",
                      fontSize: "10px",
                    }}
                  >
                    {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-1 align-items-center">
                    <input type="checkbox" name="remember" id="remember" />
                    <label className="lh-1" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-primary radius-50 text-capitalize fw-semibold w-100 justify-content-center h-45 align-items-center mt-4"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="login-footer mt-auto d-flex align-items-center justify-content-between mt-3 px-xxl-5 py-xl-3">
            <button
              type="button"
              className="btn btn-primary login-copy"
              onClick={copyCredentials}
            >
              <Copy size={16} />
            </button>
            <div>
              <div>Email : admin@admin.com</div>
              <div>Password : 12345678</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
