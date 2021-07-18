function number(input){
    input=input.split("\n")
    input=input[1].split(" ").map(Number)
    var count=0
    for(i=0;i<input.length;i++){
        
        if(input[i])<0){
            count+=1
        }
    }
}
