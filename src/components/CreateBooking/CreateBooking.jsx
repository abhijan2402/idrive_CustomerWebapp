import React, { useState } from "react";
import "./CreateBooking.css";

const CreateBooking = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [showStops, setShowStops] = useState(false);
  const [stops, setStops] = useState([""]);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStopChange = (value, index) => {
    const updatedStops = [...stops];
    updatedStops[index] = value;
    setStops(updatedStops);
  };

  const addStop = () => setStops([...stops, ""]);
  const removeStop = (index) => {
    const updatedStops = stops.filter((_, i) => i !== index);
    setStops(updatedStops);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup || !drop || !contactName || !contactNumber) {
      alert("Please fill all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Driver Accepted! 🎉");
      setIsSubmitting(false);
    }, 4000);
  };

  return (
    <div className="booking-container">
      {!isSubmitting ? (
        <>
          <h2 className="">Book Your Ride</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label>
                <i className="bi bi-geo-alt-fill me-2"></i>Pickup Location*
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <i className="bi bi-geo-alt-fill me-2"></i>Drop Location*
              </label>
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn add-stop-btn"
                onClick={() => setShowStops(!showStops)}
              >
                <i className="bi bi-signpost-2 me-1"></i>
                {showStops ? "Hide Stops" : "Add Multiple Stops"}
              </button>
            </div>

            {showStops && (
              <div className="stop-container animate">
                {stops.map((stop, index) => (
                  <div key={index} className="input-group mb-2">
                    <span className="input-group-text">
                      <i className="bi bi-signpost"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Stop ${index + 1}`}
                      value={stop}
                      onChange={(e) => handleStopChange(e.target.value, index)}
                    />
                    <button
                      type="button"
                      className="btn btn-danger remove-stop"
                      onClick={() => removeStop(index)}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-success add-another-stop"
                  onClick={addStop}
                >
                  <i className="bi bi-plus-circle me-1"></i> Add Another Stop
                </button>
              </div>
            )}

            <div className="form-group">
              <label>
                <i className="bi bi-person-fill me-2"></i>Point of Contact Name*
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <i className="bi bi-telephone-fill me-2"></i>Contact Number*
              </label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <i className="bi bi-chat-left-text-fill me-2"></i>Notes
                (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-control"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3 confirm-booking"
            >
              <i className="bi bi-check2-circle me-2"></i>Book Now
            </button>
          </form>
        </>
      ) : (
        <div className="finding-driver text-center animate">
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <h4>Finding a driver nearby...</h4>
          <p className="text-muted">
            Hold tight, we're getting things ready for you 🚗💨
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateBooking;
