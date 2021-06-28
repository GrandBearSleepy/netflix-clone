import React from 'react';
import './styles.css';

import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';

import requests from '../../api/requests'

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Nav />
      <Banner />
      <Row title={'NETFLIX OEIGINAL'} isLargeRow={true} fetchUrl={requests.fetchNetflixOrigianls}/>
      <Row title={'Trending Now'} fetchUrl={requests.fetcheTrending} />
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
    </div>
  )
}

export default HomeScreen
