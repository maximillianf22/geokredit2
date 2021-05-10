import React, { useState } from 'react';

function InfoWindowCustom4({ handleShowModalOficina}) {
	return(
		<div className = "row px-3 infowindows">
      <div className = "col-12">
        <div className="d-flex flex-column font-weight-bold w-100">
            <a
              href="#"
              className="text-dark text-hover-primary text-center font-size-lg font-weight-bold text-nowrap lh-1"
            >
              <b>Parada</b>
            </a>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-dark">20min <br/>
                    <b className="text-muted">Tiempo</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-dark">Jueves 24 Abril 2021 <br/>
                    <b className="text-muted">Fecha</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-dark">10:40am <br/>
                    <b className="text-muted">Hora</b>
                </div> 
            </div>
          </div>
        </div>
    </div>
		)
}

export default InfoWindowCustom4
