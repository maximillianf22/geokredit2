import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalCreate({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Crear Base de Datos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="inputOrigen">Nombre</label>
              <input
                type="text"
                name="nombre"
                required=""
                className="form-control"
                id="nombre"
                placeholder="Cámara de comercio"
              />
              <small className="text-danger" id="nombre-error"></small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="inputOrigen">Origen</label>
              <input
                type="text"
                name="origen"
                required=""
                className="form-control"
                id="origen
                                      "
                placeholder="Cámara de comercio"
              />
              <small className="text-danger" id="origen-error"></small>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label for="inputEmail">Subir archivo</label>
              <div className="form-control">
                <input
                  type="file"
                  required=""
                  className=""
                  name="select_file"
                  id="select_file"
                  placeholder="database.csv"
                />
                <small className="text-danger" id="select_file-error"></small>
              </div>
              <label className="mt-2">
                <p>
                  <i className="fa fa-info-circle"></i> Importante: El archivo
                  debe estar en formato .csv, además debe poseer los siguientes
                  campos en este orden: #/ID, Nombre Completo, Télefono, Email.
                </p>
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group px-2">
              <label for="inputContactName">Nombre del contacto</label>
              <input
                type="text"
                required=""
                name="nombre_contacto"
                className="form-control"
                id="nombre_contacto"
                placeholder="Jaime Andrés Barrios"
              />
              <small className="text-danger" id="nombre_contacto-error"></small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="inputContactTel">Teléfono</label>
              <input
                type="number"
                required=""
                name="telefono_contacto"
                className="form-control"
                id="telefono_contacto"
                placeholder="3008652438"
              />
              <small
                className="text-danger"
                id="telefono_contacto-error"
              ></small>
            </div>
          </div>
          <div className="col-md-12 pl-5">
            <div className="form-group">
              <label for="inputContactEmail">Email</label>
              <input
                type="email"
                required=""
                name="email_contacto"
                className="form-control"
                id="email_contacto"
                placeholder="correo@correo.com"
              />
              <small className="text-danger" id="email_contacto-error"></small>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" style={{ width: "20rem" }}>
          <i className="fa fa-save mr-2"></i>Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
