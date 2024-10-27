import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchFilter = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch items from the server
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
      setFilteredItems(response.data); // Initially set to all items
    };

    fetchItems();
  }, []);

  // Update filtered items based on search term
  useEffect(() => {
    const results = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
