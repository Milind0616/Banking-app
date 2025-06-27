import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Admin.css";

const Admin = () => {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({ username: "", password: "", name: "", mobileNumber: "", email: "" });
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [adminCredentials, setAdminCredentials] = useState({ username: "", password: "" });
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    // Admin Login
    const handleAdminLogin = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(adminCredentials),
            });

            if (!response.ok) {
                throw new Error("Login failed!");
            }

            const result = await response.json();
            if (result.success) {
                setAdminLoggedIn(true);
                alert("Admin logged in successfully!");
                fetchCustomers();
            } else {
                alert("Invalid admin credentials");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Server error. Please try again later.");
        }
    };

    // Fetch All Customers
    const fetchCustomers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/customers");
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    useEffect(() => {
        if (adminLoggedIn) fetchCustomers();
    }, [adminLoggedIn]);

    // Register a New Customer
    const registerCustomer = async () => {
        if (!newCustomer.username || !newCustomer.password || !newCustomer.name || !newCustomer.mobileNumber || !newCustomer.email) {
            alert("All fields are required!");
            return;
        }
        try {
            const response = await fetch("http://localhost:3000/api/customers/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCustomer),
            });

            const result = await response.json();
            if (result.success) {
                fetchCustomers();
                setNewCustomer({ username: "", password: "", name: "", mobileNumber: "", email: "" });
                alert("Customer Registered!");
            } else {
                alert("Error registering customer.");
            }
        } catch (error) {
            console.error("Error registering customer:", error);
        }
    };

    // Search Customer by Account Number or Mobile Number
    const searchCustomer = () => {
        const foundCustomer = customers.find(
            (customer) => customer.accountNumber === searchQuery || customer.mobileNumber === searchQuery
        );

        if (foundCustomer) {
            setSearchResult(foundCustomer);
        } else {
            alert("No customer found!");
            setSearchResult(null);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Admin Panel</h2>

                {!adminLoggedIn ? (
                    <div>
                        <h3>Admin Login</h3>
                        <input type="text" placeholder="Username" value={adminCredentials.username}
                            onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })} />
                        <input type="password" placeholder="Password" value={adminCredentials.password}
                            onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })} />
                        <button onClick={handleAdminLogin}>Login</button>
                    </div>
                ) : (
                    <>
                        {/* Register New Customer */}
                        <h3>Register New Customer</h3>
                        <input type="text" placeholder="Name" value={newCustomer.name}
                            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} />
                        <input type="text" placeholder="Username" value={newCustomer.username}
                            onChange={(e) => setNewCustomer({ ...newCustomer, username: e.target.value })} />
                        <input type="password" placeholder="Password" value={newCustomer.password}
                            onChange={(e) => setNewCustomer({ ...newCustomer, password: e.target.value })} />
                        <input type="text" placeholder="Mobile Number" value={newCustomer.mobileNumber}
                            onChange={(e) => setNewCustomer({ ...newCustomer, mobileNumber: e.target.value })} />
                        <input type="email" placeholder="Email" value={newCustomer.email}
                            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} />
                        <button onClick={registerCustomer}>Register</button>

                        {/* Search Customer */}
                        <h3>Search Customer</h3>
                        <input type="text" placeholder="Enter Account Number or Mobile Number" value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                        <button onClick={searchCustomer}>Search</button>

                        {searchResult && (
                            <div>
                                <h4>Customer Details</h4>
                                <p>Name: {searchResult.name}</p>
                                <p>Account Number: {searchResult.accountNumber}</p>
                                <p>Mobile Number: {searchResult.mobileNumber}</p>
                                <p>Email: {searchResult.email}</p>
                                <hr />
                            </div>
                        )}

                        {/* Display Customers */}
                        <h3>Customers List</h3>
                        <ul>
                            {customers.map((customer, index) => (
                                <li key={index}>
                                    {customer.name} - {customer.username} (Balance: ${customer.balance})
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};

export default Admin;
