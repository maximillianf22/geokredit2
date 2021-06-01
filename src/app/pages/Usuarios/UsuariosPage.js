import React, { useState } from "react";
import ModalCreate from "../../../_metronic/_partials/usuarios/ModalCreate";
import ModalEdit from "../../../_metronic/_partials/usuarios/ModalEdit";
import { Accordion, Card, Button } from "react-bootstrap";

export default function UsuariosPage() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const handleCloseModalCreate = () => setShowModalCreate(false);
  const handleShowModalCreate = () => setShowModalCreate(true);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2>Usuarios</h2>
              <div>
                <button
                  className="btn btn-success btn-block"
                  onClick={handleShowModalCreate}
                >
                  <i className="fa fa-plus mr-2"></i>Crear
                </button>
              </div>
            </div>
            <Accordion>
              <Card className="card-filtro">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    className="btn-filtro btn btn-primary mt-1 mt-lg-0"
                  >
                    <i className="fa fa-filter mr-2"></i> Filtro
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <div  className="row">
                    <div  className="col-md-6 col-6">
                      <div  className="form-group">
                        <label>Nombre</label>
                        <input
                          type="text"
                           className="form-control "
                          placeholder="Nombre"
                        />
                      </div>
                      <div  className="form-group">
                        <label>Documento</label>
                        <input
                          type="text"
                           className="form-control "
                          placeholder="Documento"
                        />
                      </div>
                    </div>
                    <div  className="col-md-6 col-6">
                      <div  className="form-group">
                        <label>Telefono</label>
                        <input
                          type="text"
                           className="form-control "
                          placeholder="Telefono"
                        />
                      </div>
                      <div  className="form-group mt-5 pt-5">
                        <div  className="row mt-2">
                          <div  className="col-6 px-1 px-lg-3">
                            <button  className="btn btn-success btn-block">
                              <p  className="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Buscar <i  className="p-0 fa fa-search"></i>
                              </p>
                              <span  className="d-block d-sm-block d-md-block d-lg-none">
                                <i  className="p-0 fa fa-search"></i>
                              </span>
                            </button>
                          </div>
                          <div  className="col-6 px-1 px-lg-3">
                            <button  className="btn btn-danger btn-block">
                              <p  className="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Limpiar <i  className="p-0 fa fa-eraser"></i>
                              </p>
                              <span  className="d-block d-sm-block d-md-block d-lg-none">
                                <i  className="p-0 fa fa-eraser"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table  table-vertical-center">
                <thead>
                  <tr>
                    <th className="text-center">Nombre completo</th>
                    <th className="text-center">Celular</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Rol</th>
                    <th className="text-center">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-center">
                      <span className="text-dark font-size-md font-weight-bolder d-block">
                        Jaime Barrios
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">+57 3008556458</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold text-info">
                        jaimebarrios@gmail.com
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold text-warning">
                        Zona x
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold text-success">Activo</span>
                    </td>
                    <td className="text-center">
                      <span className="d-flex justify-content-md-center flex-md-row flex-sm-column px-md-5">
                        <button
                          className="btn btn-primary btn-sm mr-md-2 mt-sm-2"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-info btn-sm mr-md-2 mt-sm-2"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                        <button className="btn btn-danger btn-sm mt-sm-2">
                          <i className="fa fa-minus"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ModalCreate
            show={showModalCreate}
            handleClose={handleCloseModalCreate}
          />
          <ModalEdit 
              show={showModalEdit} 
              handleClose={handleCloseModalEdit} />
        </div>
      </div>
    </div>
  );
}
