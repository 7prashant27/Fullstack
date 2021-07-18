function program(input) {
    // input
    // console.log(input)
    // write code here  
    var total=0
    var discount=0

    if(input>=300)
    {
        discount=0.1 *input
    }
    else
    {
        discount=0
    }
    if(discount>100)
    {
        discount=100
    }    
    total=input - discount
    totalamount= input+" "+discount+" "+total
    // return output
    return (totalamount)
}


module.exports = program