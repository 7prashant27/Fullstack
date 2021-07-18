function program(input,n) {
    
    input=Number(input)
    n=Number(n)
    total=0
    count=0
    var avg
    for(var i=0;i<=input;i++){
        if(i%n===0){
            total+=i
            count+=1
        }
        
    }
    return (sum/count)
}


module.exports = program