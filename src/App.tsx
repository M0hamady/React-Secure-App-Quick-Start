import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./components/Footer";
import { farmBackground, farmLogo } from "./assets";
import Profile from "./components/Auth/Profile";
import NotificationList from "./components/NotificationList";
import { NotificationProvider } from "./context/NotificationContext";
import Login from "./components/Auth/Login";

const App: React.FC = () => {
  return (
    <Router>
        <NotificationProvider> {/* Wrap with NotificationProvider */}
      <AuthProvider>
          <LoadingScreen images={[farmLogo, farmBackground]}>
            <Header />
            <NotificationList /> {/* Add NotificationList to show notifications */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Login />} />
            </Routes>
            <Footer />
          </LoadingScreen>
      </AuthProvider>
        </NotificationProvider>
    </Router>
  );
};

export default App;
