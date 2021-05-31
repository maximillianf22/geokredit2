import React, { useState } from 'react';

function InfoWindowCustom({handleShowModalCalendar, handleShowModalAsesor, handleShowModalRoutes, handleShowModalPerfil}) {
	return(
		<div className = "row px-3">
      <div className="row infow-asesor w-100 text-center mx-auto mb-2">
        <div className="col-3 text-center mx-auto p-0">Junior</div>
        <div className="col-6 text-center mx-auto p-0">
        <div className="d-flex flex-column mt-1 w-100">
          <div className="progress progress-xs w-100">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        </div>
        <div className="col-3 text-center mx-auto p-0 text-success font-weight-bold"><b>Activo</b></div>
      </div>
      <div className = "col-md-12 mb-4">
        <div className="d-flex flex-column font-weight-bold w-75">
            <a
              href="#"
              className="text-primary text-hover-dark font-size-lg font-weight-bold text-nowrap"
            >
              Alejandro Fernandez
            </a>
            <span className="text-muted lh-1 text-nowrap">
              <b>40</b> - 50 <small>Visitas</small> <br/>
              $30,000,000 - $600,000,000 <br/>
            </span>
          </div>
        </div>
        <div className = "col-3" onClick={handleShowModalCalendar}>
          <button className = "btn btn-sm btn-light-primary" >
            <i className = "fa fa-lg fa-calendar p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-3 " onClick={handleShowModalPerfil}>
          <button className = "btn btn-sm btn-light-primary" >
            <i className = "fa fa-lg fa-user p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-3">
          <button className = "btn btn-sm btn-light-primary" onClick={handleShowModalRoutes}>
            <i className = "fa fa-lg fa-route p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-3 offcanvas-mobile">
          <button className = "btn btn-sm btn-light-primary" onClick={handleShowModalAsesor}>
            <i className = "fa fa-lg fa-expand-arrows-alt p-0"></i>
          </button>
        </div>
    </div>
		)
}



export default InfoWindowCustom
