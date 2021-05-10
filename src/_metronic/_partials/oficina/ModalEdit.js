import React from "react";
import {Modal} from 'react-bootstrap'

export default function ModalEdit({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar oficina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-6">
                    <label>Nombre*</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-md-6">
                    <label>Dirección*</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-md-6 mt-md-4">
                    <label>Teléfono*</label>
                    <input className="form-control" type="number"/>
                </div>
                <div className="col-md-6 mt-md-4">
                    <label>Director de oficina*</label>
                   <select className="form-control">
                        <option>Jaime Barrios</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Gerente de oficina*</label>
                   <select className="form-control">
                        <option>Jaime Barrios</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Gestor de oficina*</label>
                   <select className="form-control">
                        <option>Jaime Barrios</option>
                    </select>
                </div> 
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" style={{width: '20rem'}}><i className="fa fa-spinner mr-2"></i>Actualizar</button>
        </Modal.Footer>
      </Modal>
    )
}