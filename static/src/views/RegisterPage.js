import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, UncontrolledPopover, PopoverBody } from "reactstrap";

// core components
import DefaultNavbar from "components/DefaultNavbar.js";

// images
import registerPageBackground from "assets/img/login-image.jpg";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <DefaultNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${registerPageBackground})`,
        }}
      >
        <div className="filter" />
        <Container style={{"marginTop": "unset"}}>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form" onSubmit={event=>event.preventDefault()}>
                  <label>Your Name</label>
                  <Input placeholder="Name" type="text" />
                  <label>Username</label>
                  <Input placeholder="Username" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <label></label>
                  <Input placeholder="Confirm Password" type="password" />
                  <Button block className="btn-round" color="danger" id="submit">
                    Register
                  </Button>
                  <UncontrolledPopover trigger="focus" placement="right" target="submit">
                    <PopoverBody>Registration Error. Make sure name and username are alphanumeric, password alphanumeric/special</PopoverBody>
                  </UncontrolledPopover>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;