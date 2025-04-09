import React, { useState } from "react";
import "./AddDriverForm.css";

const AddDriverForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "admin@admin.com",
    identityType: "",
    identityNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="add-driver-container">
      <h2>Add Driver</h2>
      <div className="form-card">
        <h3 className="section-title">GENERAL INFO</h3>

        <div className="add-driver-container-details">
          <div className="form-grid">
            <div className="form-group">
              <label>
                First Name <span>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Ex: Maximilian"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Ex: Schwarzmüller"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" name="email" disabled value={form.email} />
            </div>

            <div className="form-group">
              <label>
                Identity Type <span>*</span>
              </label>
              <select
                name="identityType"
                value={form.identityType}
                onChange={handleChange}
              >
                <option value="">-- Select identity type --</option>
                <option value="aadhaar">Aadhaar</option>
                <option value="pan">PAN</option>
                <option value="license">License</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Identity Number <span>*</span>
              </label>
              <input
                type="text"
                name="identityNumber"
                placeholder="Ex: 3032"
                value={form.identityNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="upload-group">
            <label>Driver image</label>
            <div className="upload-box">
              <div className="upload-icon">📄</div>
              <span className="upload-text">
                <strong>Click to upload</strong>
                <br />
                Or drag and drop
              </span>
              <p className="upload-note">JPG JPEG PNG WEBP. Less Than 1MB</p>
            </div>
          </div>
        </div>
        <div className="upload-group-2 ">
          <label>Identity card image</label>
          <div className="upload-box">
            <div className="upload-icon">📄</div>
            <span className="upload-text">
              <strong>Click To Upload</strong>
              <br />
              Or Drag And Drop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDriverForm;
