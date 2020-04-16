import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <Container>
        <Row>
          <Card
            id="wVolunteer"
            style={{width: '18rem', height: '18rem'}}
            className="btn m-5"
            onClick={this.handleClick}
          >
            <Card.Body className="align-items-center d-flex justify-content-center">
              <Card.Text>I WANT TO VOLUNTEER</Card.Text>
            </Card.Body>
          </Card>
          <Card
            id="nVolunteer"
            style={{width: '18rem', height: '18rem'}}
            className="btn m-5"
            onClick={this.handleClick}
          >
            <Card.Body className="align-items-center d-flex justify-content-center">
              <Card.Text>I NEED TO VOLUNTEER</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Home);
