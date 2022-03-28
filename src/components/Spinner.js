import React from "react";

const Spinner = (props) => {
    return ( 

        <div className="ui segment">
            <div className="ui active inverted dimmer">
                    <div className="ui text loader">{props.msg}</div>
            </div>
          </div>
     );
}

Spinner.defaultProps = {
    msg: "Loading..."
}
 
export default Spinner;