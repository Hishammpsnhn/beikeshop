import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./auth.scss";
import logo from "../../public/images/1661417516766.webp";
import googleImg from "../../public/images/google.png";
import InputBox from "../../components/InputBox";
import { useNavigate } from "react-router-dom";

function Login({ forgotPassword, setForgotPassword, otp, change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (forgotPassword) {
      navigate('/otp')
      setForgotPassword(false)
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="bg-custom d-flex justify-content-center  vh-100">
      <Form
        className="form-container bg-light text-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="text-center img-container mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-top" />{" "}
        </div>
        <h2 className="text-center mb-3  fw-bold">
          {forgotPassword ? `Enter Number` : `Login`}
        </h2>
        <div className="p-3">
          {!forgotPassword ? (
            <>
              <InputBox type={"email"} placeholder={"Email"} />
              <InputBox type={"password"} placeholder={"password"} />
            </>
          ) : (
            <InputBox type={"number"} placeholder={"Phone Number"} />
          )}
          {!forgotPassword && (
            <p>
              <a
                href="#"
                onClick={() => setForgotPassword(true)}
                class="no-underline fw-bold text-center pe-auto"
              >
                Forgot Password
              </a>
            </p>
          )}
          {!forgotPassword && (
            <div className="my-3 d-flex justify-content-center">
              <Button
                className="hover w-100 rounded text-secondary fw-bolder d-flex m-auto align-items-center justify-content-center "
                variant="light border border-secondary "
                type="submit"
              >
                <img className="google_img" src={googleImg} alt="" />
                GOOGLE
              </Button>
            </div>
          )}
          <div className="my-3 d-flex ">
            <Button
              className="w-100 rounded text-light fw-bolder d-flex justify-content-center"
              variant="secondary"
              type="submit"
            >
              {forgotPassword ? `Send OTP` : `LOGIN`}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
