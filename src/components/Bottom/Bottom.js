import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    background-color:#f7f7f7;
    height:34.4rem;
    padding-top:1.70rem;
    border:1px #dddddd;
    border-style: solid none none none;
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
    justify-content:space-between;

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
    height:1rem;
    width:1rem;
`

const Right = styled.div`
    display:flex;
    a{
        display:flex;
        align-items:center;
        text-decoration:underline;
        font-size:0.9rem;
        font-weight:480;
        color:#222222;
        margin:auto 0.4rem;
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
                    <a href="https://www.airbnb.com/help/article/2855/privacy-policy">Privacy</a>
                    <p>•</p>
                    <a href="https://www.airbnb.com/help/article/2908/terms-of-service">Terms</a>
                    <p>•</p>
                    <a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a>
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
                        <a onClick={clickEvent} href="">
                        <SVG aria-hidden="true" focusable="false" 
                        data-prefix="fas" data-icon="dollar-sign" 
                        class="svg-inline--fa fa-dollar-sign fa-w-9" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 288 512"><path fill="currentColor" 
                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path></SVG>
                        USD
                        </a>
                        <a  href="https://www.facebook.com/airbnb">
                        <SVG aria-hidden="true" focusable="false" 
                        data-prefix="fab" data-icon="facebook-f" 
                        class="svg-inline--fa fa-facebook-f fa-w-10" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"><path fill="currentColor" 
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></SVG>    
                        </a>
                        <a  href="https://twitter.com/airbnb">
                        <SVG aria-hidden="true" focusable="false" 
                        data-prefix="fab" data-icon="twitter" 
                        class="svg-inline--fa fa-twitter fa-w-16" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"><path fill="currentColor" 
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></SVG>
                        </a>
                        <a  href="https://www.instagram.com/airbnb/">
                        <SVG aria-hidden="true" focusable="false" 
                        data-prefix="fab" data-icon="instagram" 
                        class="svg-inline--fa fa-instagram fa-w-14" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"><path fill="currentColor" 
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></SVG>
                        </a>
                </Right>
            </BotDiv>
        </Container>
    )
}

export default Bottom;