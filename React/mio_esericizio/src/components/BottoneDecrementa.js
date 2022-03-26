import React from "react";

class BottoneDecrementa extends React.Component{
    render( ) {
        return(
            <button className="Button" onClick={this.props.function}>
                Decrementa
            </button>
        );
    }
}

export default BottoneDecrementa