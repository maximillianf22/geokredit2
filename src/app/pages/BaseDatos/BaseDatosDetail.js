import React from "react";
import { Accordion, Card, Button, Pagination } from "react-bootstrap";

export default function BaseDatosDetail() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header pb-3">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2 className="mb-0">Detalle de base de datos</h2>
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Activo</th>
                    <th>Estado</th>
                    {/*<th>Visitado</th>*/}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alejandro Fernandez</td>
                    <td>30493049580</td>
                    <td>alejo@gmail.com</td>
                    <td>Si</td>
                    <td>Prospecto</td>
                    {/*<td>Si <button className="btn btn-sm btn-primary ml-3"><i className="fa fa-eye"></i></button> </td>*/}
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
