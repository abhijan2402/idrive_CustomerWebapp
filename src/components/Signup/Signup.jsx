import React, { useState } from "react";
import "../LoginForm.css";
import "./Signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FullName: "",
    ownerName: "",
    companyName: "",
    tin: "",
    panCard: "",
    aadharCard: "",
    services: "",
    address: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    branch: "",
    accountType: "Savings",
    upiId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (
      !formData.FullName ||
      !formData.ownerName ||
      !formData.companyName ||
      !formData.tin ||
      !formData.panCard ||
      !formData.aadharCard ||
      !formData.services ||
      !formData.address
    ) {
      toast.error("Please fill all the required fields in Step 1.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registration Data:", formData);
    toast.success("Company registered successfully!");
  };

  return (
    <div className="login-form d-block">
      <div className="login-wrap">
        <div className="login-right-wrap-company">
          <div className="compoany-login-right">
            <div className="inner-div-company px-0">
              <div className="text-center mb-30">
                <img className="login-logo mt-2" src={logo} alt="Logo" />
                <h3 className="mb-2">Sign Up</h3>
                <p className="opacity-75 mb-4">Sign Up to stay connected</p>
              </div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="form-step company-registration">
                    <label htmlFor="FullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="FullName"
                      placeholder="Full Name"
                      value={formData.FullName}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <label htmlFor="role" className="form-label">
                      Role <small className="text-muted">(optional)</small>
                    </label>
                    <select
                      name="role"
                      id="role"
                      className="form-select mb-3"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="">Select your role</option>
                      <option value="Customer">Customer</option>
                      <option value="Provider">Provider</option>
                    </select>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 ms-2 step-1-btn"
                    >
                      Submit
                    </button>
                  </div>
                )}
                {step === 2 && (
                  <div className="form-step company-registration">
                    <input
                      type="text"
                      name="bankName"
                      placeholder="Bank Name"
                      value={formData.bankName}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Account Number"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="ifsc"
                      placeholder="IFSC Code"
                      value={formData.ifsc}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="branch"
                      placeholder="Branch Name"
                      value={formData.branch}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="form-control mb-3"
                    >
                      <option value="Savings">Account Type</option>
                      <option value="Current">Current</option>
                      <option value="Current">Saving</option>
                    </select>
                    <input
                      type="text"
                      name="upiId"
                      placeholder="UPI ID (optional)"
                      value={formData.upiId}
                      onChange={handleChange}
                      className="form-control mb-3"
                    />
                    <div className="d-flex justify-content-between ">
                      <button
                        type="button"
                        className="btn btn-secondary w-100 me-2 step-1-btn"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 ms-2 step-1-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            <div className="login-footer d-flex align-items-center justify-content-center px-xxl-5 py-xl-3">
              <small className="opacity-75">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className=" ms-1 signup-redirect"
                >
                  Sign In
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="tin"
                      placeholder="TIN"
                      value={formData.tin}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="panCard"
                      placeholder="PAN Card Number"
                      value={formData.panCard}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="aadharCard"
                      placeholder="Aadhar Card Number"
                      value={formData.aadharCard}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="services"
                      placeholder="Services Offered"
                      value={formData.services}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <textarea
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    /> */
}
