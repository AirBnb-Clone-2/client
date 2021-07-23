import React from "react";
import styled  from "styled-components";

const A = styled.a`
    display:flex;
    width:25%;
    line-height:1.25;
    font-size:0.9rem;
`
const Span1 = styled.span`
    color:#222222;
`
const Span2 = styled.span`
    color:#808080;
`

const Choice = (props) => {
    const {place,area} = props.info;

    return(
        <A onClick={(e)=>{e.preventDefault(); 
        alert(`${place} isn't available at the moment`)}} href="">
            <p>
                <Span1>{place}</Span1>
                <br/>
                <Span2>{area}</Span2>
            </p>
            
             
        </A>
    )
}

export default Choice;