import React, { Component } from 'react';
import './style/App.css';

class Appt extends Component {    
    render() {
        return (
                
                <div className='app'>
                <h1 id="header1"> Scheduling </h1>
                
                <div class="w3-container">
                <h1 id="header1"> Our Locations and Numbers: </h1>
                <div class="w3-panel w3-card" id="header1"> <p>3000 Biscayne Blvd Suite 210
                Miami, FL 33137
                305-576-5001 </p></div>
                <div class="w3-panel w3-card-2" id="header1"><p>151 NW 11th St Suite 400
                Homestead, FL 33030 786-414-1309</p></div>
                <div class="w3-panel w3-card-4" id="header1"><p>1350 SW 4th St Homestead, FL 33030
                786-414-1308</p></div>
                <div class="w3-panel w3-card-4" id="header1"><p>975 Baptist Way Homestead, FL 33030
                786-573-6879</p></div>
                </div>
                </div>
                );
    }
}
export default Appt;
