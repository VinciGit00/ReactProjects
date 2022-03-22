import React from "react";
import california from '../images/california.png';

function Card() {
    return (
        <div className="col">
            <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                <img src={california} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">California roll</h5>
                    <p className="card-text">1.99$</p>
                    <button className="btn btn outline-danger"></button>
                </div>
            </div>
        </div>
    );

}

export default Card;