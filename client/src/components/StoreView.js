import React, { Component } from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class StoreView extends Component {
  state = { store: {}, };

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then( response => {
        this.setState({ store: response.data, });
      })
  }

  render() {
    const { name, } = this.state.store;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        <Button 
          color="black"
          onClick={this.props.history.goBack}
          >
            Back
          </Button>
      </div>
    )
  }
}

export default StoreView;