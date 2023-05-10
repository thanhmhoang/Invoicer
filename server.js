const express = require('express');
const sequelize = require("./config/connection")
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const allRoutes = require("./controllers")
const exphbs = require("express-handlebars")
const path = require("path")

const app = express();
const PORT = process.env.PORT ||3000;

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge:1000*60*60*2,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(allRoutes);

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`listenin to port ${PORT}!`)
    })
});