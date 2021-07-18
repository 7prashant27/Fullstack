let qr=require('qr-image')
 

let details={
    name:"Prashant Shekhar",
    age:"23",
    hobbies:"Sleeping"
}

let png_details="Name: " + details.name + "\n" + "Age: " + details.age + "\n" + "Hobbies: " + details.hobbies


let qr_png=qr.image(png_details, {type:"png", size: 2, margin:1})
qr_png.pipe(require('fs').createWriteStream('qr.png'))