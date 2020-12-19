const express = require('express');
const router = express.Router();
const User = require('../models/form')

//add orders
router.post('/order/add',async function(req,res){
    let user = new User();
    user.OrderNo=req.body.OrderNo;
    user.Date=req.body.Date;
    user.Name=req.body.Name;
    user.AadharNo=req.body.AadharNo;
    user.Address=req.body.Address;
    user.Tehsil=req.body.Tehsil;
    user.District=req.body.District;
    user.PinCode=req.body.PinCode;
    user.State=req.body.State;
    user.Whatsapp=req.body.Whatsapp;
    user.Contact=req.body.Contact;
    user.CompanyName=req.body.CompanyName;
    user.Order.Details=req.body.Order.Details;
    user.Order.Qty=req.body.Order.Qty;
    user.Order.Rate=req.body.Order.Rate;
    user.Order.Amount=req.body.Order.Amount;

    user.BillAmt=req.body.BillAmt;
    user.TrasportChrg=req.body.TrasportChrg;
    user.TotalAmt=req.body.TotalAmt;
    user.Advance=req.body.Advance;
    user.DueAmt=req.body.DueAmt;

    user.DeliveryDate=req.body.DeliveryDate;
    user.DeliveryPlace=req.body.DeliveryPlace;
    user.Deposit.DDate=req.body.Deposit.DDate;
    user.Deposit.Amount=req.body.Deposit.Amount;
    user.Deposit.UTRNo=req.body.Deposit.UTRNo;
    user.Deposit.Bank=req.body.Deposit.Bank;
    user.AcHolder=req.body.AcHolder;
    user.AcNo=req.body.AcNo;
    user.IFSC=req.body.IFSC;
    user.DealerName=req.body.DealerName;
    user.DealerContact=req.body.DealerContact;

    await user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg:"didn't save"})
        }
        else{
            res.json({msg:"saved"})
        }
    })
});

//get orders

router.get('/order/show',async function(req,res){
   try{ 
        await User.find({},function(err,order){
                res.json(order)
            });
    }
    catch(err){
        console.log(err)
    }
    
});

router.get('/order/show/1/:mob_no',async function(req,res){
    let mob_no = req.params.mob_no;
    await User.findOne({Contact:mob_no},(err,record)=>{
        if(err)
        {
           console.log(err)
        }
        else{
            res.json(record)  
        }
    })
        
})

router.get('/order/show/2/:id',async function(req,res){
    let id = req.params.id;
    await User.findOne({OrderNo:id},(err,results)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json(results)  
        }
    })
})

router.get('/order/show/3/:adhr',async function(req,res){
    let adhr = req.params.adhr;
    await User.findOne({AadharNo:adhr},(err,results)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json(results)  
        }
    })
})

//delete orders

router.delete('/order/delete/mob/:cus_mobile',async function(req,res){
    var mob_no = req.params.cus_mobile;
   await User.deleteOne({Contact:mob_no},(err,msg)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(msg)        }
    })
})

router.delete('/order/delete/ordr/:order_num',async function(req,res){
    var ordr_no = req.params.order_num;
   await User.deleteOne({OrderNo:ordr_no},(err,msg)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(msg)        }
    })
})

router.delete('/order/delete/adhr/:adhaar_num',async function(req,res){
    var adhr_no = req.params.adhaar_num;
   await User.deleteOne({AadharNo:adhr_no},(err,msg)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(msg)        }
    })
})

//update orders

router.put('/order/update/1/:cus_mobile',async (req,res)=>{
    var mob_no = req.params.cus_mobile;
    var newdata = req.body
   await User.updateOne({Contact:mob_no},newdata,(err,data)=>{
       if(err)
       {
           console.log(err)
       }
       else
       {
           res.status(200).send(data)
       } 
    })
})

router.put('/order/update/2/:order_num',async (req,res)=>{
    var ordr_no = req.params.order_num;
    var newdata = req.body
   await User.updateOne({OrderNo:ordr_no},newdata,(err,data)=>{
       if(err)
       {
           console.log(err)
       }
       else
       {
           res.status(200).send(data)
       } 
    })
})

router.put('/order/update/3/:adhaar_num',async (req,res)=>{
    var adhr_no = req.params.adhaar_num;
    var newdata = req.body
   await User.updateOne({AadharNo:adhr_no},newdata,(err,data)=>{
       if(err)
       {
           console.log(err)
       }
       else
       {
           res.status(200).send(data)
       } 
    })
})


module.exports=router;