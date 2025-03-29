import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  HeatmapLayer,
  Marker,
} from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";
import "./TripHeatMap.css"; // Import the CSS file

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 20.5937, lng: 78.9629 }; // Default center (India)

const TripHeatMap = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setHeatmapData([
        {
          location: new window.google.maps.LatLng(28.7041, 77.1025),
          weight: 10,
        }, // Delhi
        { location: new window.google.maps.LatLng(19.076, 72.8777), weight: 8 }, // Mumbai
        {
          location: new window.google.maps.LatLng(12.9716, 77.5946),
          weight: 6,
        }, // Bangalore
      ]);
    }
  }, []);

  return (
    <div className="trip-heatmap-container">
      <div className="trip-header-container">
        <div className="trip-header">
          <h2>Trip Heat Map</h2>
          <p>Monitor your trips from here</p>
        </div>

        <div className="trip-controls">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-picker"
          />
          <button className="overview-btn">Overview</button>
          <button className="compare-btn">Compare</button>
        </div>
      </div>

      <div className="trip-content">
        <div className="trip-zones">
          <h3>Zone List</h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by zone name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <ul className="zone-list">
            {[
              { name: "All Zone", ride: 23, parcel: 22 },
              { name: "All Over The World", ride: 15, parcel: 18 },
              { name: "Asia", ride: 8, parcel: 4 },
              { name: "Egypt", ride: 0, parcel: 0 },
            ].map((zone, index) => (
              <li key={index} className="zone-item">
                <div>
                  <input type="checkbox" className="zone-checkbox" checked />
                </div>
                <div>
                  <span className="zone-name">{zone.name}</span>
                  <p className="zone-stats">
                    Ride: {zone.ride} | Parcel: {zone.parcel}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="trip-map">
          <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
            libraries={["visualization"]}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={4}
              center={center}
            >
              {heatmapData.length > 0 && (
                <HeatmapLayer data={heatmapData} options={{ radius: 40 }} />
              )}
              <Marker position={{ lat: 28.7041, lng: 77.1025 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default TripHeatMap;
