import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalDetail({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Detalle del Gerente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mb-0">
          <div className="card-plain mx-auto card-custom gutter-b w-100 mb-0">
            <div className="card-body pt-4">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                  <div
                    className="symbol-label"
                    style={{
                      backgroundImage:
                        "url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg)",
                    }}
                  ></div>
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div>
                  <a
                    href="!#"
                    className="font-weight-bold text-center font-size-h3 text-dark-75 text-hover-primary"
                  >
                    Maximillian Fernandez
                  </a>
                  <div className="text-muted">Gerente de Zona</div>
                  <div className="d-flex flex-column w-100 mx-auto mt-5">
                  <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                    <span className="text-muted mr-2 font-size-sm">
                      Eficiencia
                    </span>
                    <span className="text-dark s text-center font-size-sm font-weight-bold">
                      65%
                    </span>
                  </div>
                  <div className="progress progress-xs w-100">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                </div>
              </div>
              <div className="pt-8 pb-6">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Correo:</span>
                  <a href="!#" className="text-muted text-hover-primary">
                    matt@geokredit.com
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Telefono:</span>
                  <span className="text-muted">(306)34254578</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Oficina:</span>
                  <span className="text-muted">Barranquilla</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Asesores:</span>
                  <span className="text-muted">30</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Directores:</span>
                  <span className="text-muted">10</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
