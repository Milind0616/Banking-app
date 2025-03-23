import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [newUserName, setNewUserName] = useState("");

    // Fetch users from JSON Server
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Add a new user
    const addUser = async () => {
        if (!newUserName.trim()) return;
        const newUser = { name: newUserName };

        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        const data = await response.json();
        setUsers([...users, data]);
        setNewUserName("");
    };

    // Update a user
    const updateUser = async (id, newName) => {
        await fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newName }),
        });

        setUsers(users.map(user => user.id === id ? { ...user, name: newName } : user));
    };

    // Delete a user
    const deleteUser = async (id) => {
        await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Admin Panel</h2>

                {/* Add User Input */}
                <div>
                    <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder="Enter user name"
                    />
                    <button onClick={addUser}>Add User</button>
                </div>

                {/* Users List */}
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <span>{user.name}</span>
                            <button onClick={() => updateUser(user.id, prompt("Enter new name:", user.name))}>
                                Update
                            </button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Admin;
