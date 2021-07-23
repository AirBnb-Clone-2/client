import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    background-color:#f7f7f7;
    height:34.4rem;
    padding-top:1.70rem;
`
const Section = styled.section`
    display:flex;
    width:90%;
    margin-left:5.75%;
    justify-content:space-between;
`
const Div = styled.div`
    diplay:flex;
    width:20%;
    h5{
        color:#222222;
        font-size:0.75rem;
        margin-bottom:0.5rem;
    }
    div{
        display:flex;
        flex-direction:column;
        a{
            margin:0.55rem 0;
            color:#2b2b2b;
            font-size:0.9rem;

            &:hover{
                text-decoration:underline;
            }
        }
    }
`
const HR = styled.hr`
    width:88.5%;
    margin-left:5.75%;
    color:#dddddd;
    border-style: none none solid none;
    margin-top:3.5rem;
    height:1px;
`
const BotDiv = styled.div`
    width:88.5%;
    margin-left:5.75%;
    height:3.5rem;
    display:flex;
    align-items:center;
    div{

    }
`
const Left = styled.div`
    width:30rem;
    height:20%;
    margin:auto 0rem;
    display:flex;
    align-items:center;
    p{
        font-size:0.5rem;
        margin:0rem 0.4rem;
    }
    a{
        font-size:0.8rem;
        &:hover{
            text-decoration:underline;
        }
    }
    span{
        font-size:0.9rem;
    }
`
const SVG = styled.svg`
    height:1.2rem;
    width:1.2rem;
`

const Right = styled.div`
    a{
        display:flex;
        align-items:center;
        text-decoration:underline;
        font-size:0.9rem;
        font-weight:480;
        color:#222222;
        svg{
            margin:auto 0.5rem;
        }
    }
`

const Bottom = ()=> {

    const clickEvent = (e) => {
        e.preventDefault();
        alert("Currently Not Available");
    }
    return (
        <Container>
            <Section>
                <Div>
                    <h5>ABOUT</h5>
                    <div>
                        <a onClick={clickEvent} href="">How Airbnb works</a>
                        <a onClick={clickEvent} href="">Newsroom</a>
                        <a onClick={clickEvent} href="">Airbnb 2021</a>
                        <a onClick={clickEvent} href="">Investors</a>
                        <a onClick={clickEvent} href="">Airbnb Plus</a>
                        <a onClick={clickEvent} href="">Airbnb Luxe</a>
                        <a onClick={clickEvent} href="">HotelTonight</a>
                        <a onClick={clickEvent} href="">Airbnb for Work</a>
                        <a onClick={clickEvent} href="">Made Possible by Hosts</a>
                        <a onClick={clickEvent} href="">Careers</a>
                        <a onClick={clickEvent} href="">Founder's Letter</a>
                    </div>
                </Div>
                <Div>
                    <h5>COMMUNITY</h5>
                    <div>
                        <a onClick={clickEvent} href="">Diversity & Belonging</a>
                        <a onClick={clickEvent} href="">Against Discrimination</a>
                        <a onClick={clickEvent} href="">Accessibility</a>
                        <a onClick={clickEvent} href="">Airbnb Associates</a>
                        <a onClick={clickEvent} href="">Frontline Stays</a>
                        <a onClick={clickEvent} href="">Guest Referrals</a>
                        <a onClick={clickEvent} href="">Gift cards</a>
                        <a onClick={clickEvent} href="">Airbnb.org</a>
                    </div>
                </Div>
                <Div>
                    <h5>HOST</h5>
                    <div>
                        <a onClick={clickEvent} href="">Host your home</a>
                        <a onClick={clickEvent} href="">Host an Online Experience</a>
                        <a onClick={clickEvent} href="">Host an Experience</a>
                        <a onClick={clickEvent} href="">Responsible hosting</a>
                        <a onClick={clickEvent} href="">Resource Center</a>
                        <a onClick={clickEvent} href="">Community Center</a>
                    </div>
                </Div>
                <Div>
                    <h5>SUPPORT</h5>
                    <div>
                        <a onClick={clickEvent} href="">Our COVID-19 Response</a>
                        <a onClick={clickEvent} href="">Help Center</a>
                        <a onClick={clickEvent} href="">Cancellation options</a>
                        <a onClick={clickEvent} href="">Neighborhood Support</a>
                        <a onClick={clickEvent} href="">Trust & Safety</a>
                    </div>
                </Div>
                
            </Section>
            <HR></HR>
            <BotDiv>
                <Left>
                    <span>© 2021 Airbnb, Inc.</span>
                    <p>•</p>
                    <a onClick={clickEvent} href="">Privacy</a>
                    <p>•</p>
                    <a onClick={clickEvent} href="">Terms</a>
                    <p>•</p>
                    <a onClick={clickEvent} href="">Sitemap</a>
                </Left>
                <Right>
                        <a onClick={clickEvent} href="">
                        <SVG aria-hidden="true" focusable="false" 
                        data-prefix="fas" data-icon="globe-asia" 
                        class="svg-inline--fa fa-globe-asia fa-w-16" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 496 512"><path fill="currentColor" 
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"></path></SVG>
                        English (US)</a>
                </Right>
            </BotDiv>
        </Container>
    )
}

export default Bottom;