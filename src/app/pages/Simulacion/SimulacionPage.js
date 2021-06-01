import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function SimulacionPage() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2>Simulaciones</h2>
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
                    <th className="text-center">Origen Cliente</th>
                    <th className="text-center">Valor Cuota</th>
                    <th className="text-center">Plazo</th>
                    <th className="text-center">Taza Interes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-center">
                      <span className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Jaime Barrios
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        Asesor Junior
                      </span>
                    </td>
                    <td className=" text-center">
                      <span className="text-dark font-size-md font-weight-bolder d-block">
                        Alejandro Fernandez
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold text-info">
                        Base de datos #
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">430,000</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">48 meses</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">4%</span>
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
