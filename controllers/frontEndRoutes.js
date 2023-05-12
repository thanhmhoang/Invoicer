const express = require('express');
const router = require('express').Router();
const { Invoice, User, Department, Wholesaler } = require('../models');

router.get('/', (req, res) => {
    res.render("login", {
        loggedIn: req.session.loggedIn
    })
    if (req.session.loggedIn) {
        return res.redirect("/homepage")
    }
});

router.get("/login", async (req, res) => {
    res.render("login", {
        loggedIn: req.session.loggedIn
    })
    if (req.session.loggedIn) {
        return res.redirect("/homepage")
    }
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

// show homepage
router.get('/homepage', (req, res) => {
    if (!req.session.loggedIn) {
      return res.redirect('/login');
    }
    res.render('homepage', {
      loggedIn: true,
      user: req.session.user
    });
});

// add wholesaler page
router.get('/addwholesaler', (req, res) => {
    console.log("testing");
    if (!req.session.loggedIn) {
       return res.redirect('/login');
    }
    res.render('wholesaler', {
      loggedIn: true,
      user: req.session.user 
    });
});

// add invoice page
router.get('/addinvoice', (req, res) => {
    if (!req.session.loggedIn) {
      return res.redirect('/login');
    }
    res.render('invoice', {
      loggedIn: true,
      user: req.session.user 
    });
});

// generate invoices
router.get("/invoices", async (req, res) => {
    Invoice.findAll({
        include: [User]
    }).then(invData => {
        const hbsData = invData.map(inv => inv.get({ plain: true }));
        console.log(hbsData);
        res.render("logs", {
            allInvoices: hbsData,
            loggedIn: req.session.loggedIn
        })
    })
});

// add invoice page
router.get('/invoicelogs', (req, res) => {
    if (!req.session.loggedIn) {
      return res.redirect('/login');
    }
    res.render('logs', {
      loggedIn: true,
      user: req.session.user 
    });
});

module.exports = router;