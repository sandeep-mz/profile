import React from "react";

const Section = ({heading, discription})=>{
    return(
        <div>
            <hr />
            <h1 className="a-heading">{heading}</h1>
            <p >{discription}</p>
        </div>
    )
}

export default Section;