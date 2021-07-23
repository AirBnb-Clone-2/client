import React from "react";
import styled from "styled-components";

const ExperiencesDiv = styled.div`
    display:flex;
    margin-top:1rem;
    margin-left:5%;
    flex-direction:column;
    width:90%;

    span{
        font-size:1.6rem;
    }
    margin-bottom:3rem;
`
const H1 = styled.h1`
    margin:0;
    font-size:2.15rem;
`

const Top = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-top:1.5rem;
    
`

const Container = styled.a`
    width:33%;

    img{
        width:25.8rem;
        height:25.8rem;
        border-radius:10px;
    }
    h3{
        margin-top:0.4rem;
        margin-bottom:0.4rem;
    }
    h5{
      margin:0;  
    }
`

const Bottom = styled.div`
    margin-top:5rem;
    background-image:url("imgs/DiscoverExperiences/bottom.jpg");
    height:30rem;
    width:100%;
    border-radius:15px;
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;

    div{
        width:25%;
        color:white;
        margin-left:7%;
        height:50%;
    }
    
    h1{
        margin:0;
        font-size:3.25rem;
    }
    h4{
        margin-top:0;
        margin-bottom:3rem;
    }

    a{
        margin-top:0.5rem;
        background-color:#F9F9F9;
        padding:0.9rem 1.25rem;
        border-radius:10px;
    }
`

const DiscoverExperiences = ()=>{
    return(
        <ExperiencesDiv>
            <H1>Discover Experiences</H1>
            <span>Unique activities with local experts--in person or online</span>
            <Top>
                <Container href="https://www.google.com">
                    <img src="imgs/DiscoverExperiences/img0.jpg" alt="picture that show outdoor collection"/>
                    <h3>Outdoor collection</h3>
                    <h5>Experiences that immerse you in nature.</h5>
                </Container>
                <Container href="https://www.google.com">
                    <img src="imgs/DiscoverExperiences/img1.jpg" alt="picture that shows online experiences"/>
                    <h3>Online Experiences</h3>
                    <h5>Live,interactive activities led by Hosts.</h5>
                </Container>
                <Container href="https://www.google.com">
                    <img src="imgs/DiscoverExperiences/img2.jpg" alt="picture that shows experiences"/>
                    <h3>Experiences</h3>
                    <h5>Local things to do, whereever you are.</h5>
                </Container>
            </Top>
            <Bottom>
                <div>
                    <h1>Try hosting</h1>
                    <br></br>
                    <h4>Earn extra income and unlock new opportunities by sharing your space.</h4>
                    <a href="https://www.google.com">Learn more</a>
                </div>
            </Bottom>
        </ExperiencesDiv>
    )
}

export default DiscoverExperiences;