import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DebouncedSearch from './PAGES/debounce/DebouncedSearch';
import BienVenu from './PAGES/bienvenu/BienVenu';
import FetchApi from './PAGES/fetchApi/FetchAPi';
import SearchFilter from './PAGES/searchFilter/SearchFilter';
import React, { useState } from 'react';
import Modal from './PAGES/modal/Modal';
import FormReducer from './PAGES/formreducer/FormReducer';
import UserProfileUpdater from './PAGES/handleUpdate/UserProfileUpdater';

function App() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BienVenu />} />
          <Route path="/debouncedSearch" element={<DebouncedSearch />} />
          <Route path="/fetchApi" element={<FetchApi />} />
          <Route path="/searchFilter" element={<SearchFilter />} />
          <Route path="/formreducer" element={<FormReducer />} />
          <Route path="/userProfileUpdater" element={<UserProfileUpdater />} />
        </Routes>
      </BrowserRouter>     

      <h1>React Modal</h1>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
