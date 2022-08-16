const mongoose = require("mongoose");

// connection with mongo
mongoose.connect("mongodb://localhost:27017/finance")
.then(()=>console.log("connection established...."))
.catch((err)=>console.log("Error occured while connection with database: "+err));

// schema of database
const financeSchema = new mongoose.Schema({
    name:String,
    login:Boolean,
    key:String,
    pnl : [{
        year:Number,
        month:String,
        data:{
            income:Number,
            expenses:Number
        }
    }],
    information:{
	    equity:Number,
	    assests:Number,
	    fixed_income:Number,
	    liabilities:Number,
	    expenses: Number,
	}
})
const FinanceData = new mongoose.model("Finance",financeSchema);
let login = false;


// add data to database
const addData = async(name,assests,fixed_income,liabilities,expenses)=>{
    try{
        const createData = new FinanceData({
            name:name,
            login:false,
            key:makeid(),
            pnl:[{
                year:(new Date()).getFullYear(),
                month:month[((new Date()).getMonth())],
                data:{
                    income : fixed_income,
                    expenses: expenses
                }
            }],
            information:{
	            equity:(assests+fixed_income)-(liabilities+expenses),
	            assests:assests,
	            fixed_income:fixed_income,
	            liabilities:liabilities,
	            expenses: expenses,
	        }
        })
        const result = await createData.save();
        return result;
    }catch(err){
        console.log("Error occured while Collection creating process: "+err);
    }
}



// show database 
const showData = async(key)=>{
    try{
        const show = await FinanceData.find({key:key});
        return show;
    }catch(err){
        console.log("Error occured in showing Data: "+err);
        return err;
    }}



// update database
const updateData = async(key,{name:name,assests:assests,fixed_income:fixed_income,liabilities:liabilities,expenses:expenses})=>{
    
    const getData = await showData(key);
    console.log(getData);
    const nname = name || getData.name;
    const nassests = assests || getData[0].information.assests;
    const nfixed_income = fixed_income || getData[0].information.fixed_income;
    const nliabilities = liabilities || getData[0].information.liabilities;
    const nexpenses = expenses || getData[0].information.expenses;
    const nequity = (nassests+nfixed_income)-(nliabilities+nexpenses);
    try{
        const update = await FinanceData.updateOne({
            key:key
        },{
            name:nname,
            login:getData.login,
            key:getData.key,
            pnl:[{
                year:getData.pnl[0].year,
                month:getData.pnl[0].month,
                data:{
                    income : nfixed_income,
                    expenses: nexpenses
                }
            }],
            information:{
	            equity:nequity,
	            assests:nassests,
	            fixed_income:nfixed_income,
	            liabilities:nliabilities,
	            expenses: nexpenses,
	        }
        })
    }catch(err){
        console.log(err);
    }
}

// update login
const updateLogin = async(key)=>{
    try{
        const log = await FinanceData.updateOne({key:key},{login:true});
        return login = true;
    }catch(err){
        console.log(err);
    }
}

// update logOut
const updateLogOut = async(key)=>{
    try{
        const logout = await FinanceData.updateOne({key:key},{login:false});
        return login = false;
    }catch(err){
        console.log(err);
    }
}

// update pnl expenses/income
const updatePnl = async(key,pnl)=>{
    try{
        const getData = await showData(key);
        const updatePnlExpenses = await FinanceData.updateOne({key:key},{
            pnl:[...getData[0].pnl,{
                year : pnl.year,
                month : pnl.month,
                data:{
                    income : pnl.income,
                    expenses: pnl.expenses
                }
            }],
            information:{
                equity : getData[0].information.equity - pnl.expenses + pnl.income,
	            assests:getData[0].information.assests,
	            fixed_income:getData[0].information.fixed_income + pnl.income,
	            liabilities:getData[0].information.liabilities,
	            expenses: getData[0].information.expenses + pnl.expenses,
            }
        })
        return updatePnlExpenses;
    }catch(err){
        console.log("Error occured in updating expenses: "+err);
        return {matchedCount:0};
    }
}

// delete the collection
const deleteData = async(key)=>{
    
            try{
                const deleteKey = await FinanceData.remove({key:key});
                return deleteKey;
            }catch(err){
                console.log("Error occured in showing Data: "+err);
                return err;
            }
}

module.exports.addData = addData;
module.exports.showData = showData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
module.exports.updateLogin = updateLogin;
module.exports.updateLogOut = updateLogOut;
module.exports.updatePnl = updatePnl;




const month = ['january','february','march','april','may','june','july','august','septmeber','october','november','december']

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  