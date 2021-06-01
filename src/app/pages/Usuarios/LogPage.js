import React from "react";
import { Accordion, Card, Button, Pagination } from "react-bootstrap";

export default function LogPage() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header pb-3">
            <div className="d-flex justify-content-between flex-sm-column flex-md-row">
              <h2 className="mb-0">Log de Usuarios</h2>
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
                    <th></th>
                    <th scope="col">Evento</th>
                    <th scope="col">Causante</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Acción</th>
                    <th scope="col">Fecha</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>31/05/2021 05:57 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>30/05/2021 03:35 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>25/05/2021 11:31 AM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>20/05/2021 12:06 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>12/05/2021 09:39 AM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>11/05/2021 08:49 AM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>10/05/2021 03:45 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>10/05/2021 01:44 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>10/05/2021 01:44 PM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Creado</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>Se ha creado el usuario Lina Negrete</td>
                    <td>30/04/2021 11:45 AM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inicio de sesión</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>El usuario inició sesión</td>
                    <td>30/04/2021 11:44 AM</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Actualizado</td>
                    <td>Administrador Admin</td>
                    <td>Administrador</td>
                    <td>Se ha actualizado el usuario Administrador Admin</td>
                    <td>22/04/2021 06:37 PM</td>
                  </tr>
                </tbody>
              </table>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
