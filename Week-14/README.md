## Finance API (Week14)
Contains following APIs:

login : get logged in,  
logout : get logged out,  
signup : pass the data in body and get the userId and key,  
update : update the data on the basis of key,  
portfolio : get all information of your account,  
delete : delete the data with key,  
addexpense : add the expenses,  
byyear : filter the expenses by year,  
bymonth : fiter the expenses by month  


## Build status

Build status : Completed

## Code style

**Nodejs & MongoDB**
	CRUD operations

## Tech/framework used

Nodejs & MongoDB

**Built with**

-   VSCode Editor and MongoDB client

## Features

You can do following thinks with this repository:

/login : get logged in,  
/logout : get logged out,  
/signup : pass the data in body and get the userId and key,  
/update : update the data on the basis of key,  
/portfolio : get all information of your account,  
/delete : delete the data with key,  
/addexpense : add the expenses,  
/byyear : filter the expenses by year,  
/bymonth : fiter the expenses by month  

## Code Example

Project is using MongoDB client connected with nodejs.

## Database Schema
```json
{
    "name":"String",
    "login":"Boolean",
    "key":"String",
    "pnl" : [{
        "year":"Number",
        "month":"String",
        "data":{
            "income":"Number",
            "expenses":"Number"
        }
    }],
    "information":{
	    "equity":"Number",
	    "assests":"Number",
	    "fixed_income":"Number",
	    "liabilities":"Number",
	    "expenses": "Number",
	}
}

```

## Design patterns Used
Factory pattern , Observer pattern , Builder pattern


## Code Output

Assignment Output:
please find attached pdfs for better understanding 
code and design : https://www.loom.com/share/7e4f8d2bdee641459034c5ab0d7703db
postman collections : https://www.loom.com/share/2757f35018ed4ecca617540469b0c517





## Credits

Anil Sir & Pesto

