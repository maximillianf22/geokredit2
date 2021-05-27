import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ModalCreate from "../../../_metronic/_partials/gerentes/ModalCreate";
import ModalEdit from "../../../_metronic/_partials/gerentes/ModalEdit";
import { Accordion, Card, Button } from "react-bootstrap";

export default function GerenteDetail() {
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
              <h2>Gerentes</h2>
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
                    <th className="text-center">Nombre completo</th>
                    <th className="text-center">Celular</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Zona</th>
                    <th className="text-center">No. de asesores</th>
                    <th className="text-center">Directores a cargo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                        <span className="symbol-label">
                          <SVG
                            className="h-75 align-self-end"
                            src={toAbsoluteUrl("/media/svg/id.svg")}
                          ></SVG>
                        </span>
                      </div>
                    </td>
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
                      <span className="font-weight-bold">3</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">3</span>
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
          <ModalEdit show={showModalEdit} handleClose={handleCloseModalEdit} />
        </div>
      </div>
    </div>
  );
}
