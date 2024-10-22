import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError('Error fetching users');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>User Management App</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name or username" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={fetchUsers}>Refresh</button>
        </div>
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="user-list">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      {showDetails && (
        <>
          <p>Email: {user.email}</p>
          <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        </>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default App;
