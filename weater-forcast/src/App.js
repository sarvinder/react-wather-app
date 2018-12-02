import React, { Component } from 'react';
import './App.css';
import Title from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    temprature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:"",

  }
}

   getWhether=(e)=> {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value
    console.log("the city to be searched for is : "+city);
    console.log("the country to be searched for is : "+country);

    const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=YOURIPADDRESS';

    let response =  fetch(API_ADDRESS)
    .then(response => response.json())
    .then( data =>{
      if(data.cod === '404'){
        console.log("there is an error" +data.message);
        this.setState(
        {
          temprature:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          description:undefined,
          error:data.message,
        });//
      }//ending if
      else{
        console.log(data);
        this.setState(
        {
          temprature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:undefined,
        });//ending state
    }//ending else
    });//ending then

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Title">
            <Title />
          </div>
          <Form getWhether = {this.getWhether}/>
          </div>
          <div className="weather_contaier">
            <Weather temprature={this.state.temprature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}/>
          </div>

      </div>
    );
  }
}

export default App;
