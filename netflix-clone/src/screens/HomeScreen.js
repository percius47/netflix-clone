import React from 'react'
import Banner from '../Components/Banner'
import "./HomeScreen.css"
import Nav from '../Components/Nav'
import requests from '../Requests'
import Row from '../Components/Row'
function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav/>

             <Banner/>


            <Row  title='Netflix Originals'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
             <Row title='Trending Now'
            fetchUrl={requests.fetchTrending}/>
            <Row title='Romantic Movies'
            fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}/>
           
              

        </div>
    )
}

export default HomeScreen
