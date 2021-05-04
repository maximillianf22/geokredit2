import React, {useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import officePrimary from './icons/office-primary.svg';
import officeWarning from './icons/office-warning.svg';
import asesorActive from './icons/asesor-active.svg';

import GoogleMapReact from 'google-map-react';


export default function ModalRoutes({ show, handleClose }) {

    const [mapProps, setMapProps] = useState({
      zoom: 18,
      center: { lat: 4.61971, lng: -74.09975 },
    })
    const [map, setMap] = useState(null)
    const [maps, setMaps] = useState(null)
    const [isMapLoaded, setIsMapLoaded] = useState(false)
  
    useEffect(() => {
      if (isMapLoaded) {
        
        var snappedPolyline = new maps.Polyline({
          path: [
            { lat: 4.61971, lng: -74.09975 },
            { lat: 4.620513, lng:  -74.100483 },
            {lat: 4.620904, lng: -74.099469},
            {lat: 4.619802, lng: -74.097960}
          ],
          strokeColor: '#add8e6',
          strokeWeight: 6,
          strokeOpacity: 1,
        });
        snappedPolyline.setMap(map);
      }
    }, [isMapLoaded])
  
    
  
  
  
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Rutas</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyA01EIKVqGmy9BAhcDyT-nsJsLtBUbU_gA' }}
                        center={mapProps.center}
                        defaultCenter={mapProps.center}
                        defaultZoom={mapProps.zoom}
                        zoom={mapProps.zoom}
                        cllickableIcons={mapProps.cllickableIcons}
                        disableDefaultUI={mapProps.disableDefaultUI}
                        onGoogleApiLoaded={({ map, maps }) => { setMap(map); setMaps(maps); setIsMapLoaded(true) }}
                    >


                        <div lat={4.61971} lng={-74.09975}>
                            <img src={asesorActive} alt="" style={{ height: '35px', width: '35px' }} />
                        </div>

                        <div lat={4.620054} lng={-74.098066}>
                        <img src={asesorActive} alt="" style={{ height: '35px', width: '35px' }} />
                        </div>
                    </GoogleMapReact>
                </div>
            </Modal.Body>
        </Modal>
    )
}