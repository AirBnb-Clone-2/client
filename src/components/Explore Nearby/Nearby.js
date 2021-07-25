import React, {useState} from "react";
import NearbyChoice from "./NearbyChoice";
import styled from "styled-components";

const mockData = [
    {
        picture: "imgs/Nearby/img0.jpeg",
        state:"New York",
        timeNeedToDrive: "30 minute"
    },
    {
        picture: "imgs/Nearby/img1.jpeg",
        state:"Philadelphia",
        timeNeedToDrive: "2.5 hour"
    },
    {
        picture: "imgs/Nearby/img2.jpeg",
        state:"Virginia Beach",
        timeNeedToDrive: "8 hour"
    },
    {
        picture: "imgs/Nearby/img3.jpeg",
        state:"Washington",
        timeNeedToDrive: "5 hour"
    },
    {
        picture: "imgs/Nearby/img4.jpeg",
        state:"Boston",
        timeNeedToDrive: "4.5 hour"
    },
    {
        picture: "imgs/Nearby/img5.jpeg",
        state:"Arlington",
        timeNeedToDrive: "5.5 hour"
    },
    {
        picture: "imgs/Nearby/img6.jpeg",
        state:"Portland",
        timeNeedToDrive: "6.5 hour"
    },
    {
        picture: "imgs/Nearby/img7.jpeg",
        state:"North Bergen",
        timeNeedToDrive: "30 minutes"
    }
]

const ExploreNearbyDiv = styled.div`
    display:flex;
    flex-direction:column;
    height: 30vh;
    text-align:left;
    margin-top:2rem;
    margin-left:6%;
    margin-bottom:2rem;
    width:87%;

    h1{
        margin:0;
    }
`

const ContainerDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:100%;
    justify-content:space-between;
`

const Nearby = () => {
    const [nearbyChoice, setNearbyChoice] = useState(mockData)
    return(
        <ExploreNearbyDiv>
            <h1>Explore nearyby</h1>
            <ContainerDiv>
                {nearbyChoice.map(choice =><NearbyChoice 
                key={nearbyChoice.indexOf(choice)}choice={choice}/>)} 
            </ContainerDiv>
        </ExploreNearbyDiv>
    )
}

export default Nearby;