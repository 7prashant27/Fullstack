function program(input, n) {
    // input
    // write code here
    var out=input
    
    if(n===0){
        out=""
    }

    else{
        for(var i=0;i<n-1;i++){
            out+="\n"+input
        }
    }
return out

}


module.exports = program