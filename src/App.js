import React, { Component } from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/Header_Footer/Header';
import Featured from './components/Featured/Featured';
import VenueNFO from './components/VenueNFO/VenueNFO';
import HighLight from './components/HighLight/HighLight';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Header_Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="" style={{
        height : '1000px',
        backgroundColor : 'cornflowerblue'
      }}>
        <Element name="EventStartIn">
              <Header />
        </Element>
        <Featured />
        <Element name="VenueNFO">
              <VenueNFO />
        </Element>
        
        <Element name="HighLight">
              <HighLight />
        </Element>
        <Element name="Pricing">
              <Pricing />
        </Element>

        <Element name="Location">
                <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;