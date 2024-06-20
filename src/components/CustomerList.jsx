import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      selectedCustomerId: null,
    };
  }

  componentDidMount() {
    // Simulate fetching data from an API
    const fetchedCustomers = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    this.setState({ customers: fetchedCustomers });
  }

  selectCustomer = (id) => {
    this.setState({ selectedCustomerId: id });
    this.props.onCustomerSelect(id);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCustomerId !== this.state.selectedCustomerId) {
      console.log(`New customer selected: ID ${this.state.selectedCustomerId}`);
    }
  }

  componentWillUnmount() {
    console.log('CustomerList component is being unmounted');
  }

  render() {
    const { customers } = this.state;

    return (
      <div className="customer-list">
        <h3>Customers</h3>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <Link to={`/edit-customer/${customer.id}`}>{customer.name}</Link>
              <button onClick={() => this.props.deleteCustomer(customer.id)}>Delete</button>
              <button onClick={() => this.selectCustomer(customer.id)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CustomerList.propTypes = {
  onCustomerSelect: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
};

export default CustomerList;