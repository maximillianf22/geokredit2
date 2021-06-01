import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import ModalDetail from "../../../_metronic/_partials/creditos/ModalDetail";
import SVG from "react-inlinesvg";

export default function CreditosPage() {

  const [showModalDetail, setShowModalDetail] = useState(false);
  const handleCloseModalDetail = () => setShowModalDetail(false);
  const handleShowModalDetail = () => setShowModalDetail(true);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header pb-3">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2 className="mb-0">Creditos</h2>
            </div>
            <Accordion>
              <Card className="card-filtro">
                <Card.Header className="bg-white text-right">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    className="btn btn-primary"
                    style={{ marginTop: "-55px" }}
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
                    <th className="" style={{ width: "50px" }}></th>
                    <th scope="col">Asesor</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Oficina</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Monto</th>
                    <th scope="col"></th>
                    <th></th>
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
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Alejandro Fernandez
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Asesor Junior
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Jaime Barrios
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Base de datos #
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Oficina Buenavista
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Barranquilla
                      </span>
                    </td>
                    <td>31/05/2021 05:57 PM</td>
                    <td className="text-success font-weight-bold">Colocado</td>
                    <td className="font-weight-bold">10,000,000</td>
                    <td className="text-center">
                      <span className="d-flex justify-content-md-center flex-md-row flex-sm-column px-md-5">
                        <button className="btn btn-info btn-sm mr-md-2 mt-0" onClick={handleShowModalDetail}>
                          <i className="fa fa-eye"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ModalDetail
            show={showModalDetail}
            handleClose={handleCloseModalDetail}
          />
      </div>
    </div>
  );
}
