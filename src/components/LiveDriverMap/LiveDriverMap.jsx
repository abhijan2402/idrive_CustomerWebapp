import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LiveDriverMap.css";
import { useNavigate } from "react-router-dom";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Dummy driver data
const dummyDrivers = [
  { id: 1, name: "Arjun Singh", lat: 28.6149, lng: 77.2091 },
  { id: 2, name: "Rahul Mehta", lat: 28.616, lng: 77.2105 },
  { id: 3, name: "Priya Sharma", lat: 28.612, lng: 77.207 },
];

const center = [28.6139, 77.209]; // Delhi

const LiveDriverMapLeaflet = () => {
  const [rideBooked, setRideBooked] = useState(false);
  const [acceptedDriver, setAcceptedDriver] = useState(null);
  const navigate = useNavigate();

  const handleBookRide = () => {
    const accepted =
      dummyDrivers[Math.floor(Math.random() * dummyDrivers.length)];
    setAcceptedDriver(accepted);
    setRideBooked(true);
  };

  return (
    <div className="map-container-wrapper">
      <div className="map-header">
        <h3>Nearby Drivers</h3>
        {/* {!rideBooked && (
          <button className="btn btn-success" onClick={handleBookRide}>
            Book Ride
          </button>
        )} */}
      </div>

      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {!rideBooked &&
          dummyDrivers.map((driver) => (
            <Marker key={driver.id} position={[driver.lat, driver.lng]}>
              <Popup>
                <div className="view-contianer">
                  <strong
                    onClick={() => navigate(`/driverprofile/${driver.id}`)}
                  >
                    {driver.name}{" "}
                    <span>
                      <i class="bi bi-eye-fill"></i>
                    </span>
                  </strong>
                </div>
              </Popup>
            </Marker>
          ))}

        {rideBooked && acceptedDriver && (
          <Marker position={[acceptedDriver.lat, acceptedDriver.lng]}>
            <Popup>
              <strong>{acceptedDriver.name}</strong>
              <br />
              <button
                className="btn btn-sm btn-success mt-1"
                onClick={() => navigate(`/driver/${acceptedDriver.id}`)}
              >
                View Details
              </button>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LiveDriverMapLeaflet;
