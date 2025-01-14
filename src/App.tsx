import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Auth/Login";
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

const App: React.FC = () => {
  return (
    <Router> {/* وضع Router في الأعلى */}
      <AuthProvider> {/* AuthProvider داخل Router */}
        <LoadingScreen images={[farmLogo, farmBackground]}>
          <Header />
          <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* App Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />

            {/* Default to Login */}
            <Route path="*" element={<Login />} />
          </Routes>
          <Footer />
        </LoadingScreen>
      </AuthProvider>
    </Router>
  );
};

export default App;
