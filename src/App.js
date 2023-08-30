import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState }  from 'react';

function App() {
  const [temperature, setTemperature] = useState(0)
  const [selectedCity, setSelectedCity] = useState('London')

  useEffect(()=>{
     getWeather('London',51.50,  0.12)
  }, [])

  function getWeather( city,latitude, longitude){

    setSelectedCity(city)

    axios.get('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then(data=>{
      const temp = (data.data.current_weather.temperature)
      setTemperature(temp)

    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  return (
    <>
    <header></header>
    <main>
      <h1>My weather app</h1>
      <p>The current temperature at {selectedCity} is <span  id='temprature'>{temperature}°C</span></p>
      <div className='buttons'>
        <button onClick={()=>{getWeather("Malapuramm", 11.05, 76.07)}}>Malapuram</button>
        <button  onClick={()=>{getWeather("Kochi", 9.93, 76.26)}}>kochi</button>
        <button  onClick={()=>{getWeather("Varkkala" , 8.73, 76.71)}}>Varkkala</button>
      </div>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
