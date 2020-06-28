import React from 'react'
import '../App.css';

function TheGang(props) {
    return (
        <div className="card" clicked = {props.clicked} style={cardStyle} onClick={() => props.clickGangMember(props.id)} className="click">
            <img className= "images" style={imgStyle} alt={props.name} src={props.image} />
            <div className="content">
                <strong>{props.name}</strong>
            </div>
        </div>
    );
}

const imgStyle = {
    borderRadius: "5px",
    boxShadow: "2px 5px 8px",
    height: "215px",
    width: "250px"
}

const cardStyle = {
    margin: "20px 60px 5px 60px",
    display: "inline-block",
    textAlign: "center"

}

export default TheGang;