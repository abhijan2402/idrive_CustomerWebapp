import React, { useState } from "react";
import "./DriverLevelCreate.css"; // Custom CSS file

const DriverLevelCreate = () => {
  const [levelName, setLevelName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const [targets, setTargets] = useState({
    minRideComplete: false,
    minEarnAmount: false,
    maxCancellationRate: false,
    minReviewReceive: false,
  });

  return (
    <>
      <div className="driver-level-container">
        <div className="alert-box">
          🌟 At present, there is only one level available, which is the default
          level. When a driver logs in to the app for the first time, they will
          automatically be assigned the default level.
        </div>
        <div className="content-container">
          <h2>Add Driver Level</h2>
          <p className="info-text">
            The Current Level setup automatically assigns drivers the default
            level upon their initial app login.
          </p>
          <div className="form-container">
            <div className="form-input-container">
              <div className="driver-input-group">
                <label>Select Level Sequence</label>
                <select>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="driver-input-group">
                <label>Level Name</label>
                <input
                  type="text"
                  placeholder="Ex: Platinum"
                  value={levelName}
                  onChange={(e) => setLevelName(e.target.value)}
                />
              </div>
            </div>
            <div className="upload-container">
              <label>Level Icon</label>
              <div className="upload-box">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="preview-image"
                  />
                ) : (
                  <>
                    <input
                      type="file"
                      accept="image/png"
                      onChange={handleImageChange}
                    />
                    <span className="upload-text">Upload Image</span>
                  </>
                )}
              </div>
              <p className="upload-info">File Format - png | Max Size: 5MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="driver-level-container">
        <h2 className="driver-level-title">
          Set A Deserving Reward And Target For Upgrading To The Next Level
        </h2>
        <p className="driver-level-subtitle">
          Setting the Stage for Rewards and Targets. Once a target is completed
          or fulfilled move on to the next one
        </p>

        {/* Reward Type Section */}
        <div className="reward-section">
          <h3 className="section-title">Reward Type</h3>
          <p className="section-subtitle">
            The driver will receive that reward amount while completing this
            level targets
          </p>
          <select className="reward-dropdown">
            <option>Select reward type</option>
            <option>Bonus Points</option>
            <option>Cash Incentive</option>
          </select>
        </div>

        {/* Target Section */}
        <div className="target-section">
          <h3 className="section-title">
            Set Target To Promote From This Level
          </h3>
          <p className="section-subtitle">
            Here are some targets for reaching the next level
          </p>

          {/* Target Options */}
          <div className="target-options">
            <label className="checkbox-label">
              <div>
                <input
                  type="checkbox"
                  checked={targets.minRideComplete}
                  onChange={() =>
                    setTargets({
                      ...targets,
                      minRideComplete: !targets.minRideComplete,
                    })
                  }
                />
              </div>
              Minimum Ride Complete
            </label>
            {targets.minRideComplete && (
              <div className="target-input">
                <input type="number" placeholder="Minimum Ride Number" />
                <span>Points</span>
              </div>
            )}

            <label className="checkbox-label">
              <div>
                <input
                  type="checkbox"
                  checked={targets.minEarnAmount}
                  onChange={() =>
                    setTargets({
                      ...targets,
                      minEarnAmount: !targets.minEarnAmount,
                    })
                  }
                />
              </div>
              Minimum Earn Amount
            </label>

            <label className="checkbox-label">
              <div>
                <input
                  type="checkbox"
                  checked={targets.maxCancellationRate}
                  onChange={() =>
                    setTargets({
                      ...targets,
                      maxCancellationRate: !targets.maxCancellationRate,
                    })
                  }
                />
              </div>
              Maximum Cancellation Rate (%)
            </label>

            <label className="checkbox-label">
              <div>
                {" "}
                <input
                  type="checkbox"
                  checked={targets.minReviewReceive}
                  onChange={() =>
                    setTargets({
                      ...targets,
                      minReviewReceive: !targets.minReviewReceive,
                    })
                  }
                />
              </div>
              Minimum Review Receive
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="reset-btn">Reset</button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </>
  );
};

export default DriverLevelCreate;
