import React from "react";
import {Modal} from 'react-bootstrap'

export default function ModalEdit({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar asesor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-6">
                    <label>Nombre*</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-md-6">
                    <label>Apellido*</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-md-4 mt-md-4">
                    <label>Celular*</label>
                    <input className="form-control" type="number"/>
                </div>
                <div className="col-md-8 mt-md-4">
                    <label>Email*</label>
                   <input className="form-control" type="email"/>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Categoría*</label>
                   <select className="form-control">
                        <option>Elite</option>
                        <option>Junior</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Fecha de ingreso*</label>
                   <input className="form-control" type="date" />
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Fecha de Nacimiento*</label>
                   <input className="form-control" type="date" />
                </div>
                <div className="col-md-6 mt-md-4">
                    <label>Zona*</label>
                   <select className="form-control">
                        <option>Zona x</option>
                        <option>Zona y</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Gerente de zona*</label>
                   <select className="form-control">
                        <option>Maximilian Fernandez</option>
                        <option>Lina Marcela</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Foto</label>
                   <input className="form-control" type="file" />
                </div> 
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" style={{width: '20rem'}}><i className="fa fa-spinner mr-2"></i>Actualizar</button>
        </Modal.Footer>
      </Modal>
    )
}