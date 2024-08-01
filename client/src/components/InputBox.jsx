import React from 'react'
import { Button, Form } from "react-bootstrap";
function InputBox({type,placeholder}) {
  return (
    <Form.Group controlId="formBasicEmail" className="py-2 ">
    <Form.Control
      className="p-2 border"
      type={type}
      placeholder={placeholder}
    //   value={email}
    //   onChange={(e) => setEmail(e.target.value)}
      required
    />
  </Form.Group>
  )
}

export default InputBox