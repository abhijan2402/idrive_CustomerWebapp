import React, { useState } from "react";
// import "../LoginForm.css";
// import "./Signup.css";
import "./CompleteRegistration.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const CompleteRegistration = () => {
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0], // Only store one file, assuming single file upload
    }));
  };

  const handleNext = (step) => {
    // if (
    //   !formData.FullName ||
    //   !formData.ownerName ||
    //   !formData.companyName ||
    //   !formData.tin ||
    //   !formData.panCard ||
    //   !formData.aadharCard ||
    //   !formData.services ||
    //   !formData.address
    // ) {
    //   toast.error("Please fill all the required fields in Step 1.");
    //   return;
    // }
    setStep(step);
  };

  const handleBack = (step) => setStep(step);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registration Data:", formData);
    toast.success("Company registered successfully!");
  };

  const handleDigiLockerAuth = () => {
    const clientId = "YOUR_DIGILOCKER_CLIENT_ID";
    const redirectUri = "YOUR_REDIRECT_URI";

    const digilockerUrl = `https://digilocker.meripehchaan.gov.in/public/oauth2/1/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=1234`;

    window.open(digilockerUrl, "_blank", "width=500,height=600");
  };

  return (
    <div className="login-form d-block">
      <div className="login-wrap">
        <div className="login-right-wrap-company">
          <div className="company-login-right">
            <div className="inner-div-company px-0">
              <div className="text-center mb-30">
                <img className="login-logo mt-2" src={logo} alt="Logo" />
                <h3 className="mb-2">Registration Form</h3>
                <p className="opacity-75 mb-4">
                  "Your Services, Your Identity — Register to Offer More."
                </p>
              </div>
              <form onSubmit={handleSubmit} className="custom-form">
                {step === 1 && (
                  <div className="form-step company-registration">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="FullName"
                          value={formData.FullName}
                          placeholder="Enter your full name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Enter your email"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Role <small>(optional)</small>
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <option value="">Select your role</option>
                          <option value="Customer">Customer</option>
                          <option value="Provider">Provider</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>PAN Card</label>
                        <input
                          type="text"
                          name="panCard"
                          value={formData.panCard}
                          placeholder="Enter PAN card no."
                          onChange={handleChange}
                          required
                        />
                        <label>OR</label>

                        <button
                          type="button"
                          className="digilocker-btn"
                          onClick={handleDigiLockerAuth}
                        >
                          Verify via DigiLocker
                        </button>
                      </div>
                      <div className="form-group">
                        <label>Aadhar Card</label>
                        <input
                          type="text"
                          name="aadharCard"
                          value={formData.aadharCard}
                          placeholder="Enter Aadhar card no."
                          onChange={handleChange}
                          required
                        />
                        <label>OR</label>

                        <button
                          type="button"
                          className="digilocker-btn"
                          onClick={handleDigiLockerAuth}
                        >
                          Verify via DigiLocker
                        </button>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group full-width">
                        <label>Address</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          placeholder="Enter you address"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNext(2)}
                      className="custom-btn full-width mb-4"
                    >
                      Next
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step company-registration">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Firm Type</label>
                        <select
                          name="firm"
                          value={formData.firm}
                          onChange={handleChange}
                        >
                          <option value="">Select Firm Type</option>
                          <option value="Company">Company</option>

                          <option value="Car Rental">Car Rental Center</option>
                          <option value="Driver on Hire">Driver on Hire</option>
                          <option value="Car Cleaning">
                            Car Cleaning Services
                          </option>
                          <option value="Car Maintenance">
                            Car Maintenance / Mechanic
                          </option>
                          <option value="Car Accessories">
                            Car Accessories Retailer
                          </option>
                          <option value="Towing Services">
                            Emergency Towing Services
                          </option>
                          <option value="Car Dealership">Car Dealership</option>
                          <option value="Auto Insurance Agent">
                            Auto Insurance Agency
                          </option>
                          <option value="Spare Parts Supplier">
                            Spare Parts Supplier
                          </option>
                          <option value="Fuel Supply Service">
                            Fuel Delivery Service
                          </option>
                          <option value="Battery Replacement">
                            Battery Replacement Service
                          </option>
                          <option value="Roadside Assistance">
                            Roadside Assistance Firm
                          </option>
                          <option value="Automobile Detailing">
                            Automobile Detailing Service
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Services Offered</label>
                        <select
                          name="services"
                          value={formData.services}
                          onChange={handleChange}
                        >
                          <option value="">Select Service</option>
                          <option value="Car Rental">Car Rental</option>
                          <option value="Self Drive Rental">
                            Self Drive Rental
                          </option>
                          <option value="Driver on Hire">Driver on Hire</option>
                          <option value="Hourly Driver Service">
                            Hourly Driver Service
                          </option>
                          <option value="Outstation Driver">
                            Outstation Driver
                          </option>
                          <option value="Car Cleaning">Car Cleaning</option>
                          <option value="Interior Cleaning">
                            Interior Cleaning
                          </option>
                          <option value="Exterior Cleaning">
                            Exterior Cleaning
                          </option>
                          <option value="Full Body Wash">Full Body Wash</option>
                          <option value="Maintenance">
                            Car Maintenance / General Service
                          </option>
                          <option value="Oil Change">Oil Change</option>
                          <option value="Brake Service">Brake Service</option>
                          <option value="Engine Diagnostics">
                            Engine Diagnostics
                          </option>
                          <option value="Battery Replacement">
                            Battery Replacement
                          </option>
                          <option value="Tire Replacement">
                            Tire Replacement
                          </option>
                          <option value="AC Service">Car AC Service</option>
                          <option value="Towing">Emergency Towing</option>
                          <option value="Roadside Assistance">
                            Roadside Assistance
                          </option>
                          <option value="Flat Tire Fix">Flat Tire Fix</option>
                          <option value="Fuel Delivery">Fuel Delivery</option>
                          <option value="Jump Start">Battery Jump Start</option>
                          <option value="Spare Parts">Spare Parts Sales</option>
                          <option value="Car Accessories">
                            Car Accessories Installation
                          </option>
                          <option value="Windshield Repair">
                            Windshield Repair
                          </option>
                          <option value="Car Detailing">Car Detailing</option>
                          <option value="Paint & Dent Work">
                            Paint & Dent Work
                          </option>
                          <option value="Car Insurance Services">
                            Car Insurance Services
                          </option>
                          <option value="RTO Services">RTO Services</option>
                          <option value="Vehicle Inspection">
                            Vehicle Inspection
                          </option>
                          <option value="Car Wrapping">
                            Car Wrapping / Customization
                          </option>
                        </select>
                      </div>

                      {formData.firm === "Company" ? (
                        // COMPANY FIELDS
                        <>
                          <div className="form-group">
                            <label>Company Name</label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              placeholder="Enter company name"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>GST Number</label>
                            <input
                              type="text"
                              name="gstNumber"
                              value={formData.gstNumber}
                              placeholder="Enter GST number"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>CIN Number (Optional)</label>
                            <input
                              type="text"
                              name="cinNumber"
                              value={formData.cinNumber}
                              placeholder="Enter CIN number"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <label>Company Address</label>
                            <textarea
                              name="companyAddress"
                              value={formData.companyAddress}
                              placeholder="Enter Company Address"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Upload Registration Document</label>
                            <input
                              type="file"
                              name="registrationDoc"
                              onChange={handleFileChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Upload GST Certificate</label>
                            <input
                              type="file"
                              name="gstDoc"
                              onChange={handleFileChange}
                              required
                            />
                          </div>
                        </>
                      ) : (
                        // INDIVIDUAL / NON-COMPANY FIELDS
                        <>
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              placeholder="Enter Full Name"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Contact Number</label>
                            <input
                              type="tel"
                              name="contactNumber"
                              value={formData.contactNumber}
                              placeholder="Enter Phone Number"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Shop Name</label>
                            <textarea
                              name="shopName"
                              value={formData.shopName}
                              placeholder="Enter Shop Name"
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Address</label>
                            <textarea
                              name="individualAddress"
                              value={formData.individualAddress}
                              placeholder="Enter Address"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Upload Aadhar / PAN Card</label>
                            <input
                              type="file"
                              name="identityProof"
                              onChange={handleFileChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Upload Service Proof</label>
                            <input
                              type="file"
                              name="serviceProof"
                              onChange={handleFileChange}
                              required
                            />
                          </div>
                        </>
                      )}
                    </div>

                    <div className=" action-buttons mb-4">
                      <button
                        type="button"
                        onClick={() => handleBack(1)}
                        className="custom-btn"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="custom-btn full-width"
                        onClick={() => handleNext(3)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step company-registration">
                    <div className="form-row">
                      <div className="form-group">
                        <div className="form-group">
                          <label>Bank Name</label>
                          <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            placeholder="Enter Bank Name"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Account Number</label>
                        <input
                          type="text"
                          name="accountNumber"
                          value={formData.accountNumber}
                          placeholder="Enter Account Number"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>IFSC</label>
                        <input
                          type="text"
                          name="ifsc"
                          value={formData.ifsc}
                          placeholder="Enter IFSC Code"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Branch Name</label>
                        <input
                          type="text"
                          name="branch"
                          value={formData.branch}
                          placeholder="Enter Branch Name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Account Type</label>
                        <select
                          name="accountType"
                          value={formData.accountType}
                          onChange={handleChange}
                        >
                          <option value="Savings">Savings</option>
                          <option value="Current">Current</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group full-width">
                        <label>
                          UPI ID <small>(optional)</small>
                        </label>
                        <input
                          type="text"
                          name="upiId"
                          value={formData.upiId}
                          placeholder="Enter UPI ID"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className=" action-buttons mb-4">
                      <button
                        type="button"
                        onClick={() => handleBack(2)}
                        className="custom-btn"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="custom-btn full-width "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
