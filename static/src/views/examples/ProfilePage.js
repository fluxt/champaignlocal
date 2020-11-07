import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
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
                    <Card style={{ width: "20rem" }}>
                      {/* <CardImg top src={this.state.testImage} alt="..." /> */}
                      <CardImg top src={require("assets/img/placeholder.jpg")} alt="..." />
                      <CardBody>
                        <CardTitle>{store.name}</CardTitle>
                        <CardText>{store.id}</CardText>
                        <Button
                          style={{
                            backgroundColor: "navajowhite",
                            borderColor: "darkslategray",
                            color: "darkslategray",
                          }}
                        >
                          {store.id}
                        </Button>
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

