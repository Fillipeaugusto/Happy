import React from 'react';
import MapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

import {Link } from 'react-router-dom';


import {Map , TileLayer} from 'react-leaflet';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
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
            zoom={11.6}
            style={{width: '100%', height:'100%'}}
            
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

            </Map>
            <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;