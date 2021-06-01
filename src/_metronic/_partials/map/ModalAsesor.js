import React, { useEffect, useState } from "react";
import FullCalendario from './FullCalendar'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Modal, Nav, Tab, Popover, OverlayTrigger} from 'react-bootstrap';
import {
    ListsWidget9,
  } from "../widgets";
import GoogleMapReact from 'google-map-react';
import paradaCliente from './icons/parada-cliente.svg';
import paradaAsesor from './icons/parada-asesor.svg';
import InfoWindowCustom3 from './InfoWindow3';
import InfoWindowCustom4 from './InfoWindow4';

export default function ModalAsesor({show, handleClose}){
  const [mapProps] = useState({
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

  const popoverMap3 = (
    <Popover id="popover-basic" style={{ position: 'fixed' }}>
      <Popover.Content>
        <InfoWindowCustom3 />
      </Popover.Content>
    </Popover>
  );

  const popoverMap4 = (
    <Popover id="popover-basic" style={{ position: 'fixed' }}>
      <Popover.Content>
        <InfoWindowCustom4 />
      </Popover.Content>
    </Popover>
  );

	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Asesor</Modal.Title>
          </Modal.Header>
        <Modal.Body className="p-0 h-570">
            <Tab.Container id="right-tabs-example" defaultActiveKey="resumen">
            <div className=" bg-white text-right py-2 pull-right text-right align-items-center d-flex ml-auto">
              <Nav className=" rounded  bg-white text-right p-2 pull-right text-right align-items-center d-flex ml-auto" variant="pills" size="sm">
                <Nav.Item >
                  <Nav.Link className="py-2 px-4" eventKey="resumen">Resumen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-2 px-4" eventKey="calendario">Calendario</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-2 px-4" eventKey="ruta">Ruta</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="resumen">
                <ListsWidget9 className="gutter-b card-stretch mb-0" />
              </Tab.Pane>
              <Tab.Pane eventKey="calendario" className="p-10">
                <FullCalendario
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                  />
              </Tab.Pane>
              <Tab.Pane eventKey="ruta">
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
                      <OverlayTrigger trigger="focus" placement="top" overlay={popoverMap3}>
                        <button className="btn">
                          <img src={paradaCliente} alt="" style={{ height: '35px', width: '35px' }} />
                        </button>
                      </OverlayTrigger>
                    </div>

                    <div lat={4.620054} lng={-74.098066}>
                      <OverlayTrigger trigger="focus" placement="top" overlay={popoverMap4}>
                        <button className="btn">
                          <img src={paradaAsesor} alt="" style={{ height: '35px', width: '35px' }} />
                        </button>
                      </OverlayTrigger>
                    </div>

                    <div lat={4.620505} lng={-74.100501}>
                      <OverlayTrigger trigger="focus" placement="top" overlay={popoverMap4}>
                        <button className="btn">
                          <img src={paradaAsesor} alt="" style={{ height: '35px', width: '35px' }} />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </GoogleMapReact>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
      )
}