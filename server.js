import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/customers/register", (req, res) => {
  const { name, accountNumber, mobileNumber, email, username, password } = req.body;

  // Simulate saving to a database
  console.log("New customer registered:", { name, accountNumber, mobileNumber, email, username });

  res.json({ success: true, message: "Customer registered successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});