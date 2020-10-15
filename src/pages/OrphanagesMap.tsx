import React, {useEffect, useState} from 'react';
import MapMarkerImg from '../images/map-marker.svg';
import MapMarkerImgNight from '../images/map-marker-night.svg';
import {FiPlus, FiArrowRight} from 'react-icons/fi';



import '../styles/pages/orphanages-map.css';

import {Link } from 'react-router-dom';

import {Map , TileLayer, Marker, Popup} from 'react-leaflet';

import icone from '../utils/icone';
import api from '../services/api';


var data = new Date();
var hora    = data.getHours(); 
var result = "";
var clbtn = "";
var logo = "";

if(hora >18 || hora <5){
    result ="dark-v10";
    clbtn ="#1B2431";
    logo=`${MapMarkerImgNight}`
    
}else{
    result ="light-v10";
    clbtn ="#fff";
    logo=`${MapMarkerImg}`
}


interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState <Orphanage[]> ([]);

    

    useEffect(() => {
        api.get('orphanages').then(response =>{
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p id="sb">Muitas crianças estão esperando a sua visita :) </p>
                </header>
                <footer>
                    <strong>
                        Distrito Federal
                    </strong>
                    <span>
                        Brasília 
                    </span>
                </footer>
            </aside>
            <Map 
            center={[-15.774752,-47.8771687]}
            zoom={10.5}
            style={{width: '100%', height:'100%'}}
            
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${result}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />


              {orphanages.map(orphanage =>{
                  return(
                    <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={icone}
              key={orphanage.id}
              >

                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                   {orphanage.name}
                    <Link to={`/orphanage/${orphanage.id}`}>

                <FiArrowRight  size={20} color="#fff"/>


                    </Link>
                  </Popup>
            </Marker>
                  )
              })}

            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color={clbtn}/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;