import React, { useState, useEffect } from 'react';

const UserProfileUpdater = () => {
  const [userProfile, setUserProfile] = useState({ name: '', email: '', profilePic: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // API call to fetch user data
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        setUserProfile(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleUpdate = () => {
    setIsLoading(true);

    // Use FormData to handle the file upload
    const formData = new FormData();
    formData.append('name', userProfile.name);
    formData.append('email', userProfile.email);
    formData.append('profilePic', userProfile.profilePic); // Add the file object directly

    // Mock API call to update user data with FormData
    fetch('/api/user/update', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setUserProfile(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error updating user data:", error);
        setIsLoading(false);
      });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <input
        type="text"
        value={userProfile.name}
        onChange={e => setUserProfile({ ...userProfile, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={userProfile.email}
        onChange={e => setUserProfile({ ...userProfile, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="file"
        onChange={e => setUserProfile({ ...userProfile, profilePic: e.target.files[0] })}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfileUpdater;
