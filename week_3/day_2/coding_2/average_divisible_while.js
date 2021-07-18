function program(input,n) {
    
    input=Number(input)
    n=Number(n)
    total=0
    count=0
    for(var i=0;i<=input;i++){
        if(i%n===0){
            total+=i
            count++
        }
        
    }
    return (total/count)

}

module.exports = program