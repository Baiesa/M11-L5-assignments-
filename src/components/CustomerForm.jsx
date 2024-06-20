import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert, Container } from 'react-bootstrap';

// Controlled Components
// When React (via state) controls the value of an input, for example,
// useful for state management, form validation, "source of truth"
// i.e. state will always be up to date with current value. UI will always be updated

class CustomerForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      errors: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const errors = {};
    const { name, email, phone } = this.state;
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone is required';
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Submitted customer:', this.state);
      // Handle valid form submission here
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;
    const { isLoading, error } = this.props;

    return (
      <Container>
        {isLoading && <Alert variant="info">Submitting customer data...</Alert>}
        {error && (
          <Alert variant="danger">Error submitting customer data: {error}</Alert>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </Form.Group>
          <Form.Group controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CustomerForm;