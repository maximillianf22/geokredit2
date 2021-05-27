import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ModalCreate from "../../../_metronic/_partials/oficina/ModalCreate";
import ModalEdit from "../../../_metronic/_partials/oficina/ModalEdit";
import { Accordion, Card, Button } from "react-bootstrap";

export default function OficinaPage() {
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
            <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
              <h2>Oficinas</h2>
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
                    className="btn-filtro btn btn-primary"
                  >
                    <i className="fa fa-filter mr-2"></i> Filtro
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <label>Nombre</label>
                        <input
                          type="text"
                          class="form-control "
                          placeholder="Nombre"
                        />
                      </div>
                      <div class="form-group">
                        <label>Documento</label>
                        <input
                          type="text"
                          class="form-control "
                          placeholder="Documento"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <label>Telefono</label>
                        <input
                          type="text"
                          class="form-control "
                          placeholder="Telefono"
                        />
                      </div>
                      <div class="form-group mt-5 pt-5">
                        <div class="row mt-2">
                          <div class="col-6 px-1 px-lg-3">
                            <button class="btn btn-success btn-block">
                              <p class="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Buscar <i class="p-0 fa fa-search"></i>
                              </p>
                              <span class="d-block d-sm-block d-md-block d-lg-none">
                                <i class="p-0 fa fa-search"></i>
                              </span>
                            </button>
                          </div>
                          <div class="col-6 px-1 px-lg-3">
                            <button class="btn btn-danger btn-block">
                              <p class="mb-0 d-none d-sm-none d-lg-block d-md-none">
                                Limpiar <i class="p-0 fa fa-eraser"></i>
                              </p>
                              <span class="d-block d-sm-block d-md-block d-lg-none">
                                <i class="p-0 fa fa-eraser"></i>
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
                    <th className="" style={{ width: "50px" }}></th>
                    <th className="text-center">Nombre oficina</th>
                    <th className="text-center">Dirección</th>
                    <th className="text-center">Teléfono</th>
                    <th className="text-center">Director de oficina</th>
                    <th className="text-center">Gerente de oficina</th>
                    <th className="text-center">Gestor de oficina</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                        <span className="symbol-label">
                          <SVG
                            className="h-75 align-self-end"
                            src={toAbsoluteUrl("/media/svg/company.svg")}
                          ></SVG>
                        </span>
                      </div>
                    </td>
                    <td className=" text-center">
                      <a
                        href="#"
                        className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                      >
                        Developapp
                      </a>
                      <span className="text-muted font-weight-bold d-block">
                        Officine 306
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="text-muted font-weight-bold d-block font-size-sm">
                        Kra 54 - no. 53-45
                      </span>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-md">
                        Barranquilla
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bolder text-info">
                        +57 3008556458
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">Jaime Barrios</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">Jaime Barrios</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">Jaime Barrios</span>
                    </td>
                    <td className="text-center">
                      <span className="d-flex justify-content-md-center flex-md-row flex-sm-column px-md-5">
                        <button
                          className="btn btn-primary btn-sm mr-md-2 mt-sm-2"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-info btn-sm mr-md-2 mt-sm-2">
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
