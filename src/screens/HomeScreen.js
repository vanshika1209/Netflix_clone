import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
     <Nav/>
     <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery}/>
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSciFi}/>
      <Row title="Western Movies" fetchUrl={requests.fetchWestern}/>
      <Row title="Netflix Oiginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimation}/>
      <Row title="TV Stories" fetchUrl={requests.fetchTV}/>
      
    </div>
  )
}

export default HomeScreen
