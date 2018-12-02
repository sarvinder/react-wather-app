import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
  }

    render() {

        return (
            <div>
                <form onSubmit= {this.props.getWhether}>
                    <input type="text" name="city" placeholder="city..." ></input>
                    <input type="text" name="country" placeholder="country..."></input>
                    <button type="submit" >get weather ...</button>
                </form>
            </div>
        );
    }
}

export default Form;
