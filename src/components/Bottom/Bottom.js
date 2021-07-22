import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    background-color:#f7f7f7;
    height:30rem;
    padding-top:3rem;
`
const Section = styled.section`
    display:flex;
    width:90%;
    margin-left:5%;
    justify-content:space-between;
`
const Div = styled.div`
    diplay:flex;
    width:20%;
    div{
        display:flex;
        flex-direction:column;
        a{
            margin:0.7rem 0;
        }
    }

`

const Bottom = ()=> {
    return (
        <Container>
            <Section>
                <Div>
                    <h5>ABOUT</h5>
                    <div>
                        <a href="">How Airbnb works</a>
                        <a href="">Newsroom</a>
                        <a href="">Airbnb 2021</a>
                        <a href="">Investors</a>
                        <a href="">Airbnb Plus</a>
                        <a href="">Airbnb Luxe</a>
                        <a href="">HotelTonight</a>
                        <a href="">Airbnb for Work</a>
                        <a href="">Made Possible by Hosts</a>
                        <a href="">Careers</a>
                        <a href="">Founder's Letter</a>
                    </div>
                </Div>
                <Div>
                    <h5>COMMUNITY</h5>
                    <div>
                        <a href="">Diversity & Belonging</a>
                        <a href="">Against Discrimination</a>
                        <a href="">Accessibility</a>
                        <a href="">Airbnb Associates</a>
                        <a href="">Frontline Stays</a>
                        <a href="">Guest Referrals</a>
                        <a href="">Gift cards</a>
                        <a href="">Airbnb.org</a>
                    </div>
                </Div>
                <Div>
                    <h5>HOST</h5>
                    <div>
                        <a href="">Host your home</a>
                        <a href="">Host an Online Experience</a>
                        <a href="">Host an Experience</a>
                        <a href="">Responsible hosting</a>
                        <a href="">Resource Center</a>
                        <a href="">Community Center</a>
                    </div>
                </Div>
                <Div>
                    <h5>SUPPORT</h5>
                    <div>
                        <a href="">Our COVID-19 Response</a>
                        <a href="">Help Center</a>
                        <a href="">Cancellation options</a>
                        <a href="">Neighborhood Support</a>
                        <a href="">Trust & Safety</a>
                    </div>
                </Div>
            </Section>
        </Container>
    )
}

export default Bottom;