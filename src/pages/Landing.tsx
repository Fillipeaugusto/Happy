import React from 'react';
import '../styles/pages/landing.css';
import {Link} from 'react-router-dom';


import logoimg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

function Landing(){
    return(
<div id="page-landing">
     <div className="content-wrapper">
       <img src={logoimg} alt="Logo"/>
       <main>
         <h1>Leve felicidade para o mundo</h1>
         <p>Visite orfanatos e mude o dia de muitas crianças.</p>
       </main>
       <div className="location">
         <strong>Brasília</strong>
         <span>Distrito Federal</span>
       </div>
       <Link to="/app" className="enter-app"> 
      <FiArrowRight  size={40} color="#fff"/> 
       </Link>
     </div>
    </div>
    );
}

export default Landing;