import React, { useState } from "react";
import "./UpdateProfile.css"; // Import custom CSS

const UpdateProfile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="update-profile-container">
      <h2 className="update-title">Update Profile</h2>

      <div className="profile-form">
        {/* Left Section: Form Fields */}
        <div className="profile-fields">
          <h3 className="section-title">GENERAL INFORMATION</h3>

          <div className="input-group">
            <div className="input-box">
              <label>First Name</label>
              <input type="text" placeholder="Super" />
            </div>
            <div className="input-box">
              <label>Last Name</label>
              <input type="text" placeholder="Admin" />
            </div>
          </div>

          <div className="input-box">
            <label>Email</label>
            <input type="email" placeholder="admin@admin.com" />
          </div>

          <div className="input-box">
            <label>
              Phone <span className="required">*</span>
            </label>
            <div className="phone-input">
              <select>
                <option>+1 🇺🇸</option>
                <option>+91 🇮🇳</option>
                <option>+44 🇬🇧</option>
              </select>
              <input type="text" placeholder="100000000" />
            </div>
          </div>

          <div className="input-group">
            <div className="input-box password-box">
              <label>Password</label>
              <div className="password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                />
                <span
                  className="toggle-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="input-box password-box">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Ex: ********"
                />
                <span
                  className="toggle-icon"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? "🙈" : "👁️"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Image Upload */}
        <div className="profile-image-section">
          <h3 className="section-title">Profile Image</h3>
          <div className="profile-image-placeholder">
            <img src="https://via.placeholder.com/120" alt="Profile" />
          </div>
          <p className="image-info">
            File Format - jpg png jpeg webp <br />
            Image Size - Maximum Size 5 MB.
          </p>
        </div>
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
};

export default UpdateProfile;
