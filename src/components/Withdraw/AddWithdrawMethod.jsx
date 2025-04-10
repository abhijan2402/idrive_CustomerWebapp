import React, { useState } from "react";
import "./AddWithdrawMethod.css";

const AddWithdrawMethod = () => {
  const [fields, setFields] = useState([
    { type: "", name: "", placeholder: "", required: true },
  ]);
  const [methodName, setMethodName] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const handleAddField = () => {
    setFields([
      ...fields,
      { type: "", name: "", placeholder: "", required: true },
    ]);
  };

  const handleFieldChange = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const handleSubmit = () => {
    const data = {
      methodName,
      isDefault,
      fields,
    };
    console.log("Submitted:", data);
  };

  return (
    <div className="withdraw-method-form">
      <div className="withdraw-method-form-header">
        <h2>Add New Withdraw Method</h2>
      </div>
      <div className="form-section">
        <div className="section-header">
          <div>
            <span>Setup Method Info</span>
            <i className="info-icon">ℹ️</i>
          </div>
          <button className="add-field-btn" onClick={handleAddField}>
            + Add More Fields
          </button>
        </div>

        <div className="form-row">
          <div className="form-row-input-container">
            <div className="form-row-input">
              <label className="checkbox-label">Method Name</label>
              <input
                type="text"
                placeholder="Select method name"
                value={methodName}
                onChange={(e) => setMethodName(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", width: "20%" }}>
            <input
              type="checkbox"
              checked={isDefault}
              onChange={() => setIsDefault(!isDefault)}
            />
            <label className="checkbox-label check-width">
              Make This Method Default
            </label>
          </div>
        </div>

        {fields.map((field, index) => (
          <div className="form-fields" key={index}>
            <div>
              <label htmlFor="" className="checkbox-label">
                Input Field Type
              </label>
              <select
                value={field.type}
                onChange={(e) =>
                  handleFieldChange(index, "type", e.target.value)
                }
                required
              >
                <option value="">Select Input Field Type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="checkbox-label">
                Field Name
              </label>
              <input
                type="text"
                placeholder="Select field name"
                value={field.name}
                onChange={(e) =>
                  handleFieldChange(index, "name", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label htmlFor="" className="checkbox-label">
                Placeholder Text
              </label>
              <input
                type="text"
                placeholder="Select placeholder text"
                value={field.placeholder}
                onChange={(e) =>
                  handleFieldChange(index, "placeholder", e.target.value)
                }
                required
              />
            </div>
            
            <div
              style={{ display: "flex", alignItems: "center", width: "20%" }}
            >
              <input
                type="checkbox"
                checked={field.required}
                onChange={() =>
                  handleFieldChange(index, "required", !field.required)
                }
              />
              <label className="checkbox-label check-width">
                Make This Field Required
              </label>
            </div>
          </div>
        ))}

        <div className="submit-btn-wrapper">
          <button className="submit-btn" onClick={handleSubmit}>
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWithdrawMethod;
