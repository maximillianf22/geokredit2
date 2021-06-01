import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalDetail({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Detalle del Credito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row px-3">
          <div className="col-12">
            <div className="d-flex flex-column font-weight-bold w-100">
              <a
                href="!#"
                className="text-hover-dark text-center font-weight-bold text-nowrap h3"
              >
                <b> Lina Marcela Negrete Arteaga</b>
              </a>
              <b className="text-muted font-size-lg text-center h4">
                Cliente
              </b>
              <div className="row h5 my-4">
                <div className="col-6 p-0">
                  <b className="">Lat:</b> 4.30494
                </div>
                <div className="col-6 p-0 h5 text-right">
                  <b className="">Long:</b> -74.39409
                </div>
              </div>
              <div className="row my-3">
                <div className="h5">
                  Carrera 2b #14 - 39 <br />
                  <b className="text-muted h6">Dirección</b>
                </div>
              </div>
              <div className="row my-3">
                <div className="h5">
                  Jueves 24 Abril 2021 <br />
                  <b className="text-muted h6">Fecha</b>
                </div>
              </div>
              <div className="row my-3">
                <div className="h5">
                  10:40am <br />
                  <b className="text-muted h6">Hora</b>
                </div>
              </div>
              <div className="row my-3">
                <div className="h5">
                  Base de datos #10 <br />
                  <b className="text-muted h6">Base de datos</b>
                </div>
              </div>
              <div className="row my-3">
                <div className="h5">
                  $10.000.000 - <b className="text-success">Colocado</b> <br />
                  <b className="text-muted h6">Credito</b>
                </div>
              </div>
              <div className="row mt-3">
                <a href="/asesor-detalle" className="btn btn-primary btn-block">
                  Ver perfil asesor
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
