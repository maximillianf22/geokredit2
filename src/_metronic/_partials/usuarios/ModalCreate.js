import React from "react";
import {Modal} from 'react-bootstrap'

export default function ModalCreate({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Crear Usuario</Modal.Title>
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
                <div className="col-md-6 mt-md-4">
                    <label>Celular*</label>
                    <input className="form-control" type="number"/>
                </div>
                <div className="col-md-6 mt-md-4">
                    <label>Email*</label>
                   <input className="form-control" type="email"/>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Rol*</label>
                   <select className="form-control">
                        <option>Rol x</option>
                        <option>Rol y</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Estado*</label>
                   <select className="form-control">
                        <option>Activo</option>
                        <option>Inactivo</option>
                    </select>
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Contraseña*</label>
                   <input className="form-control" type="password" />
                </div> 
                <div className="col-md-6 mt-md-4">
                    <label>Verificar Contraseña*</label>
                   <input className="form-control" type="password"/>
                </div> 
                
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" style={{width: '20rem'}}><i className="fa fa-save mr-2"></i>Guardar</button>
        </Modal.Footer>
      </Modal>
    )
}