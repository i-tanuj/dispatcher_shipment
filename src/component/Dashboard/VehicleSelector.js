import React, { useState, useEffect } from 'react';

const VehicleSelector = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVpemEiLCJpZCI6MTA3LCJpYXQiOjE2OTkyNzM2NDQsImV4cCI6MTY5OTI3NzI0NH0.H7u1_JG7KgAm111jkH17M9PA3dpQQV6ciSaHyAsCPXY'; // Replace with your token

    fetch('http://localhost:5000/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      return response.json();
    })
    .then(data => {
      setUser(data); // Assuming user details are received as an object
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      // Handle error: Show message, redirect to login, etc.
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default VehicleSelector;
