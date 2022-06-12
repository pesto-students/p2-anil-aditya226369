const mathOperations = {
    sum: function(a,b){
        if(typeof(a)=="number" && typeof(b)=="number"){
            return a+b;
        }
        return "Input parameters are not numbers";
    },
    diff: function(a,b){
        if(typeof(a)=="number" && typeof(b)=="number"){
            return a-b;
        }
        return "Input parameters are not numbers";
    },
    product: function(a,b){
        if(typeof(a)=="number" && typeof(b)=="number"){
            return a*b;
        }
        return "Input parameters are not numbers";
    }
}

module.exports = mathOperations;