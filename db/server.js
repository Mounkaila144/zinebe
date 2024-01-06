const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
app.use("/api", require("./routes/auth.routes"));
app.use('/api/categories', require("./routes/category.routes"));
app.use('/api/products', require("./routes/product.routes"));
app.use('/uploads', express.static('uploads'));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));