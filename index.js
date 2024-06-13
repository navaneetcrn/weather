const inputdata = document.querySelector('.entereddata');
const searchbox = document.querySelector('.searchicon')
searchbox.addEventListener('click',fetchdata)
async function fetchdata(){
   
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${inputdata.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0ec10c1b27mshb271cf9c7275b72p198fe8jsn5211f430fffd',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const placedata = inputdata.value;
    document.querySelector('.placepara').innerHTML=placedata;
    document.querySelector('.windimg').style.display ="block"
    document.querySelector('.humidityimg').style.display ="block"
    document.querySelector('.imgdiv img').style.display ="block"
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const data1 = data.current;
            const data2 = data.location;
            console.log(data2);
            const temperatureincelcius = data1.temp_c;
            const humidity = data1.humidity;
            const windspeed = data1.wind_kph;
            const country = data2.country;
            const region = data2.region;

            
            document.querySelector('.celciusdegree').innerHTML=temperatureincelcius+"&deg C";
            document.querySelector('.humiditypara').innerHTML=humidity+"% humidity"
            document.querySelector('.windspeedpara').innerHTML=windspeed+"Km/hr"
            document.querySelector('.region').innerHTML="Region :"+region;
            document.querySelector('.country').innerHTML="Country : "+country;
            

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}



