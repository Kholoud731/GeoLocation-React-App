import React from "react";
import '../css/SeasonDisplay.css'

const getSeason = (lat, month) => {

    if(month > 2 && month < 9){

        return lat>0 ? 'summer' : 'winter'
    } else {

        return lat>0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())

    return (  
<>

        {season === 'summer' &&  <><i className="left massive sun icon"></i> <h1>Let's hit the beach</h1> <i className="massive sun icon"></i></>}
        {season === 'winter' && <><i className="left massive snowflake icon"></i><h1>Burr, It's Chilly</h1><i className="massive snowflake icon"></i></>}
        </>
    );
}
 
export default SeasonDisplay;