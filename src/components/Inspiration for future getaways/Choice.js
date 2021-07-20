import React from "react";
import styled  from "styled-components";

const A = styled.a`
    display:flex;
    width:25%;
`

const Choice = (props) => {
    const {place,area} = props.info;

    return(
        <A onClick={(e)=>{e.preventDefault(); 
        alert(`${place} isn't available at the moment`)}} href="">
            {place}
            <br/>
            {area}
        </A>
    )
}

export default Choice;