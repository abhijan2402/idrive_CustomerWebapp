import React, { useState } from "react";
import "./BookingForm.css";
import { FaPlusCircle, FaTimes } from "react-icons/fa";

const BookingForm = () => {
  const [tripType, setTripType] = useState("");
  const [rideType, setRideType] = useState("");
  const [stops, setStops] = useState([""]);
  const [hours, setHours] = useState("");
  const [transmission, setTransmission] = useState("");
  const [driverType, setDriverType] = useState("");
  const [showCoupons, setShowCoupons] = useState(false);
  const [coupon, setCoupon] = useState(null);

  // Add/Remove stops
  const handleAddStop = () => setStops([...stops, ""]);
  const handleRemoveStop = (index) =>
    setStops(stops.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      tripType,
      rideType,
      stops,
      hours,
      transmission,
      driverType,
      coupon,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>🚘 Book Your Ride</h2>

      {/* Trip Type */}
      <div className="form-group">
        <label>Trip Type:</label>
        <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
          <option value="">Select</option>
          <option value="oneway">One Way</option>
          <option value="round">Round Trip</option>
          <option value="outstation">Out Station</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Ride Type */}
      <div className="form-group">
        <label>Ride Type:</label>
        <select value={rideType} onChange={(e) => setRideType(e.target.value)}>
          <option value="">Select</option>
          <option value="drop">Drop</option>
          <option value="round">Round</option>
        </select>
      </div>

      {/* Stops (From - To with Add Stop option) */}
      <div className="form-group">
        <label>From:</label>
        <input type="text" placeholder="Pickup Location" />
        <label>To:</label>
        <input type="text" placeholder="Drop Location" />
        <div className="stops-container">
          <label>Stops In Between:</label>
          {stops.map((stop, idx) => (
            <div key={idx} className="stop-field">
              <input type="text" placeholder={`Stop ${idx + 1}`} />
              <FaTimes onClick={() => handleRemoveStop(idx)} />
            </div>
          ))}
          <button
            type="button"
            className="add-stop-btn"
            onClick={handleAddStop}
          >
            <FaPlusCircle /> Add Stop
          </button>
        </div>
      </div>

      {/* Hours Selection */}
      <div className="form-group">
        <label>How many hours?</label>
        <select value={hours} onChange={(e) => setHours(e.target.value)}>
          <option value="">Select</option>
          <option value="paygo">Pay As You Go</option>
          {[1, 2, 4, 8, 12, 16, 20, 24].map((hr) => (
            <option key={hr} value={hr}>
              {hr} hr
            </option>
          ))}
        </select>
      </div>

      {/* Transmission */}
      <div className="form-group">
        <label>Transmission:</label>
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <option value="">Select</option>
          <option value="auto">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>

      {/* Driver Type */}
      <div className="form-group">
        <label>Choose Driver Type:</label>
        <select
          value={driverType}
          onChange={(e) => setDriverType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="premium">U1 Driver (Premium) - ₹499</option>
          <option value="normal">U1 Driver (Normal) - ₹299</option>
          <option value="pink">Pink Driver (Female) - ₹399</option>
        </select>
      </div>

      {/* Coupon Button */}
      <div className="form-group">
        <label>Coupon:</label>
        <button type="button" onClick={() => setShowCoupons(true)}>
          Apply/View Coupons
        </button>
      </div>

      {/* T&C */}
      <div className="form-group">
        <input type="checkbox" required /> I agree to the Terms & Conditions
      </div>

      {/* Submit */}
      <button type="submit" className="submit-btn">
        🚀 Request Driver
      </button>
    </form>
  );
};

export default BookingForm;
