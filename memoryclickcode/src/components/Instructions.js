import React from 'react'

function Instructions() {
    return (
        <div className = "instructions" style = {insStyle}>
            <h3 style = {{fontFamily: 'Lato, sansSerif', textDecoration: "underline", marginBottom: "15px"}}>Rules:</h3>
            <p>Click on images to earn points,</p><br></br><p>don't click on any twice!</p>
        </div>
    )
}

const insStyle = {
    boxShadow: "5px 10px 8px grey",
    width: "fit-content",
    lineHeight: "5px",
    padding: "8px",
    position: "absolute",
    left: "20px",
    top: "8rem",
    backgroundColor: "white",
    borderRadius: "5px"
}

export default Instructions;