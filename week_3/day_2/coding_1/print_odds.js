function program(input) {
var x="1"
    if(input===0){
        x="NO"
    }
    for(var i=2;i<=input;i++){

    if(i%2===1){
        x+="\n"+i
    }
}
return x
}

module.exports = program
