import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalCreate({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Editar Rol</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <label>Rol*</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6">
            <label>Estado*</label>
            <select className="form-control">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
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