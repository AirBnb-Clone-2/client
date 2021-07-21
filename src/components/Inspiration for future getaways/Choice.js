import React from "react";
import styled  from "styled-components";

const A = styled.a`
    display:flex;
    width:25%;
    line-height:1.25;
`

const Choice = (props) => {
    const {place,area} = props.info;

    return(
        <A onClick={(e)=>{e.preventDefault(); 
        alert(`${place} isn't available at the moment`)}} href="">
            <p>
                {place}
                <br/>
                {area}
            </p>
            
             
        </A>
    )
}

export default Choice;