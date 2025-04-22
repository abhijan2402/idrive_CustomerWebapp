import React from "react";
import "../styles/BookRide.css";
import {
  FaCarSide,
  FaCalendarAlt,
  FaTruckMoving,
  FaMotorcycle,
  FaHandsWash,
  FaTruckPickup,
  FaParking,
  FaUserFriends,
} from "react-icons/fa";
import BookingForm from "../components/CreateBooking/BookingForm";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <FaCarSide />,
    title: "Book a Car for Today",
    desc: "Get on the road instantly with our quick booking.",
    color: "#007bff",
    type: "todaycar",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Schedule a Car Booking",
    desc: "Plan ahead and book your ride at your convenience.",
    color: "#28a745",
    type: "schedulecar",
  },
  {
    icon: <FaTruckMoving />,
    title: "Book a Commercial Vehicle",
    desc: "Heavy-duty rides for your business logistics.",
    color: "#ffc107",
    type: "commercialvehicle",
  },
  {
    icon: <FaMotorcycle />,
    title: "Book a Bike for Today",
    desc: "Zip through traffic with fast, agile bikes.",
    color: "#17a2b8",
    type: "biketoday",
  },
  {
    icon: <FaHandsWash />,
    title: "Book a Car Wash",
    desc: "Keep your car sparkling clean, anytime, anywhere.",
    color: "#fd7e14",
    type: "carwash",
  },
  {
    icon: <FaTruckPickup />,
    title: "Book a Towing Service",
    desc: "Stranded? We’ll get you moving again.",
    color: "#dc3545",
    type: "cartowing",
  },
  {
    icon: <FaParking />,
    title: "Book Valet Parking",
    desc: "Enjoy stress-free parking with our valet service.",
    color: "#6f42c1",
    type: "carvaletparking",
  },
  {
    icon: <FaUserFriends />,
    title: "Book for Someone Else",
    desc: "Book a ride for friends, family or clients.",
    color: "#20c997",
    type: "bookforothers",
  },
];

const BookRide = () => {
  const navigate = useNavigate();

  const handleBookingForm = (type) => {
    navigate(`/bookride-form/?${type}`);
  };

  return (
    <div className="bookride-container">
      <div className="bookride-header-container">
        <h1>🚗 Welcome to U1 Drive – Your Ride, Your Way!</h1>
        <p>Drive convenience, ride smart – every journey starts here.</p>
      </div>

      <div className="bookride-offer-services-section">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => handleBookingForm(service?.type)}
          >
            <div className="service-icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BookRide;
