import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout/Layout";
import TripHeatMap from "../components/TripHeatMap/TripHeatMap";
import UserLiveView from "../components/UserLiveView/UserLiveView";
import TripList from "../components/TripList/TripList";
import RefundRequestList from "../components/RefundRequestList/RefundRequestList";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import TransactionList from "../components/TransactionList/TransactionList";
import DriverLevel from "../pages/DriverLevel";
import DriverLevelAdd from "../pages/DriverLevelAdd";
import CompanyRegistrationForm from "../components/Signup/CompanyRegistrationForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<CompanyRegistrationForm />} />

      {/* Protected Routes with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/heatmap" element={<TripHeatMap />} />
        <Route path="/fleetview" element={<UserLiveView />} />
        <Route path="/triplist" element={<TripList />} />
        <Route path="/parcelrefund" element={<RefundRequestList />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/transactionlist" element={<TransactionList />} />

        {/* Driver Setup */}
        <Route path="/driver/level" element={<DriverLevel />} />
        <Route path="/driver/level/create" element={<DriverLevelAdd />} />
      </Route>

      {/* Redirect all unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
