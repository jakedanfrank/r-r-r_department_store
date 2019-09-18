import React, { Component } from "react";
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class StoresForm extends Component {
  defaultValues = {name: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const store = { ...this.state, };
    axios.post("/api/stores", store)
      .then( response => {
        this.props.history.push("/stores");
      })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, } = this.state;

    return (
      <div>
        <Header as="h1">New Store</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
            />
          </Form.Group>
          <Form.Button color="black">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default StoresForm;