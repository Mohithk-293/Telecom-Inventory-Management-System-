import React, { useState, useEffect } from 'react';
 
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, userId: null });
 
  // Fetching users data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/path/to/users.json'); // Update the URL as necessary
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
 
    fetchUsers();
  }, []);
 
  const handleUpdate = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
 
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
 
  // Show context menu on right-click
  const handleRightClick = (e, userId) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      userId: userId
    });
  };
 
  // Hide context menu when clicked elsewhere
  const handleClickOutside = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };
 
  const handleUpdateContextMenu = () => {
    const userToUpdate = users.find(user => user.id === contextMenu.userId);
    handleUpdate(userToUpdate.id, { ...userToUpdate, name: 'Updated Name' }); // Example update
    setContextMenu({ ...contextMenu, visible: false });
  };
 
  const handleDeleteContextMenu = () => {
    handleDelete(contextMenu.userId);
    setContextMenu({ ...contextMenu, visible: false });
  };
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;
 
  return (
    <div onClick={handleClickOutside}>
      <h1>User Management</h1>
 
      {/* Table displaying users */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
              onContextMenu={(e) => handleRightClick(e, user.id)} // Trigger right-click menu
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user.id, { ...user, name: 'Updated Name' })}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
           {contextMenu.visible && (
        <div
          className="context-menu"
          style={{
            position: 'absolute',
            top: contextMenu.y,
            left: contextMenu.x,
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}
        >
          <button className="context-menu-item" onClick={handleUpdateContextMenu}>
            Update User
          </button>
          <button className="context-menu-item" onClick={handleDeleteContextMenu}>
            Delete User
          </button>
        </div>
      )}
    </div>
  );
};
 
export default ManageUsers;