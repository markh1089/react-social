import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function LogIn() {
    return (

        <Container>
            <Row className='align-items-center'>
                <Col className = 'col-7'>
                    <h1>Welcome to Barkker!</h1>
                    <p>Are you sick of all these social media posts of people at the beach or perfect meals out?</p>
                    <p>Well then you're barking up the <b>right</b> tree!</p>
                    <p>At Woofstragram we provide you a pet only social media site for all of your pets and animal companions!</p>
                    <p>If you haven't signed up yet then please fill in the sign up form and get your profile built!</p>
                </Col>
                <Col className = 'p-3 col-5'>
                    <Form className='border p-3'>
                    <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
              <Button className="btn btn-outline-white my-2 my-sm-0" type="submit">Register</Button>
                    </Form>
                </Col>          

            </Row>

        </Container>

    )
}

export default LogIn