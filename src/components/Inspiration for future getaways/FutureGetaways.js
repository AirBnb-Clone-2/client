import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Tab from "./Tab";
import Choice from "./Choice";

const FutrueGetawaysDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5%;
    width:90%;
`
const Header = styled.header`
    display:flex;
    width:90%;
    height:6vh;
    align-items:center;
`
const Nav = styled.nav`
    display:flex;
    width:60rem;
    justify-content:space-between;
    
    a{
        display:flex;
        padding:0.45rem;
        color:#536162;
        border-radius:5px;
        &:hover{
            background-color:rgb(247 247 247);
            
        }
    }
`
const HR = styled.hr`
    margin-top:-0.25rem;
    width:100%;
    color:silver;
    margin-bottom:1rem;
    border-style: none none solid none;
    height:1px;
`
const Choices = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const tabs = [
    {
        tabName:"Destinations for arts & culture",
        choices:[
            {
                place:"Phoenix",
                area:"Arizona"
            },
            {
                place:"Hot Springs",
                area:"Arkansas"
            },
            {
                place:"Los Angeles",
                area:"California"
            },
            {
                place:"San Diego",
                area:"California"
            },
            {
                place:"San Francisco",
                area:"California"
            },
            {
                place:"Barcelona",
                area:"Catalonia"
            },
            {
                place:"Prague",
                area:"Czechia"
            },
            {
                place:"Washington",
                area:"District of Columnbia"
            },
            {
                place:"Keswick",
                area:"England"
            },
            {
                place:"London",
                area:"England"
            },
            {
                place:"Scarborough",
                area:"England"
            },
            {
                place:"Sherwood Forest",
                area:"England"
            },
            {
                place:"York",
                area:"England"
            },
            {
                place:"Paris",
                area:"France"
            },
            {
                place:"Rhodes",
                area:"Greece"
            },
            {
                place:"Nashville",
                area:"Indiana"
            },
            {
                place:"Dublin",
                area:"Ireland"
            },
            {
                place:"Florence",
                area:"Italy"
            },
            {
                place:"Rome",
                area:"Italy"
            },
            {
                place:"Lisbon",
                area:"Lisbon"
            },
            {
                place:"Grande Isle",
                area:"Louisiana"
            },
            {
                place:"New Orleans",
                area:"Lousiana"
            },
            {
                place:"Marthas Vineyard",
                area:"Massachusetts"
            },
            {
                place:"South Haven",
                area:"Michigan"
            },
            {
                place:"Duluth",
                area:"Minnesota"
            },
            {
                place:"Amsterdam",
                area:"Netherlands"
            },
            {
                place:"New York",
                area:"New York"
            },
            {
                place:"Nice",
                area:"Provence-Alpes-Cote d'Azur"
            },
            {
                place:"Inverness",
                area:"Scotland"
            },
            {
                place:"Malaga",
                area:"Spain"
            },
            {
                place:"Valencia",
                area:"Spain"
            },
            {
                place:"Split",
                area:"Split-Dalmatia Country"
            },
            {
                place:"Nashville",
                area:"Tennessee"
            },
            {
                place:"Austin",
                area:"Texas"
            },
            {
                place:"Houston",
                area:"Texas"
            },
            {
                place:"Darthmouth",
                area:"United Kingdom"
            },
            {
                place:"Edinburgh",
                area:"United Kingdom"
            },
            {
                place:"Liverpool",
                area:"United Kingdom"
            },
            {
                place:"St Ives",
                area:"United Kingdom"
            },
            {
                place:"Lake Powell",
                area:"United States"
            },
            {
                place:"Lake Anna",
                area:"Virginia"
            },
            {
                place:"Leavenworth",
                area:"Washington"
            },
            {
                place:"Seattle",
                area:"Washington"
            },


        ]
    },
    {
        tabName:"Destinations for outdoor adventure",
    },
    {
        tabName:"Mountain cabins",
    },
    {
        tabName:"Beach destinations",
    },
    {
        tabName:"Popular destinations",
    }
    
    
    
    
    
]
const FutrueGetaways = () => {
    const [theTabs] = useState(tabs)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log("!")
    },[index])

    const chooseOne = index => {
        setIndex(index)
    }

    return(
        <FutrueGetawaysDiv>
            <h1>Inspiration for future getaways</h1>
            <Header>
                <Nav>
                    {
                    theTabs.map(tab=>{
                    const theIndex = theTabs.indexOf(tab)
                    return <Tab 
                    key={theIndex} 
                    i={theIndex}
                    index = {index}
                    chooseOne={chooseOne} name={tab.tabName}/>})}
                </Nav>
            </Header>
            <HR></HR>
            <Choices>
                {
                    tabs[index] && tabs[index].choices.map(choice=>
                    <Choice key={tabs[index].choices.indexOf(choice)} info={choice}/>)
                }
            </Choices>
     
        </FutrueGetawaysDiv>
    )
}

export default FutrueGetaways;