import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  //Here I Update debounced value only after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500); // Delay of 500ms

    // here the timer will be Clean up if inputValue changes
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type to search..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedSearch;
