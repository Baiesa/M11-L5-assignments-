import React, { useRef, useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const name = nameRef.current.value;
    const price = parseFloat(priceRef.current.value);

    if (!name.trim()) {
      errors.name = 'Product name is required';
    }
    if (!price || price <= 0) {
      errors.price = 'Price must be a positive number';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const name = nameRef.current.value;
      const price = parseFloat(priceRef.current.value);
      onSubmit({ name, price }); // Call parent's onSubmit function with product data
      // Reset form fields and errors
      nameRef.current.value = '';
      priceRef.current.value = '';
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add/Edit Product</h3>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <label>
          Price:
          <input type="number" ref={priceRef} />
        </label>
        {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;