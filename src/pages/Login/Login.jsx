import React, { useContext} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
 const {signUser} = useContext(AuthContext)
 const navigate = useNavigate();

 const handleLogin = (event) => {
       event.preventDefault()
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email, password)

       signUser(email, password)
       .then(result => {
          const createUser = result.user;
          console.log(createUser)
          navigate("/category/0")
       })
       .catch(error => {
         console.log(error)
       })
 }

  return (
    <Container className="mx-auto w-25">
      <h3>Please login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account <Link to="/register">register</Link>
        </Form.Text>
        <Form.Text className="text-success">
          <h4>Hello world</h4>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
