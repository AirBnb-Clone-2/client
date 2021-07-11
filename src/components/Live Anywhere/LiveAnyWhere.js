import React from "react";
import styled from "styled-components";

const LiveAnyWhereDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    text-align:left;
    margin-left:5%;
    margin-top:2rem; 
    
    h1{
        margin-bottom:1.5rem;
    }
`
const Top = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between
`
const Img = styled.a`
    img{
        width:18rem;
        height:18rem;
        border-radius:10px;
    }
`
const Bottom = styled.div`
    width:100%;
    height: 32rem;
    border-radius:20px;
    background-image: url("imgs/LiveAnyWhere/bottom.jpg");
    background-position:bottom;
    background-size:cover;
    margin: 3rem 0rem;
    display:flex;
    align-items:center;
    

    div{
        height:40%;
        margin-left:5rem;
        display:flex;
        flex-direction:column;
        align-self:center;

    }
`

const LiveAnyWhere = () => {
    return(
        <LiveAnyWhereDiv>
            <h1>Live anywhere</h1>
            <Top>
                <Img href="https://www.youtube.com">
                    <img src="imgs/LiveAnyWhere/img0.jpg" alt="image for outdoor getaways"/>
                    <h3>Outdoor getaways</h3>
                </Img>
                <Img href="https://www.youtube.com">
                    <img src="imgs/LiveAnyWhere/img1.jpg" alt="image for unique stays"/>
                    <h3>Unique stays</h3>
                </Img>
                <Img href="https://www.youtube.com">
                    <img src="imgs/LiveAnyWhere/img2.jpg" alt="image for entire homes"/>
                    <h3>Entire homes</h3>
                </Img>
                <Img href="https://www.youtube.com">
                    <img src="imgs/LiveAnyWhere/img3.jpg" alt="image for pets allowed"/>
                    <h3>Pets allowed</h3>
                </Img>
            </Top>
            <Bottom>
                <div>
                    <h1>The Greatest<br></br>Outdoors</h1>
                    <h4>Wishlists curated by Airbnb.</h4>
                    <a>Get inspired</a>
                </div>
            </Bottom>
        </LiveAnyWhereDiv>
    )
}

export default LiveAnyWhere;