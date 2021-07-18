// let title = "Thanks for visiting" 

// function append () {
// let i = 0

// while(i < title.length){
// 	let time = setTimeout( () => {
	
// 		let elem = document.getElementById("heading")
//   	elem.textContent += title[i]
//   	i++
// 		}, 100)
// 	}
// }
// append()
// <html>
// <head>
// </head>
// <body>

// <h2 id="heading"></h2>
  
 
// </body>
// </html>


// leap finance

// first round

// Q1)
//     *   
//    ***
//   *****
//  *******
// ********* 


let output = []
for(let i = 0 ; i< 5; i++){
  let row = ""
  for(let j = 0 ; j < 9; j++){
    if(j >= 5-i-1 && j <= 9-5-i){
      row+="*"
    }
    else{
      row+=" "
    }
  }
  output.push(row)
}

console.log(output.join("\n"))

// Q2)
// rotate matrix 90 anticlock wise


let input = [[1,2,3],[4,5,6],[7,8,9]]

output = [[3,6,9], [2,5,8] , [1,4,7]]



// Q3)
// 012
// 345
// 678

// if position is odd and in that position value is odd multiply the value with 2


// my s


let mat = [[1,2,3], [13,5,6],[7,8,9]];

// let newMat = [];


for(let i = 0 ; i < mat.length; i++){
//   let row = [];
  for(let j = 0 ; j < mat[i].length ; j++){
      if( ((i*mat[i].length)+j) % 2 != 0 && ((i*mat[i].length)+j) != 0){
        if(mat[i][j] % 2 != 0){
          mat[i][j] = mat[i][j]*2
        }
      }
  }
}

console.log(mat)



// Q1) walk through your resume

//  Q2) design a system  (my refrence week 12 day 2)


// class Observable {
  
    
// 	constructor(){
// 		  this.observers = []
// 		  this.data = {}
// 		  this.eventTypes = {}
// 		  // {temperature: "temp"}
// 	  }
	  
// 	  addObserver = (observer) => {
// 		   this.observers.push(observer)
// 	  }
	  
// 	  addObserver = (eventType, observer) => {
	  
// 	  }
	  
// 	  removeObserver = (observer) => {
// 		this.observers = this.observers.map(elem => elem.name !==  observer.name)
// 	  }
	  
// 	  dataUpdated = (newData) => {
// 		  this.data = newData
// 		  this.observers.forEach(elem => elem.getUpdate(data))
// 	  }
	  
// 	  dataUpdated = (eventType, newData) => {
// 		  let key = this.eventTypes.eventType
// 		  this.data[key] = newData
// 	  }
	  
//   }
  
//   class Observer {
  
// 	  constructor(name) {
// 		  this.name = name;
// 	  }
	  
// 	  getUpdate = (data) => {
// 		  // Some business logic
// 		  console.log("dataReceived, name = ", this.name , "new data:" , data);
// 	  }
//   }
  
  
//   // Usage
  
//   weatherForecast = new Observable();
  
//   delhiStation = new Observer("delhiStation");
//   bangaloreStation = new Observer("bangaloreStation");
  
//   weatherForecast.addObserver('temprature', delhiStation);
//   weatherForecast.addObserver('wind', bangaloreStation);
  
//   weatherForecast.dataUpdated('wind', {temp: 50, wind: 10});
  


//  round 3

// function print (){
// 	console.log(("name:", this.name, "place:", this.place))
// }

// let obj = {
// name:"Ritesh",
// place:"Ranchi"
// }

// print.call(obj)


// for (var i = 0; i < 3; i++) {
//   	setTimeout(function() { console.log(x); }, 1000);
//   }
// }


// var a = 10

// function print () {
// 	console.log(a)
// }

// print()

// console.log(a)
