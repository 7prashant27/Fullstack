const time_Elapsed = (a,b) => {
    a = new Date(a)
    b = new Date(b)
    a = a.getTime()
    b = b.getTime()
    let diff
    console.log(a,b)
    if ( a > 0 &&  b > 0){
        if (a > b){
            diff = a-b
        }
        else{
            diff = b-a
        }
        //console.log(diff)
        diff = diff/1000
        if(diff == 1){
            return (`${diff} second ago`)
        }
        else if(diff < 60){
            return (`${diff} seconds ago`)
        }
        else if (diff >= 60 && diff < 3600){
            let x = Math.floor(diff/60)
            if(x == 1){return (`${x} minute ago`)}
            else{return (`${x} minutes ago`)}
            
        }
        else if (diff >= 3600 && diff < 86400){
            let x = Math.floor(diff/3600)
            if(x == 1){return (`${x} hour ago`)}
            else{return (`${x} hours ago`)}
        }
        else if (diff >= 86400){
            let x = Math.floor(diff/60/60/24)
            if(x == 1){return (`${x} day ago`)}
            else{return (`${x} days ago`)}
        }
    }
    else{
        if(isNaN(a) && isNaN(b) == false){
            return ("First argumnet has invalid Date")
        }
        else if(isNaN(a) == false && isNaN(b)){
            return ("Second argumnet has invalid Date")
        }
        else if(isNaN(b) && isNaN(b)){
            return ("Both argumnet has invalid Date")
        }
    }

}

let test = `Mon Aug 10 2020 14:00:00 GMT+0530 , Mon Aug 10 2020 14:00:01 GMT+0530
Mon Aug 10 2020 14:00:00 GMT+0530,Mon Aug 10 2020 14:00:20 GMT+0530
Mon Aug 10 2020 14:00:00 GMT+0530,Mon Aug 10 2020 14:05:00 GMT+0530
Mon Aug 10 2020 14:00:00 GMT+0530,Mon Aug 10 2020 16:40:00 GMT+0530
Mon Aug 10 2020 14:00:00 GMT+0530,Tue Aug 11 2020 14:01:00 GMT+0530
Mon Aug 10 2020 14:00:00 GMT+0530,Wed Aug 12 2020 14:01:00 GMT+0530
Aug Mon 10 2020 140:00:00 GMT+0530,Wed Aug 12 2020 14:01:00 GMT+0530
Mon Aug 10 2020 1400:00:00 GMT+0530,Aug Wed 12 2020 14:01yu:00 GMT+0530`

test = test.split("\n")

test = test.map(elem => elem.split(","))

test.forEach(elem => { console.log(time_Elapsed(elem[0],elem[1]))})

module.exports = time_Elapsed