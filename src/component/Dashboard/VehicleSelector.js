import React, { useState, useEffect } from 'react';

const VehicleSelector = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getalls');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors or set an error state here
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {/* Render each item's data */}
            {/* Modify this part based on your actual data structure */}
            <p>ID: {item.id}</p>
            <p>Name: {item.customer_name}</p>
            {/* Include other fields here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleSelector;
