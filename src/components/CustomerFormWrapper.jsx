import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';

function CustomerFormWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <CustomerForm params={params} navigate={navigate} />
  );
}

export default CustomerFormWrapper;