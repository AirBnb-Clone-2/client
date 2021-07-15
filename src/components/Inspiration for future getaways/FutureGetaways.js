import React from "react";
import styled from "styled-components";

const FutrueGetawaysDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5%;
    width:90%;
`
const Header = styled.header`
    display:flex;
    width:90%;
    margin-bottom:1rem;
    height:7vh;
    border: 1px solid grey;
    align-items:center
`
const Nav = styled.nav`
    display:flex;
    width:60rem;
    justify-content:space-between;
    a{
        padding:0.25rem

        &hover{
            background-color:grey
        }
    }
    
`
const FutrueGetaways = () => {
    return(
        <FutrueGetawaysDiv>
            <h1>Inspiration for future getaways</h1>
            <Header>
                <Nav>
                    <a>Destinations for arts & culture</a>
                    <a>Destinations for outdoor adventure</a>
                    <a>Mountain cabins</a>
                    <a>Beach destinations</a>
                    <a>Popular destinations</a>
                </Nav>
            </Header>
        </FutrueGetawaysDiv>
    )
}

export default FutrueGetaways;