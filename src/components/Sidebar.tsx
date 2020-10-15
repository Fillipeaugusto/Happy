import React from "react";

import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';
import MapMarkerImgNight from '../images/map-marker-night.svg';

var data = new Date();
var hora    = data.getHours(); 

var logo = "";

if(hora >18 || hora <5){
    
    logo=`${MapMarkerImgNight}`
    
}else{
    
    logo=`${mapMarkerImg}`
}

export default function Sidebar(){
    const { goBack } = useHistory();
    return(
    
    <aside className="app-sidebar">
        <img src={logo} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
);
}