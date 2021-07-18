function sum(a,b){
    if(arguments.length !== 2 ){
        return ("function want 2 arguments")
    }
    else{
        return Number(a)+Number(b)
    }
    
}

module.exports = sum