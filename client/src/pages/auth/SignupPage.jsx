import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import googleImg from "../../public/images/google.png";

function SignupPage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login')
  };
  return (
    <div className="bg-secondary min-vh-100 d-flex align-items-center justify-content-end">
      <Row className="w-100 h-100 justify-content-end m-0">
        <Col xs={12} md={8} lg={10} className="h-100 p-0">
          <Card className="p-4 vh-100 w-100 overflow-hidden">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4 fw-bold text-primary">BeikeShop</h1>
                <h2 className="text-center mb-4 fw-bold">SIGN UP</h2>
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex w-100 mb-2">
                    <Form.Group controlId="formBasicUsername" className="w-100 me-2">
                      <Form.Control
                        className="p-2 border"
                        type="text"
                        placeholder="Username"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="w-100">
                      <Form.Control
                        className="p-2 border"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex w-100 mb-2">
                    <Form.Group controlId="formBasicDOB" className="w-100 me-2">
                      <Form.Control
                        className="p-2 border"
                        type="date"
                        placeholder="DOB"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhoneNumber" className="w-100">
                      <Form.Control
                        className="p-2 border"
                        type="number"
                        placeholder="PhoneNumber"
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex w-100 mb-4">
                    <Form.Group controlId="formBasicPassword" className="w-100 me-2">
                      <Form.Control
                        className="p-2 border"
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword" className="w-100">
                      <Form.Control
                        className="p-2 border"
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </Form.Group>
                  </div>
                  <Button
                    className="w-100 rounded text-light fw-bolder p-2"
                    variant="secondary"
                    type="submit"
                  >
                   SIGN UP
                  </Button>
                  <Button
                className="hover w-100 rounded text-secondary fw-bolder d-flex mt-2 m-auto align-items-center justify-content-center "
                variant="light border border-secondary "
                type="submit"
              >
                <img className="google_img" src={googleImg} alt="" />
                GOOGLE
              </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SignupPage;
