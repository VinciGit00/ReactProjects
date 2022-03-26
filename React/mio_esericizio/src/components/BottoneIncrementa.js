import React from "react";

class BottoneIncrementa extends React.Component{
    render( ) {
        return(
            <button className = "Button" onClick={this.props.function} >
                Incrementa
            </button>
        );
    }
}

export default BottoneIncrementa