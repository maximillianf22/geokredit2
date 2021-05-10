import React, { useState } from 'react';

function InfoWindowCustom3({ handleShowModalOficina}) {
	return(
		<div className = "row px-3">
      <div className = "col-12">
        <div className="d-flex flex-column font-weight-bold w-100">
            <a
              href="#"
              className="text-primary text-hover-dark text-center font-size-lg font-weight-bold text-nowrap lh-1"
            >
             <b> Lina Marcela Negrete Arteaga</b>
            </a>
            <b className="text-muted font-size-lg lh-1 text-center">Cliente</b>
            <div className="row mt-3 mb-1">
                <div className="col-6 p-0"><b className="text-primary">Lat:</b> 4.30494</div>
                <div className="col-6 p-0 text-right"><b className="text-primary">Long:</b> -74.39409</div>
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-primary">Carrera 2b #14 - 39 <br/>
                    <b className="text-muted">Dirección</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-primary">Jueves 24 Abril 2021 <br/>
                    <b className="text-muted">Fecha</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-primary">10:40am <br/>
                    <b className="text-muted">Hora</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-primary">Base de datos #10 <br/>
                    <b className="text-muted">Base de datos</b>
                </div> 
            </div>
            <div className="row my-1">
                <div className="font-size-sm lh-1 text-primary">$10.000.000 <br/>
                    <b className="text-muted">Credito</b>
                </div> 
            </div>
            <div className="row mt-3">
                <button className="btn btn-primary btn-block">Ver perfil</button>
            </div>
          </div>
        </div>
    </div>
		)
}



export default InfoWindowCustom3
