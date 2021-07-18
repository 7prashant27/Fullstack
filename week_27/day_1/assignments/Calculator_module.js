let addition=(a,b) => {
    return a+b
}

let subtraction=(a,b) => {
    return a-b
}

let multiplication=(a,b) => {
    return a*b
}

let division=(a,b) => {
    if(b === 0){
        return("Sorry not a number")
    }
    return a/b
}

module.exports={addition,subtraction,multiplication,division}