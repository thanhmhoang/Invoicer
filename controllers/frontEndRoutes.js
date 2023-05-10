const express = require('express');
const router = require('express').Router();
const { Invoice, User, Department, Wholesaler } = require('../models');

router.get('/', (req, res) => {
    res.render('login');
});

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
        return res.redirect("/homepage")
    }
    res.render("login", {
        logged_in: req.session.logged_in
    })
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
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }
    res.render('homepage', {
      logged_in: true,
      user: req.session.user 
    });
});

// add wholesaler page
router.get('/addwholesaler', (req, res) => {
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }
    res.render('wholesaler', {
      logged_in: true,
      user: req.session.user 
    });
});

// add invoice page
router.get('/addinvoice', (req, res) => {
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }
    res.render('invoice', {
      logged_in: true,
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
            logged_in: req.session.logged_in
        })
    })
});


module.exports = router;