const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const courseRoutes = require("./routes/course");
const userRoutes = require("./routes/user");

// Add the database connection
mongoose.connect("mongodb+srv://andreivon:admin1234@cluster0.qwsgp7m.mongodb.net/Full-stack?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

// Server setup
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//connect routes
app.use("/courses", courseRoutes);
app.use("/users", userRoutes);


app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };
