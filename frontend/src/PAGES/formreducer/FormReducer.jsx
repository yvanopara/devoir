import React, { useReducer } from 'react';

// here is ab object containing the form data
const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {},
};

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };

    case 'SET_ERRORS':
      return { ...state, errors: action.errors };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
};

const FormReducer = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const validate = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!formState.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      dispatch({ type: 'RESET_FORM' }); // this statementt is my reset form statement 
    } else {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })}
        />
        {formState.errors.name && <span style={{ color: 'red' }}>{formState.errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formState.email}
        onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })}
        />
        {formState.errors.email && <span style={{ color: 'red' }}>{formState.errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={formState.password}
          onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'password', value: e.target.value })}
        />
        {formState.errors.password && <span style={{ color: 'red' }}>{formState.errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormReducer;


/*
1. Reducer Function: Manages state updates based on actions:

UPDATE_FIELD: Updates specific form fields.
SET_ERRORS: Sets validation errors.
RESET_FORM: Resets the form to its initial state.

2.Validation Logic: The validate function checks for empty fields and returns any errors.

3.Form Submission:

On submit, it validates the fields.
If valid, displays a success alert and resets the form.
If invalid, updates the errors state.
*/