import React, { Component } from 'react';


//Componente riutilizzabile
class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={this.props.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome} roll</h5>
                        <p className="card-text">$ {this.props.prezzo}</p>
                        <button className="btn btn outline-danger"></button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;