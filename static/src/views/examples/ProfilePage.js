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

var title0 = "";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      testName: "",
      testPrice: "",
      testDescribe: "",
      testImage: require("assets/img/placeholder.jpg"),
      testName1: "",
      testPrice1: "",
      testDescribe1: "",
      testImage1: require("assets/img/placeholder.jpg"),
      testName2: "",
      testPrice2: "",
      testDescribe2: "",
      testImage2: require("assets/img/placeholder.jpg"),
      testName3: "",
      testPrice3: "",
      testDescribe3: "",
      testImage3: require("assets/img/placeholder.jpg"),
      testName4: "",
      testPrice4: "",
      testDescribe4: "",
      testImage4: require("assets/img/placeholder.jpg"),
      testName5: "",
      testPrice5: "",
      testDescribe5: "",
      testImage5: require("assets/img/placeholder.jpg"),
      testName6: "",
      testPrice6: "",
      testDescribe6: "",
      testImage6: require("assets/img/placeholder.jpg"),
      testName7: "",
      testPrice7: "",
      testDescribe7: "",
      testImage7: require("assets/img/placeholder.jpg"),
      testName8: "",
      testPrice8: "",
      testDescribe8: "",
      testImage8: require("assets/img/placeholder.jpg"),
      loading: false,
      message: "",
    };
  }

  async fetchSearchResults() {
    const response = await fetch(
      "https://app.zenserp.com/api/v2/search?apikey=4016c570-c763-11ea-813f-47a27ba74723&q=zero+waste+" +
        this.state.query +
        "&tbm=shop"
    );
    const body = await response.json();
    this.setState({
      testName: body.shopping_results[0].title,
      testPrice: body.shopping_results[0].price,
      testDescribe: body.shopping_results[0].description,
      testImage: body.shopping_results[0].thumbnail,
      testName1: body.shopping_results[1].title,
      testPrice1: body.shopping_results[1].price,
      testDescribe1: body.shopping_results[1].description,
      testImage1: body.shopping_results[1].thumbnail,
      testName2: body.shopping_results[2].title,
      testPrice2: body.shopping_results[2].price,
      testDescribe2: body.shopping_results[2].description,
      testImage2: body.shopping_results[2].thumbnail,
      testName3: body.shopping_results[3].title,
      testPrice3: body.shopping_results[3].price,
      testDescribe3: body.shopping_results[3].description,
      testImage3: body.shopping_results[3].thumbnail,
      testName4: body.shopping_results[4].title,
      testPrice4: body.shopping_results[4].price,
      testDescribe4: body.shopping_results[4].description,
      testImage4: body.shopping_results[4].thumbnail,
      testName5: body.shopping_results[5].title,
      testPrice5: body.shopping_results[5].price,
      testDescribe5: body.shopping_results[5].description,
      testImage5: body.shopping_results[5].thumbnail,
      testName6: body.shopping_results[6].title,
      testPrice6: body.shopping_results[6].price,
      testDescribe6: body.shopping_results[6].description,
      testImage6: body.shopping_results[6].thumbnail,
      testName7: body.shopping_results[7].title,
      testPrice7: body.shopping_results[7].price,
      testDescribe7: body.shopping_results[7].description,
      testImage7: body.shopping_results[7].thumbnail,
      testName8: body.shopping_results[8].title,
      testPrice8: body.shopping_results[8].price,
      testDescribe8: body.shopping_results[8].description,
      testImage8: body.shopping_results[8].thumbnail,
    });
  }

  handleData = () => {
    const json = JSON.parse(this.state.results);
    this.setState({
      testName: json.shopping_results[0].title,
      testPrice: json.shopping_results[0].price,
      testDescribe: json.shopping_results[0].description,
      testImage: json.shopping_results[0].thumbnail,
    });
    console.log(title0);
    console.log(this.state.testName);
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
    console.log(this.state.query);
  };

  handleSearchClick = (event) => {
    if (!this.state.query) {
      this.setState({ results: {}, message: "" });
      console.log("no query provided");
    } else {
      this.setState({ loading: true, message: "" }, () => {
        this.fetchSearchResults();
        console.log("query provided");
      });
    }
  };

  render() {
    return (
      <>
        <ExamplesNavbar />
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
                      onChange={this.handleOnInputChange}
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
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName}</CardTitle>
                  <CardText>{this.state.testDescribe}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage1} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName1}</CardTitle>
                  <CardText>{this.state.testDescribe1}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice1}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage2} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName2}</CardTitle>
                  <CardText>{this.state.testDescribe2}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice2}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage3} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName3}</CardTitle>
                  <CardText>{this.state.testDescribe3}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice3}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage4} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName4}</CardTitle>
                  <CardText>{this.state.testDescribe4}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice4}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage5} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName5}</CardTitle>
                  <CardText>{this.state.testDescribe5}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice5}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage6} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName6}</CardTitle>
                  <CardText>{this.state.testDescribe6}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice6}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage7} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName7}</CardTitle>
                  <CardText>{this.state.testDescribe7}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice7}
                  </Button>
                </CardBody>
              </Card>
              <Card style={{ width: "20rem" }}>
                <CardImg top src={this.state.testImage8} alt="..." />
                <CardBody>
                  <CardTitle>{this.state.testName8}</CardTitle>
                  <CardText>{this.state.testDescribe8}</CardText>
                  <Button
                    style={{
                      backgroundColor: "navajowhite",
                      borderColor: "darkslategray",
                      color: "darkslategray",
                    }}
                  >
                    {this.state.testPrice8}
                  </Button>
                </CardBody>
              </Card>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}
export default ProfilePage;

