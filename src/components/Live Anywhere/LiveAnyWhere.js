import React from "react";
import styled from "styled-components";

const LiveAnyWhereDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:87%;
    text-align:left;
    margin-left:6%;
    margin-top:2rem; 
    h1{
        margin-bottom:1.5rem;
    }
`
const Top = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    margin-bottom:3rem;
`
const Img = styled.a`
    width:24.2%;
    h3{
        margin:0rem;
    }
    div{
        width:100%;
    }
    img{
        width:21vw;
        height:21vw;
        border-radius:10px;
        margin-bottom:0.45rem;
    }
`
const Bottom = styled.div`
    width:100%;
    height: 32rem;
    border-radius:20px;
    background-image: url("imgs/LiveAnyWhere/bottom.jpg");
    background-position:top;
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

        h1{
            font-size:2.9rem;
            z-index:10;
            margin:0;
        }
        h3{
            margin-bottom:4rem;
        }
        a{
            display:flex;
            padding:1rem;
            background-color:black;
            width:7.5rem;
            color:white;
            justify-content:center;
            border-radius:10px;
        }
    }
`
const LiveAnyWhere = () => {
    return(
        <LiveAnyWhereDiv>
            <h1>Live anywhere</h1>
            <Top>
                <Img onClick={e=>e.preventDefault()} href="">
                    <div>
                        <img src="imgs/LiveAnyWhere/img0.jpg" alt="image for outdoor getaways"/>
                    </div>
                    <h3>Outdoor getaways</h3>
                </Img>
                <Img onClick={e=>e.preventDefault()} href="">
                    <div>
                        <img src="imgs/LiveAnyWhere/img1.jpg" alt="image for unique stays"/>
                    </div>
                    <h3>Unique stays</h3>
                </Img>
                <Img onClick={e=>e.preventDefault()} href="">
                    <div>
                        <img src="imgs/LiveAnyWhere/img2.jpg" alt="image for entire homes"/>
                    </div>
                    <h3>Entire homes</h3>
                </Img>
                <Img onClick={e=>e.preventDefault()} href="">
                    <div>
                        <img src="imgs/LiveAnyWhere/img3.jpg" alt="image for pets allowed"/>
                    </div>
                    <h3>Pets allowed</h3>
                </Img>
            </Top>
            <Bottom>
                <div>
                    <h1>The Greatest<br></br>Outdoors</h1>
                    <h3>Wishlists curated by Airbnb.</h3>
                    <a href="https://www.youtube.com">Get inspired</a>
                </div>
            </Bottom>
        </LiveAnyWhereDiv>
    )
}

export default LiveAnyWhere;