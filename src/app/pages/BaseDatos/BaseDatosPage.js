import React, { useState } from "react";
import ModalCreate from "../../../_metronic/_partials/basedatos/ModalCreate";
import ModalEdit from "../../../_metronic/_partials/basedatos/ModalEdit";
import { Accordion, Card, Button, Pagination } from "react-bootstrap";

export default function BaseDatosPage() {
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
          <div className="card-header pb-3">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2 className="mb-0">Bases de datos</h2>
              <div>
                <button
                  className="btn btn-success btn-block"
                  onClick={handleShowModalCreate}
                >
                  <i className="fa fa-plus mr-2"></i>Crear
                </button>
              </div>
            </div>
            <Accordion className="offcanvas-mobile">
              <Card className="card-filtro">
                <Card.Header className="bg-white text-right">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    className="btn btn-primary btn-filtro"
                  >
                    <i className="fa fa-filter mr-2"></i> Filtro
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <label>Nombre</label>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="form-group">
                        <label>Documento</label>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Documento"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <label>Telefono</label>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Telefono"
                        />
                      </div>
                      <div className="form-group mt-5 pt-5">
                        <div className="row mt-2">
                          <div className="col-6 px-1 px-lg-3">
                            <button className="btn btn-success btn-block">
                              <p className="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Buscar <i className="p-0 fa fa-search"></i>
                              </p>
                              <span className="d-block d-sm-block d-md-block d-lg-none">
                                <i className="p-0 fa fa-search"></i>
                              </span>
                            </button>
                          </div>
                          <div className="col-6 px-1 px-lg-3">
                            <button className="btn btn-danger btn-block">
                              <p className="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Limpiar <i className="p-0 fa fa-eraser"></i>
                              </p>
                              <span className="d-block d-sm-block d-md-block d-lg-none">
                                <i className="p-0 fa fa-eraser"></i>
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
              <table className="table align-items-center text-center table-flush">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Origen</th>
                    <th scope="col">C.Registros</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Eficiencia</th>
                    <th scope="col">Contacto</th>
                    <th scope="col"></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Base de datos #</td>
                    <td>Administracion Kredit</td>
                    <td>1,390</td>
                    <td>31/05/2021</td>
                    <td>
                      <div className="d-flex flex-column w-77 mr-2 offcanvas-mobile">
                        <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                          <span className="text-muted mr-2 font-size-sm">
                            Prospectos
                          </span>
                          <span className="text-dark s font-size-sm font-weight-bold">
                            65%
                          </span>
                        </div>
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
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Jaime Barrios
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Tel. 3029320930
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="d-flex justify-content-md-center flex-md-row flex-sm-column px-md-5">
                        <button
                          className="btn btn-primary btn-sm mr-md-2 mt-sm-2"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <a
                          className="btn btn-info btn-sm mr-md-2 mt-sm-2"
                          href="/base-datos-detalle"
                        >
                          <i className="fa fa-eye"></i>
                        </a>
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
