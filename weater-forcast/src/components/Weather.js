import React from 'react';

class Weather extends React.Component {
    state = {  }
    render() {
        return (
          <div className="weather_container">
              <div className = "weather_title">
                <p> The Weather info will be displayed below</p>
              </div>
              <div className="weather_subinfo">
                {this.props.temprature && <p className="weather_subtitle">TEMPERATURE : {this.props.temprature} </p>}

              {this.props.city && <p className="weather_subtitle">CITY  : {this.props.city} </p>}

              {this.props.country && <p className="weather_subtitle"> COUNTRY : {this.props.country}</p>}

            {this.props.humidity && <p className="weather_subtitle">HUMIDITY : {this.props.humidity}</p>}

          {this.props.description && <p className="weather_subtitle">DESCRIPTION : {this.props.description}</p>}

          {this.props.error && <p className="error"> There is no information to be displayed</p>}

            </div>

          </div>
            );
    }
}

export default Weather;
