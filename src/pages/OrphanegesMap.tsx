import React from 'react';

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map,TileLayer } from 'react-leaflet';

import mapMarkerimg from '../images/mapmarker.svg';
import '../styles/pages/orphanage.css';
import 'leaflet/dist/leaflet.css';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerimg} alt="happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> São Paulo</strong>
                    <span> Franco da Rocha</span>
                </footer>
            </aside>
            <Map
                center={[-23.3073122,-46.7381793]}
                zoom={15}
                style={{width:'100%',height:'100%'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;