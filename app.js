const request = require("request") 
const geoCoding = require("./utils/geocode.js")
const foreCast = require("./utils/forecast")

const location = process.argv[2]

if(!location){
    console.log("Please provide the location!!!")
}else{
    geoCoding(location,(error,response)=>{
        if(error){
            console.log(error)
        }else{
            foreCast(response.longitude,response.latitude,(error,temperature)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log("The temperature recorded in "+response.place+" is "+temperature)
                }
            })
        }
    })
}

