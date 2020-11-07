/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  async function handleCreateSubmit(event) {
    event.preventDefault();
    const target = event.target;
    let response;
    response = await fetch("/api/stores/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: target.elements.createName.value,
        location: target.elements.createLocation.value,
        hours: target.elements.createHours.value,
        owner: target.elements.createOwner.value,
        covid_restrictions: target.elements.createCovidRestrictions.value
      }),
    });
    response = await response.json();
    console.log("creating store");
    console.log(response);
  };

  async function handleDeleteSubmit(event) {
    event.preventDefault();
    const target = event.target;
    let response;
    response = await fetch ("/api/stores/delete", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json", 
      },
      body: JSON.stringify({
        id: target.elements.deleteid.value
      }),
    });
    response = await response.json();
    console.log("delete store");
    console.log(response);
  };

  async function handleUpdateSubmit(event) {
    event.preventDefault();
    const target = event.target;
    let response;
    response = await fetch ("api/stores/update", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name: target.elements.updateName.value,
        location: target.elements.updateLocation.value,
        hours: target.elements.updateHours.value,
        owner: target.elements.updateOwner.value,
        covid_restrictions: target.elements.updateCovidRestrictions.value
      }),
    });
    response = await response.json();
    console.log("update store");
    console.log(response);
  };

  return (
    <>
      <ExamplesNavbar /> 
      <LandingPageHeader /> 
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">What is ChampaignLocal?</h2>
                <h5 className="description">
                  We are a group of students dedicated to bringing more consumer awarness to the local 
                  buisnesses of the Champaign-Urbana area. Many people desire to want to give back to their
                  local communities but are unsure on where to start. We are here to make that search easier 
                  for you! Just simply search by a store name or category and we will display the stores that match
                  your needs!
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div> 


        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Meet the Creators</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Apoorva Josyula</CardTitle>
                        <h6 className="card-category">Frontend Designer</h6>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Rohan Kanianchalil</CardTitle>
                        <h6 className="card-category">Database Designer</h6>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Choi</CardTitle>
                        <h6 className="card-category">Backend Designer</h6>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> 


        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Add New Local Store!</h2>
                <Form className="contact-form" onSubmit={handleCreateSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Store Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Store Name" type="text" name="createName"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Store Location</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Location" type="text" name="createLocation"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Opening Hours</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Open Hours" type="text" name="createHours"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Store Owner</label>
                      <InputGroup>
                        <InputGroupAddon addonType = "prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Owner Name" type="text" name="createOwner"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Covid Restrictions</label>
                      <InputGroup>
                        <InputGroupAddon addonType = "prepend">
                        <InputGroupText>
                          <i className = "nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                        <Input placeholder = "OPEN, CLOSED, or OPEN(takeout)" type = "text" name="createCovidRestrictions"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>




        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Update Store Information</h2>
                <Form className="contact-form" onSubmit={handleUpdateSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Which Store?</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Store Name" type="text" name = "updateName"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Update Location</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Location" type="text" name = "updateLocation" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Update Hours</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="12:00am-12:00pm" type="text" name = "updateHours" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Update Store Owner</label>
                      <InputGroup>
                        <InputGroupAddon addonType = "prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name = "updateOwner" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Update Covid Restrictions</label>
                      <InputGroup>
                        <InputGroupAddon addonType = "prepend">
                        <InputGroupText>
                          <i className = "nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                        <Input placeholder = "OPEN, CLOSED, or OPEN(takeout)" type = "text" name = "updateCovidRestrictions"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Delete Store </h2>
                <Form className="contact-form" onSubmit={handleDeleteSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Which Store?</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Store id" type="text" name = "deleteid" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    <DemoFooter />
    </>
  );
}

export default LandingPage;
