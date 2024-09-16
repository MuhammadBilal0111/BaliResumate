const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");

// DB connection
mongoose
  .connect(process.env.CONN_STRING, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database has been connected"))
  .catch(() => console.log("Database has not been connected"));

// server initialization
app.listen(process.env.PORT, () => {
  console.log("Server has been started on http://localhost:3000");
});
