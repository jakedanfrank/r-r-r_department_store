import React, { Component, } from "react";
import { Card, Header, Button, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

import axios from "axios";


class Stores extends Component {
  state = { stores: [], };

  componentDidMount() {
    axios.get("/api/stores")
      .then( response => {
        this.setState({ stores: response.data, });
      })
      .catch( error => {
        console.log(error);
      })
  }

  renderStores = () => {
    const { stores, } = this.state;

    if (stores.length <= 0)
      return <h3>No Stores</h3>
    return stores.map( store => (
      <Card key={store.id}>
        <Card.Content>
          <Card.Header>{ store.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/stores/${store.id}`} color="black">
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Stores</Header>
        <br />
        <Button as={Link} color="black" to="/stores/new">
          Add Store
        </Button>
        <br />
        <br />
        <Card.Group>
          { this.renderStores() }
        </Card.Group>
      </div>
    )
  }
}

export default Stores;