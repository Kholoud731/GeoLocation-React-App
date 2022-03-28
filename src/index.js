import React from "react";
import  ReactDOM  from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import './css/SeasonDisplay.css'
class App extends React.Component {

    constructor(props){
        super(props);

        this.state={
            lat: null,
            error: ''
        }


    }

    componentDidMount(){

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude})
            
            },
            (error) => this.setState({error : error.message})
        );
    }
    
    render() { 


        return (
        <div style={{border: "10px solid red", height:"100vh"}}>
        { this.state.lat && <SeasonDisplay lat = {this.state.lat}/> }
        { this.state.error && <div> Error: {this.state.error} </div> }
        { !this.state.error && !this.state.lat && <Spinner msg="Please accept the location"/>}

        </div>

        );
    }
}
 
// export default App;

ReactDOM.render(<App/>, document.getElementById("root"))