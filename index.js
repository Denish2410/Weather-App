console.log("Hello00o");
const API_key="e54d54f2d092857a0aae96e344cbdaa3";

function renderWeatherinfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}
async function fetchWeatherDetails(){
    try{
        let city="goa";
    
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`); 
        const data=await response.json();
        console.log("Weather data:-> " , data);
        
        renderWeatherinfo(data);    
        

    }
    catch(err){
        console.log(err);
    }
}
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}
function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;
    console.log(lat);
    console.log(longi);

}
