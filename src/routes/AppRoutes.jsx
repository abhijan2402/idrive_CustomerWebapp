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
import Signup from "../components/Signup/Signup";
import DriverSetup from "../pages/DriverSetup";
import AddDriverForm from "../components/DriverSetup/AddDriverForm";
import DriverIdentity from "../components/DriverSetup/DriverIdentity";
import WithdrawMethodList from "../components/Withdraw/WithdrawMethodList";
import AddWithdrawMethod from "../components/Withdraw/AddWithdrawMethod";
import WithdrawRequests from "../components/Withdraw/WithdrawRequests";
import CustomerLevelSetup from "../pages/CustomerLevelSetup";
import AddCustomer from "../components/CustomerLevelSetup/AddCustomer";
import CompleteRegistration from "../components/Signup/CompleteRegistration";
import Trip from "../pages/Trip";
import TripSummary from "../components/Triplog/TripSummary";
import CustomerProfile from "../components/CustomerProfile/CustomerProfile";
import DriverProfile from "../components/DriverProfile/DriverProfile";
import CreateBooking from "../components/CreateBooking/CreateBooking";
import BookRide from "../pages/BookRide";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tripsummary" element={<TripSummary />} />
        <Route path="/heatmap" element={<TripHeatMap />} />
        <Route path="/registration" element={<CompleteRegistration />} />
        <Route path="/fleetview" element={<UserLiveView />} />
        <Route path="/triplist" element={<Trip />} />
        <Route path="/bookride" element={<BookRide />} />
        <Route path="/parcelrefund" element={<RefundRequestList />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/customerprofile" element={<CustomerProfile />} />
        <Route path="/driverprofile/:id" element={<DriverProfile />} />
        <Route path="/transactionlist" element={<TransactionList />} />
        {/* Driver Setup */}
        <Route path="/driver/level" element={<DriverLevel />} />
        <Route path="/driver/level/create" element={<DriverLevelAdd />} />
        <Route path="/driver/level/drvierlist" element={<DriverSetup />} />
        <Route path="/driver/level/adddriver" element={<AddDriverForm />} />
        <Route
          path="/driver/level/driverIdentity"
          element={<DriverIdentity />}
        />

        {/* Withdraw */}
        <Route
          path="/drive/level/withdrawmethod-list"
          element={<WithdrawMethodList />}
        />
        <Route
          path="/drive/level/addwithdraw-method"
          element={<AddWithdrawMethod />}
        />
        <Route
          path="/drive/level/addwithdraw-request"
          element={<WithdrawRequests />}
        />

        {/* Customer level Setup */}
        <Route
          path="/drive/level/customer-level-setup"
          element={<CustomerLevelSetup />}
        />
        <Route
          path="/drive/level/customer-add-new-customer"
          element={<AddCustomer />}
        />
      </Route>

      {/* Redirect all unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
