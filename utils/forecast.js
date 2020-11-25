const request = require("request")

const foreCast = (latitude,longitude,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=2581dded6edf7b8675f7e95df63cd5b7&query="+latitude+","+longitude
    request({url : url,json : true},((error,response)=>{
        if(error){
            callback("Error : API not working",undefined)
        }else{
            callback(undefined,response.body.current.temperature)
        }
        //console.log("the temp is "+data.current.temperature+" and feelike temp is "+data.current.feelslike)
    }))
}

module.exports=foreCast