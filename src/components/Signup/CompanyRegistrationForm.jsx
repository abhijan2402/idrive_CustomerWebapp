import React, { useState } from "react";
import "../LoginForm.css";
import "./CompanyRegistrationForm.css";
import { toast } from "react-toastify";

const CompanyRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
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
      !formData.name ||
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
              Register your <strong>Company</strong>
              <br /> with <strong>Ease</strong>
            </h2>
          </div>
        </div>
        <div className="login-right-wrap">
          <div className="d-flex justify-content-end mt-2 me-2">
            <span className="badge badge-success fz-12 opacity-75 version">
              Form Version : 1.0
            </span>
          </div>
          <div className="login-right w-100 m-auto px-0 pb-3">
            <div className="inner-div px-0">
              <div className="text-center mb-30">
                {/* <h2 className="text-uppercase mb-3">DriveMond</h2> */}
                <h3 className="mb-2">Registration Form</h3>
                <p className="opacity-75 mb-4">Register to stay connected</p>
              </div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="form-step company-registration">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="Company Owner Name"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="form-control mb-3"
                      required
                    />
                    <input
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
                    />
                    <button
                      type="button"
                      className="btn btn-primary w-100 mt-3 step-1-btn"
                      onClick={handleNext}
                    >
                      Next
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
          </div>
          <div className="login-footer mt-auto d-flex align-items-center justify-content-center mt-1 px-xxl-5 py-xl-3">
            <small className="opacity-75">
              All details are kept confidential & secure.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationForm;
