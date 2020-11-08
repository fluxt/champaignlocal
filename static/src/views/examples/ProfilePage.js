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
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  // Label,
  // FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      stores: []
    };
  }

  handleOnInput = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  handleSearchClick = async (event) => {
    const query = this.state.query;
    console.log(query);
    const response = await fetch(
      `/api/stores/name-search?keyword=${query}`
    );
    const body = await response.json();
    if (body.ok) {
      const stores = body.stores;
      console.log(stores);
      this.setState({ stores });
    }
  };

  render() {
    return (
      <>
        {/* <ExamplesNavbar /> */}
        <ProfilePageHeader />
        <div className="section content">
          <Container>
            <div className="owner">
              <div className="name">
                <h2 className="title">
                  Find Your Store! <br />
                </h2>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  Enter in store Name and our list will update to show you what we have
                </p>
                <br />
                <>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-zoom-split"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Search"
                      onInput={this.handleOnInput}
                    />
                  </InputGroup>
                </>
                <br />
                <Button
                  className="btn-round"
                  color="default"
                  outline
                  onClick={this.handleSearchClick}
                >
                  Go!
                </Button>
              </Col>
            </Row>
            <br />
            <Row style={{ margin: "auto", justifyContent: "center" }}>
              {
                this.state.stores.map((store) => {
                  return (
                    <Card style={{ width: "30rem" }}>
                      <CardBody>
                        {/* <CardImg top src={this.state.testImage} alt="..." /> */}
                        <CardTitle>{store.name}</CardTitle>
                        <CardText>Store ID: {store.id}</CardText>
                        <CardText>Covid Restrictions: {store.covid_restrictions}</CardText>
                        <CardText>Hours: {store.hours}</CardText>
                        <CardText>Store Location: {store.location}</CardText>
                        <CardText>Store Owner: {store.owner}</CardText>
                        <CardText>ratings: {store.ratings}</CardText>
                        {/* <Button
                          style={{
                            backgroundColor: "navajowhite",
                            borderColor: "darkslategray",
                            color: "darkslategray",
                          }}
                        >
                          {store.id}
                        </Button> */}
                      </CardBody>
                    </Card>
                  )
                })
              }
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default ProfilePage;

