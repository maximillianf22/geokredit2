import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function VisitaPage() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2>Visitas</h2>
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
              <table className="table  table-vertical-center">
                <thead>
                  <tr>
                    <th className="text-center">Asesor</th>
                    <th className="text-center">Nombre Cliente</th>
                    <th className="text-center">Direccion</th>
                    <th className="text-center">Coordenadas</th>
                    <th className="text-center">Fecha - Hora</th>
                    <th className="text-center">Credito</th>
                    <th className="text-center">Simulacion</th>
                    <th className="text-center">Reagendado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        Jaime Barrios
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Asesor Junior
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        Alejandro Fernandez
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Base de datos#
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        Carrera 2b #14 - 39
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Barranquilla, Atlantico
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        Lat: 102131231
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Long: -742131231
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        31/05/2021
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                      05:57 PM
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        $10,000,000 <button className="btn btn-primary btn-sm ml-3 px-2 py-1"><i className="fa fa-eye"></i></button>
                      </span>
                      <span className="text-muted font-weight-bold d-block text-success">
                        Colocado
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-sm">
                        $15,000,000 <button className="btn btn-primary btn-sm ml-3 px-2 py-1"><i className="fa fa-eye"></i></button>
                      </span>
                      <span className="text-muted font-weight-bold d-block text-success">
                        Tasa 4%
                      </span>
                    </td>
                    <td className=" text-center">
                      N/A
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
