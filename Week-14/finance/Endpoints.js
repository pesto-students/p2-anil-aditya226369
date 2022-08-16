const db  = require('./dbConnection');


const express = require("express");
const request = require("request");

const app = express();
let login = false;
app.use(express.json()); 

app.get("/",(req,res)=>{
    res.send(`/login : get logged in,
    /logout : get logged out,
    /signup : pass the data in body and get the userId and key,
    /update : update the data on the basis of key,
    /portfolio : get all information of your account,
    /delete : delete the data with key,
    /updateexpense : update the expenses,
    /byyear : filter the expenses by year,
    /bymonth : fiter the expenses by month` );
})

app.get("/login",(req,res)=>{
    const key = req.query.key;
    db.updateLogin(key).then((ele)=>{res.send("You are now logged in");login=ele});
})

app.get("/logout",(req,res)=>{
    const key = req.query.key;
    db.updateLogOut(key).then((ele)=>{res.send("You are now logged out");login=ele});
})

app.post("/signup",(req,res)=>{
    const body = req.body;
    db.addData(body[0].name,body[0].information.assests,body[0].information.fixed_income,body[0].information.liabilities,body[0].information.expenses).then((ele)=>res.send({
        "userId: ": ele.id,
        "Authkey: ": ele.key,
        "Description": "You can now login using this userId as key"
    }))
})

app.post("/update",(req,res)=>{
    const key = req.query.key;
    const body = req.body;
    {login ? db.updateData(key,{assests:body.assets,fixed_income:body.fixed_income,liabilities:body.liabilities,expenses:body.expenses}).then((ele)=>res.send("Updated successfully")) : res.send("You are not logged in")}
})

app.get("/delete",(req,res)=>{
    const key = req.query.key;
    {login ? db.deleteData(key).then((ele)=>{
        ele.deletedCount>0 ? res.send("Successfuly deleted") : res.send("Not found any data for this key: "+key);
    }) : res.send("You are not logged in")}
})

app.get("/portfolio",(req,res)=>{
    const key = req.query.key;
    {login ? db.showData(key).then((ele)=>res.send(ele)) : res.send("You are not logged in")}
})

app.post("/updateexpense",(req,res)=>{
    const key = req.query.key;
    const pnl = req.body;
    {login ? db.updatePnl(key,pnl).then((item)=>{
        if(item.matchedCount>0){
            res.send("Expenses are added successfully");
        }else{
            res.send("No data found for the key: "+key);
        }
    }) : res.send("You are not logged in")}
})

app.get("/byyear",(req,res)=>{
    const key = req.query.key;
    const year = req.query.year;
    const result = []
    {login ? db.showData(key).then((ele)=>
    (res.send(
        ele[0].pnl.map((item)=>{
            if(item.year == parseInt(year)){
                result.push(item);
            }
        }),
        res.send(result)))) : res.send("You are not logged in")}
})

app.get("/bymonth",(req,res)=>{
    const key = req.query.key;
    const month = req.query.month;
    const result = []
    {login ? db.showData(key).then((ele)=>
    (res.send(
        ele[0].pnl.map((item)=>{
            if(item.month == month){
                result.push(item);
            }
        }),
        res.send(result)))) : res.send("You are not logged in")}
})

app.listen(3000,()=>{
    console.log("server running on 3000");
})