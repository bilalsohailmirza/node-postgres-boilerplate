const express = require("express");
const bodyParser = require("body-parser");
const prisma = require("./prismaClient");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
