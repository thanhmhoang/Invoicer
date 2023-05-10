const express = require('express');
const router = require('express').Router();
const {Invoice, User, Department, Wholesaler} = require('../models');

router.get("/", async (req,res)=>{
    Invoice.findAll({
        include:[User]
    }).then(invData=>{
        const hbsData = invData.map(inv=>inv.get({plain:true}));
        console.log(hbsData);
        res.render("homepage",{
            allInvoices:hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/invoice/:id", async (req,res)=>{
    Invoice.findByPk(req.params.id,{
        include:[User]
    }).then(invData=>{
        const hbsData = invData.get({plain:true});
        hbsData.logged_id=req.session.logged_id
        console.log(hbsData);
        res.render("singleInvoice",hbsData)
    })
})

router.get("/department/invoice/:id", async (req,res)=>{
    Invoice.findByPk(req.params.id,{
        include:[Department]
    }).then(invData=>{
        const hbsData = invData.get({plain:true});
        hbsData.logged_id=req.session.logged_id
        console.log(hbsData);
        res.render("deptInvoice",hbsData)
    })
})

router.get("/login", async (req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/home")
    }
    res.render("login",{
        logged_in:req.session.logged_in
    })
})

router.get("/signup", async (req,res) => {
    try {
      if (req.session.userId) {
        res.redirect("/dashboard")
      } else {
        res.render("signup")
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  })

router.get("/home", async (req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    } else {
        User.findByPk(req.session.user_id,{
            include:[Invoice]
        }).then(userData=>{
            const hbsData = userData.get({plain:true})
            console.log(hbsData)
            hbsData.logged_in=req.session.logged_in;
            res.render("home",hbsData)
        })
    }
})

module.exports = router;