## Finance API (Week14)
Contains following APIs:

login : get logged in,  
logout : get logged out,  
signup : pass the data in body and get the userId and key,  
update : update the data on the basis of key,  
portfolio : get all information of your account,  
delete : delete the data with key,  
addexpense : update the expenses,  
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
/addexpense : update the expenses,  
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





## Credits

Anil Sir & Pesto

