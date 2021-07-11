import React from "react";
import styled from "styled-components";

const ChoiceA = styled.a`

    display:flex;
    width: 21%;
    margin-top:1.5rem;


    img{
        width:4.5rem;
        height:4.5rem;
        border-radius:15px;
        margin:auto 0rem
    }
    div{
        margin:auto 1rem;
        text-align:left;
        line-height: 1.4;

        h4{
            margin:0;
        }
    }
`

const NearbyChoice = props => {
    const {choice} = props
    return(
        <ChoiceA href="https://www.youtube.com">
            <img src={choice.picture} alt={`picture of ${choice.state}`}/>
            <div>
                <h4>{choice.state}</h4>
                {`${choice.timeNeedToDrive} drive`}
            </div>
        </ChoiceA>
    )
}

export default NearbyChoice;