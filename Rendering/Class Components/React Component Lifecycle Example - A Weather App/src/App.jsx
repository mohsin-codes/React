import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class WeatherApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      weatherData:null
    }
  }

  componentDidMount() {
    //fetch coordinates
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        this.setState({latitude, longitude});

        //fetch Weather Data
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({weatherData: data}))
        .catch(error => console.log(error))
      },
      (error) => {
        console.log(error);
      }
    );
  }

  static getDerivedStateFromError() {
    return {error: error.message};
  }

  componentDidCatch(){
    console.log(error);
    console.error(info);
  }


  render() {
    const {latitude, longitude, weatherData, error} = this.state;
    return (
      <>
        <h1>Current Weather</h1>
        {error ? (
          <p>Something went wrong!</p>
        ) :  (
          <>
            {latitude && longitude && (
              <p>
                Latitude: {latitude}, Longitude: {longitude}
              </p>
            )}
            {weatherData && (
              <>
                <p>Temperature : {weatherData.current.temperature_2m} {weatherData.current_units.temperature_2m}</p>
              </>
            )}
          </>
        )}
      </>
    )
  }
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
