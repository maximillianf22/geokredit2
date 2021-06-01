import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalEdit({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Valores parametros</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row p-md-5">
          <form method="post" className="col-md-4">
            <div className="form-group">
              <label for="">Nombre*</label>
              <input
                type="text"
                placeholder="Ingrese Nombre"
                className="form-control"
              />
              <small id="helpId" className="text-muted">
                Ejemplo: Tipo de documento, tipo de pago
              </small>
            </div>
            <div className="form-group">
              <label for="">Descripcion*</label>
              <textarea
                cols="30"
                rows="5"
                type="text"
                placeholder="Ingrese Descripcion"
                className="form-control"
              ></textarea>
              <small id="helpId" className="text-muted">
                Ejemplo: Parametro para ....
              </small>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Crear
            </button>
          </form>
          <div className="table-responsive col-md-8" style={{ height: '400px'}}>
            <table className="table">
              <thead className=" text-primary">
                <tr>
                  <th>Nombre</th> <th>Descripcion</th> <th>estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>facebook</td> <td>https://www.facebook.com/</td>
                  <td>Activo</td>
                  <td className="d-flex">
                    <button type="button" className="btn btn-success btn-sm mr-3">
                      <i className="fa fa-tools"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Instagram</td> <td></td> <td>Activo</td>
                  <td className="d-flex">
                    <button type="button" className="btn btn-success btn-sm mr-3">
                      <i className="fa fa-tools"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td> <td></td> <td>Activo</td>
                  <td className="d-flex">
                    <button type="button" className="btn btn-success btn-sm mr-3">
                      <i className="fa fa-tools"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>TikTok</td> <td>videos</td> <td>Activo</td>
                  <td className="d-flex">
                    <button type="button" className="btn btn-success btn-sm mr-3">
                      <i className="fa fa-tools"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" style={{ width: "20rem" }}>
          <i className="fa fa-spinner mr-2"></i>Actualizar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
