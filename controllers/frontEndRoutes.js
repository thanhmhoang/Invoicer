const express = require('express');
const router = require('express').Router();
const { Invoice, User, Department, Wholesaler } = require('../models');

router.get('/', (req, res) => {
    res.render('login');
});

// creating wholesaler
router.post("/", async (req, res) => {
    Invoice.findAll({
        include: [User]
    }).then(invData => {
        const hbsData = invData.map(inv => inv.get({ plain: true }));
        console.log(hbsData);
        res.render("logs", {
            allInvoices: hbsData,
            logged_in: req.session.logged_in
        })
    })
});

// creating invoice
router.post("/", async (req, res) => {
    Invoice.findAll({
        include: [User]
    }).then(invData => {
        const hbsData = invData.map(inv => inv.get({ plain: true }));
        console.log(hbsData);
        res.render("logs", {
            allInvoices: hbsData,
            logged_in: req.session.logged_in
        })
    })
});

// generate invoices
router.get("/invoice", async (req, res) => {
    Invoice.findAll({
        include: [User]
    }).then(invData => {
        const hbsData = invData.map(inv => inv.get({ plain: true }));
        console.log(hbsData);
        res.render("logs", {
            allInvoices: hbsData,
            logged_in: req.session.logged_in
        })
    })
});

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
        return res.redirect("/homepage")
    }
    res.render("login", {
        logged_in: req.session.logged_in
    })
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    User.findOne({ where: { email, password } })
      .then((user) => {
        if (user) {
          req.session.userId = user.id; 
          req.session.logged_in = true;
          res.redirect('/homepage');
        } else {
          res.redirect('/login');
        }
      })
      .catch((err) => {
        console.error('Please enter a valid username and password', err);
        res.redirect('/login');
      });
});

router.get("/signup", (req, res) => {
    try {
        if (req.session.userId) {
            res.redirect("/homepage")
        } else {
            res.render("login")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    User.create({ email, password })
        .then(() => {
            req.session.userId = user.id; 
            req.session.logged_in = true;
            res.redirect('/homepage');
        })
        .catch((err) => {
            console.error('Error creating user', err);
            res.redirect('/signup');
        });
});

module.exports = router;