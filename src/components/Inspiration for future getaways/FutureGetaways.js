import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./Tab";
import Choice from "./Choice";

const Container = styled.div`
    width:100%;
    hr{
        margin-bottom:0rem;
    }
`
const FutrueGetawaysDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:6%;
    width:87%;
`
const Header = styled.header`
    display:flex;
    width:90%;
    height:5vh;
    margin-left:-1%;
    align-items:center;
    margin-bottom:0rem;
`
const Nav = styled.nav`
    display:flex;
    width:58rem;
    height:100%;
    justify-content:space-between;
    
    a{
        display:flex;
        padding:1vh;
        color:#717171;
        font-size:0.9rem;
        font-weight:450;
        border-radius:5px;
        &:hover{
            background-color:rgb(247 247 247);
        }
    }
`
const Choices = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding-bottom:4rem;
    border:1px #dddddd;
    border-style: solid none none none;
`
const tabs = [
    {
        tabName: "Destinations for arts & culture",
        choices: [
            {
                place: "Phoenix",
                area: "Arizona"
            },
            {
                place: "Hot Springs",
                area: "Arkansas"
            },
            {
                place: "Los Angeles",
                area: "California"
            },
            {
                place: "San Diego",
                area: "California"
            },
            {
                place: "San Francisco",
                area: "California"
            },
            {
                place: "Barcelona",
                area: "Catalonia"
            },
            {
                place: "Prague",
                area: "Czechia"
            },
            {
                place: "Washington",
                area: "District of Columnbia"
            },
            {
                place: "Keswick",
                area: "England"
            },
            {
                place: "London",
                area: "England"
            },
            {
                place: "Scarborough",
                area: "England"
            },
            {
                place: "Sherwood Forest",
                area: "England"
            },
            {
                place: "York",
                area: "England"
            },
            {
                place: "Paris",
                area: "France"
            },
            {
                place: "Rhodes",
                area: "Greece"
            },
            {
                place: "Nashville",
                area: "Indiana"
            },
            {
                place: "Dublin",
                area: "Ireland"
            },
            {
                place: "Florence",
                area: "Italy"
            },
            {
                place: "Rome",
                area: "Italy"
            },
            {
                place: "Lisbon",
                area: "Lisbon"
            },
            {
                place: "Grande Isle",
                area: "Louisiana"
            },
            {
                place: "New Orleans",
                area: "Lousiana"
            },
            {
                place: "Marthas Vineyard",
                area: "Massachusetts"
            },
            {
                place: "South Haven",
                area: "Michigan"
            },
            {
                place: "Duluth",
                area: "Minnesota"
            },
            {
                place: "Amsterdam",
                area: "Netherlands"
            },
            {
                place: "New York",
                area: "New York"
            },
            {
                place: "Nice",
                area: "Provence-Alpes-Cote d'Azur"
            },
            {
                place: "Inverness",
                area: "Scotland"
            },
            {
                place: "Malaga",
                area: "Spain"
            },
            {
                place: "Valencia",
                area: "Spain"
            },
            {
                place: "Split",
                area: "Split-Dalmatia Country"
            },
            {
                place: "Nashville",
                area: "Tennessee"
            },
            {
                place: "Austin",
                area: "Texas"
            },
            {
                place: "Houston",
                area: "Texas"
            },
            {
                place: "Darthmouth",
                area: "United Kingdom"
            },
            {
                place: "Edinburgh",
                area: "United Kingdom"
            },
            {
                place: "Liverpool",
                area: "United Kingdom"
            },
            {place: "St Ives",area: "United Kingdom"},
            {place: "Lake Powell",area: "United States"},
            {place: "Lake Anna",area: "Virginia"},
            { place: "Leavenworth", area: "Washington" },
            { place: "Seattle", area: "Washington" },
        ]
    },
    {
        tabName: "Destinations for outdoor adventure",
        choices: [
            {
                place: "Lake Martin",
                area: "Alabama"
            },
            {
                place: "Banff",
                area: "Alberta"
            },
            {
                place: "Nerja",
                area: "Andalucia"
            },
            {
                place: "Greer",
                area: "Arizona"
            },
            {
                place: "Lake Havasu City",
                area: "Arizona"
            },
            {
                place: "Lake Powell",
                area: "Arizona"
            },
            {
                place: "North Rim",
                area: "Arizona"
            },
            {
                place: "Payson",
                area: "Arizona"
            },
            {
                place: "Pinetop-Lakeside",
                area: "Arizona"
            },
            {
                place: "Red Rock",
                area: "Arizona"
            },
            {
                place: "Dinner Plain",
                area: "Australia"
            },
            {
                place: "Streaky Bay",
                area: "Australia"
            },
            {
                place: "Emerald Lake",
                area: "British Columnbia"
            },
            {
                place: "Vancouver Island",
                area: "British Columnbia"
            },
            {
                place: "Victoria",
                area: "British Columnbia"
            },
            {
                place: "Idyllwild-Pine Cove",
                area: "California"
            },
            {
                place: "Mammoth Lakes",
                area: "California"
            },
            {
                place: "Palm Desert",
                area: "California"
            },
            {
                place: "Shaver Lake",
                area: "California"
            },
            {
                place: "South Lake Tahoe",
                area: "California"
            },
            {
                place: "Cultus Lake",
                area: "Canada"
            },
            {
                place: "Georgian Bay",
                area: "Canada"
            },
            {
                place: "Manitoulin Island",
                area: "Canada"
            },
            {
                place: "Ottawa River",
                area: "Canada"
            },
            {
                place: "The Blue Mountains",
                area: "Canada"
            },
            {
                place: "West Kelowna",
                area: "Canada"
            },
            {
                place: "Gran Canaria",
                area: "Canary Islands"
            },
            {
                place: "Lanzarote",
                area: "Canary Islands"
            },
            {
                place: "Castle Hill",
                area: "Canterbury"
            },
            {
                place: "Aspen",
                area: "Colorado"
            },
            {
                place: "Colorado Springs",
                area: "Colorado"
            },
            {
                place: "Denver",
                area: "Colorado"
            },
            {
                place: "Durango",
                area: "Colorado"
            },
            {
                place: "Estes Park",
                area: "Colorado"
            },
            {
                place: "Grand Lake",
                area: "Colorado"
            },
            {
                place: "Keystone",
                area: "Colorado"
            },
            {
                place: "Vail",
                area: "Colorado"
            },
            {
                place: "Winter Park",
                area: "Colorado"
            },
            {place: "Salcombe",area: "England"},
            {place: "Swanage", area: "England"},
            {place: "Cape Coral",area: "Florida"},
            { place: "Blue Ridge", area: "Georgia" },
            { 
                place: "Jekyll Island",
                area: "Georgia" },
            { 
                place: "Lake Lanier",
                area: "Georgia" 
            },
            { 
                place: "Corfu",
                area: "Greece" },
            { 
                place: "McCall",
                area: "Idaho" 
            },
            { 
                place: "Clear Lake",
                area: "Iowa" },
            { 
                place: "Lough Eske",
                area: "Ireland" 
            },
            { 
                place: "Lake Cumberland",
                area: "Kentucky" },
            { 
                place: "Portland",
                area: "Maine" 
            },
            { 
                place: "South Portland",
                area: "Maine" },
            { 
                place: "Deep Creek Lake",
                area: "Maryland" 
            },
            { 
                place: "Lake Michigan Beach",
                area: "Michigan" },
            { 
                place: "Lakeside",
                area: "Michigan" 
            },
            { 
                place: "Torch Lake",
                area: "Michigan" },
            { 
                place: "Traverse City",
                area: "Michigan" 
            },
            { 
                place: "Upper Peninsula of Michigan",
                area: "Michigan" 
            },
            { 
                place: "Branson",
                area: "Missouri" 
            },
            { 
                place: "Lake of the Ozarks",
                area: "Missouri" 
            },
            { 
                place: "Big Sky",
                area: "Montana" },
            { 
                place: "West Yellowstone",
                area: "Montana" 
            },
            { 
                place: "Mount Charleston",
                area: "Nevada" 
            },
            { 
                place: "Cloudcroft",
                area: "New Mexico" 
            },
            { 
                place: "Red River",
                area: "New Mexico" 
            },
            { 
                place: "Bellingen",
                area: "New South Wales" },
            { 
                place: "Brunswick Heads",
                area: "New South Wales" 
            },
            { 
                place: "Adirondack Mountains",
                area: "New York" 
            },
            { 
                place: "Lake Placid",
                area: "New York" 
            },
            { 
                place: "Niagara Falls",
                area: "New York" 
            },
            { 
                place: "Bald Head Island",
                area: "North Carolina" 
            },
            { 
                place: "Bryson City",
                area: "North Carolina" 
            },
            { 
                place: "Emerald Isle",
                area: "North Carolina" 
            },
            { 
                place: "Lake Gaston",
                area: "North Carolina" 
            },
            { 
                place: "Lake Lure",
                area: "North Carolina" 
            },
            { 
                place: "Lake Norman of Catawba",
                area: "North Carolina" },
            { 
                place: "Mount Airy",
                area: "North Carolina" 
            },
            { 
                place: "Mountain",
                area: "North Carolina" 
            },
            { 
                place: "Oak Island",
                area: "North Carolina" 
            },
            { 
                place: "Geneva-on-th-Lake",
                area: "Ohio" 
            },
            { 
                place: "Medicine Park",
                area: "Oklahoma" },
            { 
                place: "Turner Falls",
                area: "Oklahoma" 
            },
            { 
                place: "Algonquin Park",
                area: "Ontario" 
            },
            { 
                place: "Muskoka Lakes",
                area: "Ontario" 
            },
            { 
                place: "Tobermory",
                area: "Ontario" 
            },
            { 
                place: "Bend",
                area: "Oregon" },
            { 
                place: "Crater Lake",
                area: "Oregon" 
            },
            { 
                place: "Northern Oregon Coast Range",
                area: "Oregon" 
            },
            { 
                place: "Sunriver",
                area: "Oregon" 
            },
            { 
                place: "Lake Harmony",
                area: "Pennsylvania" 
            },
            { 
                place: "Mount Pocono",
                area: "Pennsylvania" },
            { 
                place: "Mont-Tremblant",
                area: "Quebec" 
            },
            { 
                place: "Aviemore",
                area: "Scotland" 
            },
            { 
                place: "Isle of Mull",
                area: "Scotland" 
            },
            { 
                place: "Robe",
                area: "South Australia" 
            },
            { 
                place: "Mountain Rest",
                area: "South Carolina" },
            { 
                place: "St Helens",
                area: "Tasmania" 
            },
            { 
                place: "Big Bend National Park",
                area: "Texas" 
            },
            { 
                place: "Canyon Lake",
                area: "Texas" 
            },
            { 
                place: "Lake Austin",
                area: "Texas" 
            },
            { 
                place: "Lake Buchanan",
                area: "Texas" },
            { 
                place: "Betws-y-Coed",
                area: "United Kingdom" 
            },
            { 
                place: "Filey",
                area: "United Kingdom" 
            },
            { 
                place: "Fort Williams",
                area: "United Kingdom" 
            },
            { 
                place: "Loch Lomond",
                area: "United Kingdom" 
            },
            { 
                place: "Port Isaac",
                area: "United Kingdom" },
            { 
                place: "Moab",
                area: "Utah" 
            },
            { 
                place: "Mount Zion",
                area: "Utah" 
            },
            { 
                place: "Moraira",
                area: "Valencian Community" 
            },
            { 
                place: "Inverloch",
                area: "Victoria" 
            },
            { 
                place: "Metung",
                area: "Victoria" },
            { 
                place: "Mount Buller",
                area: "Victoria" 
            },
            { 
                place: "Port Campbell",
                area: "Victoria" 
            },
            { 
                place: "Wilsons Promontory",
                area: "Vitoria" 
            },
            { 
                place: "Shenandoah",
                area: "Virginia" },
            { 
                place: "Smith Mountain Lake",
                area: "Virginia" 
            },
            { 
                place: "Snowdon",
                area: "Wales" 
            },
            { 
                place: "Lake Chelan",
                area: "Washington" 
            },
            { 
                place: "Lake Crescent",
                area: "Washington" },
            { 
                place: "Lake Quinault",
                area: "Washington" 
            },
            { 
                place: "Quinault",
                area: "Washington" 
            },
            { 
                place: "Skamania",
                area: "Washington" 
            },
            { 
                place: "Snowshoe",
                area: "West Virginia" },
            { 
                place: "Lake Geneva",
                area: "Wisconsin" 
            },
            { 
                place: "Wisconsin Dells",
                area: "Wisconsin" 
            },
            { 
                place: "Yellowstone National Park",
                area: "Wyoming" 
            },
        ]
    },
    {
        tabName: "Mountain cabins",
        choices:[
            { 
                place: "Mentone",
                area: "Alabama" 
            },
            { 
                place: "Sedona",
                area: "Arizona" },
            { 
                place: "Helen",
                area: "Georgia" 
            },
            { 
                place: "Pine Mountain",
                area: "Georgia" 
            },
            { 
                place: "Stone Mountain",
                area: "Georgia" 
            },
            { 
                place: "Island",
                area: "Idaho" 
            },
            { 
                place: "Blue Mountains",
                area: "New South Wales" },
            { 
                place: "Asheville",
                area: "North Carolina" 
            },
            { 
                place: "Blowing Rock",
                area: "North Carolina" 
            },
            { 
                place: "Bonne",
                area: "North Carolina" 
            },
            { 
                place: "Hochatown",
                area: "Oklahoma" 
            },
            { 
                place: "Pigeon Forge",
                area: "Tennessee" },
            { 
                place: "Townsend",
                area: "Tennessee" 
            },
            { 
                place: "Wears Valley",
                area: "Tennessee" 
            },
            { 
                place: "Cabins",
                area: "West Virginia" 
            },
        ]
    },
    {
        tabName: "Beach destinations",
        choices:[
            { 
                place: "Dauphin Island",
                area: "Alabama" 
            },
            { 
                place: "Fort Morgan",
                area: "Alabama" },
            { 
                place: "Gulf Shores",
                area: "Alabama" 
            },
            { 
                place: "Bruny Island",
                area: "Australia" 
            },
            { 
                place: "Crescent Head",
                area: "Australia" 
            },
            { 
                place: "Gerringong",
                area: "Australia" 
            },
            { 
                place: "Hamilton Island",
                area: "Australia" },
            { 
                place: "Lancelin",
                area: "Australia" 
            },
            { 
                place: "Melbourne Beach",
                area: "Australia" 
            },
            { 
                place: "Moonta Bay",
                area: "Australia" 
            },
            { 
                place: "Ocean Grove",
                area: "Australia" 
            },
            { 
                place: "Majorca",
                area: "Balearic Islands" },
            { 
                place: "Big Sur",
                area: "California" 
            },
            { 
                place: "Bodega Bay",
                area: "California" 
            },
            { 
                place: "Cambria",
                area: "California" 
            },
            { 
                place: "Cayucos",
                area: "California" 
            },
            { 
                place: "Huntington Beach",
                area: "California" },
            { 
                place: "La Jolla Shores Beach",
                area: "California" 
            },
            { 
                place: "Languna Beach",
                area: "California" 
            },
            { 
                place: "Long Beach",
                area: "California" 
            },
            { 
                place: "Malibu",
                area: "California" 
            },
            { 
                place: "Mission Beach",
                area: "California" },
            { 
                place: "Newport Beach",
                area: "California" 
            },
            { 
                place: "Oceanside",
                area: "California" 
            },
            { 
                place: "Palm Springs",
                area: "California" 
            },
            { 
                place: "Pismo Beach",
                area: "California" 
            },
            { 
                place: "Santa Cruz",
                area: "California" },
            { 
                place: "Santa Monica",
                area: "California" 
            },
            { 
                place: "Sea Ranch",
                area: "California" 
            },
            { 
                place: "Playa Blanca",
                area: "Canarias" 
            },
            { 
                place: "Fuerteventura",
                area: "Canary Islands" 
            },
            { 
                place: "Puerto del Carmen",
                area: "Canary Islands" },
            { 
                place: "Tenerife",
                area: "Canary Islands" 
            },
            { 
                place: "Ayia Napa",
                area: "Cyprus" 
            },
            { 
                place: "Bethany Beach",
                area: "Delaware" 
            },
            { 
                place: "Dewey Beach",
                area: "Delaware" 
            },
            { 
                place: "Blackpool",
                area: "England" },
            { 
                place: "Isle of Wight",
                area: "England" 
            },
            { 
                place: "Newquay",
                area: "England" 
            },
            { 
                place: "Weymouth",
                area: "England" 
            },
            { 
                place: "Albufeira",
                area: "Faro District" 
            },
            { 
                place: "Alys Beach",
                area: "Florida" },
            { 
                place: "Anna Maria Island",
                area: "Florida" 
            },
            { 
                place: "Boca Grande",
                area: "Florida" 
            },
            { 
                place: "Bradenton",
                area: "Florida" 
            },
            { 
                place: "Cape San Blas",
                area: "Florida" 
            },
            { 
                place: "Captiva",
                area: "Florida" },
            { 
                place: "Clearwater Beach",
                area: "Florida" 
            },
            { 
                place: "Cocoa Beach",
                area: "Florida" 
            },
            { 
                place: "Daytona Beach",
                area: "Florida" 
            },
            { 
                place: "Destin",
                area: "Florida" 
            },
            { 
                place: "Englewood",
                area: "Florida" },
            { 
                place: "Fort Lauderdale",
                area: "Florida" 
            },
            { 
                place: "Fort Myers Beach",
                area: "Florida" 
            },
            { 
                place: "Fort Walton Beach",
                area: "Florida" 
            },
            { 
                place: "Grayton Beach",
                area: "Florida" 
            },
            { 
                place: "Gulf of Mexico",
                area: "Florida" },
            { 
                place: "Indian Rocks Beach",
                area: "Florida" 
            },
            { 
                place: "Islamorada",
                area: "Florida" 
            },
            { 
                place: "Jacksonville Beach",
                area: "Florida" 
            },
            { 
                place: "Key Largo",
                area: "Florida" 
            },
            { 
                place: "Madeira Beach",
                area: "Florida" },
            { 
                place: "Marathon",
                area: "Florida" 
            },
            { 
                place: "Marco Island",
                area: "Florida" 
            },
            { 
                place: "Mexico Beach",
                area: "Florida" 
            },
            { 
                place: "Miami Beach",
                area: "Florida" 
            },
            { 
                place: "Miami",
                area: "Florida" },
            { 
                place: "Miramar Beach",
                area: "Florida" 
            },
            { 
                place: "Naples",
                area: "Florida" 
            },
            { 
                place: "Navarre Beach",
                area: "Florida" 
            },
            { 
                place: "New Smyrna Beach",
                area: "Florida" 
            },
            { 
                place: "Okaloosa Island",
                area: "Florida" },
            { 
                place: "Panama City Beach",
                area: "Florida" 
            },
            { 
                place: "Pansacola Beach",
                area: "Florida" 
            },
            { 
                place: "Perdido Key",
                area: "Florida" 
            },
            { 
                place: "Rosemary Beach",
                area: "Florida" 
            },
            { 
                place: "Saint George Island",
                area: "Florida" },
            { 
                place: "Santa Rosa Beach",
                area: "Florida" 
            },
            { 
                place: "Sarasota",
                area: "Florida" 
            },
            { 
                place: "Seagrove Beach",
                area: "Florida" 
            },
            { 
                place: "Seaside",
                area: "Florida" 
            },
            { 
                place: "South Beach",
                area: "Florida" },
            { 
                place: "St. Augustine Beach",
                area: "Florida" 
            },
            { 
                place: "St. Pete Beach",
                area: "Florida" 
            },
            { 
                place: "Tampa",
                area: "Florida" 
            },
            { 
                place: "West Palm Beach",
                area: "Florida" 
            },
            { 
                place: "Bora Bora",
                area: "French Polynesia" 
            },
            { 
                place: "Tybee Island",
                area: "Georgia" 
            },
            { 
                place: "Honolulu",
                area: "Hawaii" 
            },
            { 
                place: "Kailua-Kona",
                area: "Hawaii" 
            },
            { 
                place: "Kapalua",
                area: "Hawaii" 
            },
            { 
                place: "Kauai",
                area: "Hawaii" 
            },
            { 
                place: "Kihei",
                area: "Hawaii" 
            },
            { 
                place: "Ko Olina Beach",
                area: "Hawaii" 
            },
            { 
                place: "Maui",
                area: "Hawaii" 
            },
            { 
                place: "Topsail Island",
                area: "Hawaii" 
            },
            { 
                place: "Old Orchard Beach",
                area: "Maine" 
            },
            { 
                place: "Wells",
                area: "Maine" 
            },
            { 
                place: "Cape Cod",
                area: "Massachusetts" 
            },
            { 
                place: "Nantucket",
                area: "Massachusetts" 
            },
            { 
                place: "Biloxi",
                area: "Mississippi" 
            },
            { 
                place: "Avalon",
                area: "New Jersey" 
            },
            { 
                place: "Jersey Shore",
                area: "New Jersey" 
            },
            { 
                place: "North Wildwoord",
                area: "New Jersey" 
            },
            { 
                place: "Ocean City",
                area: "New Jersey" 
            },
            { 
                place: "Sea Isle City",
                area: "New Jersey" 
            },
            { 
                place: "Stone Harbor",
                area: "New Jersey" 
            },
            { 
                place: "Hyams Beach",
                area: "New South Wales" 
            },
            { 
                place: "Fire Island",
                area: "New York" 
            },
            { 
                place: "Montauk",
                area: "New York" 
            },
            { 
                place: "Ocean Beach",
                area: "New York" 
            },
            { 
                place: "Atlanic Beach",
                area: "North Carolina" 
            },
            { 
                place: "Carolina Beach",
                area: "North Carolina" 
            },
            { 
                place: "Corolla",
                area: "North Carolina" 
            },
            { 
                place: "Holden Beach",
                area: "North Carolina" 
            },
            { 
                place: "Kitty Hawk",
                area: "North Carolina" 
            },
            { 
                place: "Kure Beach",
                area: "North Carolina" 
            },
            { 
                place: "Nags Head",
                area: "North Carolina" 
            },
            { 
                place: "Ocean Isle Beach",
                area: "North Carolina" 
            },
            { 
                place: "Sunset Beach",
                area: "North Carolina" 
            },
            { 
                place: "Surf City",
                area: "North Carolina" 
            },
            { 
                place: "Wilmington",
                area: "North Carolina" 
            },
            { 
                place: "Wrightsville Beach",
                area: "North Carolina" 
            },
            { 
                place: "Grand Bend",
                area: "Ontario" 
            },
            { 
                place: "Sauble Beach",
                area: "Ontario" 
            },
            { 
                place: "Wasaga Beach",
                area: "Ontario" 
            },
            { 
                place: "Cannon Beach",
                area: "Oregon" 
            },
            { 
                place: "Seaside",
                area: "Oregon" 
            },
            { 
                place: "Carvoeiro",
                area: "Portugal" 
            },
            { 
                place: "Gold Coast",
                area: "Queensland" 
            },
            { 
                place: "Moreton Island",
                area: "Queensland" 
            },
            { 
                place: "Block Island",
                area: "Rhode Island" 
            },
            { 
                place: "Puerto Penasco",
                area: "Sonora" 
            },
            { 
                place: "Charleston Oceanfront Villas, Folly Beach",
                area: "South Carolina" 
            },
            { 
                place: "Edisto Beach",
                area: "South Carolina" 
            },
            { 
                place: "Folly Beach",
                area: "South Carolina" 
            },
            { 
                place: "Fripp Island",
                area: "South Carolina" 
            },
            { 
                place: "Isle of Palms",
                area: "South Carolina" 
            },
            { 
                place: "Kiawah Island",
                area: "South Carolina" 
            },
            { 
                place: "Myrtle Beach",
                area: "South Carolina" 
            },
            { 
                place: "Pawleys Island",
                area: "South Carolina" 
            },
            { 
                place: "Seabrook Island",
                area: "South Carolina" 
            },
            { 
                place: "Sullivan's Island",
                area: "South Carolina" 
            },
            { 
                place: "Surfside Beach",
                area: "South Carolina" 
            },
            { 
                place: "Alicante",
                area: "Spain" 
            },
            { 
                place: "Costa Adeje",
                area: "Spain" 
            },
            { 
                place: "Costa Del Sol",
                area: "Spain" 
            },
            { 
                place: "Fuengirola",
                area: "Spain" 
            },
            { 
                place: "Los Cristianos",
                area: "Spain" 
            },
            { 
                place: "Corpus Christi",
                area: "Texas" 
            },
            { 
                place: "Port Aransas",
                area: "Texas" 
            },
            { 
                place: "South Padre Island",
                area: "Texas" 
            },
            { 
                place: "Surfside Beach",
                area: "Texas" 
            },
            { 
                place: "Bournemouth",
                area: "United Kingdom" 
            },
            { 
                place: "New Quay",
                area: "United Kingdom" 
            },
            { 
                place: "Anglesea",
                area: "Victoria" 
            },
            { 
                place: "Abersoch",
                area: "Wales" 
            },
            { 
                place: "Seabrook",
                area: "Washington" 
            },
            { 
                place: "Jurien Bay",
                area: "Western Australia" 
            }
        ]
    },
    {
        tabName: "Popular destinations",
        choices:[
            { 
                place: "Canmore",
                area: "Alberta" 
            },
            { 
                place: "Benalmadena",
                area: "Andalusia" 
            },
            { 
                place: "Marbella",
                area: "Andalusia" 
            },
            { 
                place: "Mijas",
                area: "Andalusia" 
            },
            { 
                place: "Prescott",
                area: "Arizona" 
            },
            { 
                place: "Scottsdale",
                area: "Arizona" 
            },
            { 
                place: "Tucson",
                area: "Arizona" 
            },
            { 
                place: "Jasper",
                area: "Arkansas" 
            },
            { 
                place: "Mountain View",
                area: "Arkansas" 
            },
            { 
                place: "Devonport",
                area: "Australia" 
            },
            { 
                place: "Mallacoota",
                area: "Australia" 
            },
            { 
                place: "Ibiza",
                area: "Balearic Islands" 
            },
            { 
                place: "Anaheim",
                area: "California" 
            },
            { 
                place: "Monterey",
                area: "California" 
            },
            { 
                place: "Paso Robles",
                area: "California" 
            },
            { 
                place: "Santa Barbara",
                area: "California" 
            },
            { 
                place: "Sonoma",
                area: "California" 
            },
            { 
                place: "La Serena",
                area: "Coquimbo" 
            },
            { 
                place: "Dubai",
                area: "Dubai" 
            },
            { 
                place: "Birmingham",
                area: "England" 
            },
            { 
                place: "Brighton",
                area: "England" 
            },
            { 
                place: "Bude",
                area: "England" 
            },
            { 
                place: "Newcastle upon Tyne",
                area: "England" 
            },
            { 
                place: "Padstow",
                area: "England" 
            },
            { 
                place: "South West England",
                area: "England" 
            },
            { 
                place: "Whitby",
                area: "England" 
            },
            { 
                place: "Fort Myers",
                area: "Florida" 
            },
            { 
                place: "Jacksonville",
                area: "Florida" 
            },
            { 
                place: "Kissimmee",
                area: "Florida" 
            },
            { 
                place: "Longboat Key",
                area: "Florida" 
            },
            { 
                place: "Orlando",
                area: "Florida" 
            },
            { 
                place: "St Petersburg",
                area: "Florida" 
            },
            { 
                place: "St. Augustine",
                area: "Florida" 
            },
            { 
                place: "The villages",
                area: "Florida" 
            },
            { 
                place: "Dahlonega",
                area: "Georgia" 
            },
            { 
                place: "Crete",
                area: "Greece" 
            },
            { 
                place: "Mykonos",
                area: "Greece" 
            },
            { 
                place: "Santorini",
                area: "Greece" 
            },
            { 
                place: "Oahu",
                area: "Hawaii" 
            },
            { 
                place: "Capri",
                area: "Italy" 
            },
            { 
                place: "Bar Harbo",
                area: "Maine" 
            },
            { 
                place: "Mackinac Island",
                area: "Michigan" 
            },
            { 
                place: "St.Joseph",
                area: "Michigan" 
            },
            { 
                place: "Larsmont",
                area: "Minnersota" 
            },
            { 
                place: "Las Vegas",
                area: "Nevada" 
            },
            { 
                place: "Madrid",
                area: "New Mexico" 
            },
            { 
                place: "Santa Fe",
                area: "New Mexico" 
            },
            { 
                place: "Bermagui",
                area: "New South Wales" 
            },
            { 
                place: "Evans Head",
                area: "New South Wales" 
            },
            { 
                place: "Sawtell",
                area: "New South Wales" 
            },
            { 
                place: "Young",
                area: "New South Wales" 
            },
            { 
                place: "Ocracoke",
                area: "North Carolina" 
            },
            { 
                place: "Florence",
                area: "Oregon" 
            },
            { 
                place: "Lakeside",
                area: "Oregon" 
            },
            { 
                place: "Lincoln City",
                area: "Oregon" 
            },
            { 
                place: "Paphos",
                area: "Paphos" 
            },
            { 
                place: "Maleny",
                area: "Queensland" 
            },
            { 
                place: "Stanthorpe",
                area: "Queensland" 
            },
            { 
                place: "Newport",
                area: "Rhode Island" 
            },
            { 
                place: "Glasgow",
                area: "Scotland" 
            },
            { 
                place: "Scottish Highlands",
                area: "Scotland" 
            },
            { 
                place: "St Andrews",
                area: "Scotland" 
            },
            { 
                place: "McLaren Vale",
                area: "South Australia" 
            },
            { 
                place: "Wallaroo",
                area: "South Australia" 
            },
            { 
                place: "Charleston",
                area: "South Carolina" 
            },
            { 
                place: "Hvar",
                area: "Split-Dalmatia Country" 
            },
            { 
                place: "Saint John",
                area: "St. John" 
            },
            { 
                place: "Chattangooga",
                area: "Tennessee" 
            },
            { 
                place: "Concan",
                area: "Texas" 
            },
            { 
                place: "Fredericksburg",
                area: "Texas" 
            },
            { 
                place: "New Braunfels",
                area: "Texas" 
            },
            { 
                place: "Rockport",
                area: "Texas" 
            },
            { 
                place: "Waco",
                area: "Texas" 
            },
            { 
                place: "Forest of Dean District",
                area: "United Kingdom" 
            },
            { 
                place: "Jersey",
                area: "United Kingdom" 
            },
            { 
                place: "Lyme Regis",
                area: "United Kingdom" 
            },
            { 
                place: "Manchester",
                area: "United Kingdom" 
            },
            { 
                place: "Seaview",
                area: "United Kingdom" 
            },
            { 
                place: "Southwold",
                area: "United Kingdom" 
            },
            { 
                place: "Staithes",
                area: "United Kingdom" 
            },
            { 
                place: "Wells-next-the-Sea",
                area: "United Kingdom" 
            },
            { 
                place: "St.George",
                area: "Utah" 
            },
            { 
                place: "Benidorm",
                area: "Valencian Community" 
            },
            { 
                place: "Barwon Heads",
                area: "Victoria" 
            },
            { 
                place: "Castlemaine",
                area: "Victoria" 
            },
            { 
                place: "Healesville",
                area: "Victoria" 
            },
            { 
                place: "Marysville",
                area: "Victoria" 
            },
            { 
                place: "Sorrento",
                area: "Victoria" 
            },
            { 
                place: "Chincoteague",
                area: "Virginia" 
            },
            { 
                place: "Williamsburg",
                area: "Virginia" 
            },
            { 
                place: "Hay-on-Wye",
                area: "Wales" 
            },
            { 
                place: "Llandudno",
                area: "Wales" 
            },
            { 
                place: "Tenby",
                area: "Wales" 
            },




        ]
    }





]
const FutrueGetaways = () => {
    const [theTabs] = useState(tabs)
    const [index, setIndex] = useState(0);

    const chooseOne = index => {
        setIndex(index)
    }

    return (
        <Container>
            <FutrueGetawaysDiv>
                <h1>Inspiration for future getaways</h1>
                <Header>
                    <Nav>
                        {
                            theTabs.map(tab => {
                                const theIndex = theTabs.indexOf(tab)
                                return <Tab
                                    key={theIndex}
                                    i={theIndex}
                                    index={index}
                                    chooseOne={chooseOne} name={tab.tabName} />
                            })}
                    </Nav>
                </Header>
                <Choices>
                    {
                        tabs[index] && tabs[index].choices.map(choice =>
                            <Choice key={tabs[index].choices.indexOf(choice)} info={choice} />)
                    }
                </Choices>

            </FutrueGetawaysDiv>
        </Container>
    )
}

export default FutrueGetaways;