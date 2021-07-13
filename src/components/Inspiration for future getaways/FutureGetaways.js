import React from "react";
import styled from "styled-components";

const FutrueGetawaysDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5%;
    width:90%;
    border:1px solid grey;
`
const FutrueGetaways = () => {
    return(
        <FutrueGetawaysDiv>
            <h1>Inspiration for future getaways</h1>
            <nav>
                <a>Destinations for arts & culture</a>
                <a>Destinations for outdoor adventure</a>
                <a>Mountain cabins</a>
                <a>Beach destinations</a>
                <a>Popular destinations</a>
            </nav>
        </FutrueGetawaysDiv>
    )
}

export default FutrueGetaways;