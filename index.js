const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require('dotenv').config();
const morgan = require("morgan");
const errorMiddleware = require("./middleware/Error");
const router = require("./routes");
const passport = require("passport");
const session = require('express-session');
const { connectDatabase, sqlConnection } = require("./config/connect");

require("./models");
require('./utils/passportConfig');
require('./config/cron')
const app = express();

app.use(session({ 
    secret: 'secret',
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: false } 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: '*', 
    credentials: true,                
    allowedHeaders: 'Content-Type,Authorization',
  }));

app.use(helmet());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "working finely" })
});

app.use("/api/v1", router);

app.use((req, res, next) => {
    return res.status(404).json({ status: 404, message: "Page not found on the server" });
});

app.use(errorMiddleware);

sqlConnection()
connectDatabase()

app.listen(port, () => {
    try {
        console.log(`Server is listing on Port ${port}`)
    } catch (error) {
        console.log(`Something is wrong`);
    }
});

process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down due to unhandled promise rejection ========>`);
});
