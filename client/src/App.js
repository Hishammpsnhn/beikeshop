import react, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import SignupPage from "./pages/auth/SignupPage";
import Login from "./pages/auth/LoginPage";
import OtpPage from "./pages/auth/OtpPage";
import ChangePassword from "./pages/auth/ChangePassword";
import Products from "./pages/user/Products";

function App() {
  const [ForgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="App">
      <Routes>

        {/* Authenication */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/login"
          element={
            <Login
              forgotPassword={ForgotPassword}
              setForgotPassword={setForgotPassword}
            />
          }
        />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/products" element={<Products/>} />

      </Routes>
    </div>
  );
}

export default App;
