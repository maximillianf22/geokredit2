/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export function BaseTablesWidget6({ className }) {
  return (
    <>
      {/* begin::Base Table Widget 6 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Historico
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              100.000.000 en Creditos Colocados
            </span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body pt-0">
          <Accordion>
            <Card className="card-filtro">
              <Card.Header className=" ml-auto bg-white">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className=" btn btn-primary"
                  style={{ marginTop: "-85px" }}
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

          {/* begin::Table */}
          <div className="table-responsive" style={{ maxHeight: "300px" }}>
            <table className="table table-borderless table-vertical-center">
              <thead>
                <tr>
                  <th>Referencia</th>
                  <th>Tipo</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">984975829</td>
                  <td className="text-nowrap">
                    <span>Credito Aprobado</span>
                  </td>
                  <td className="text-nowrap">$300.000</td>
                  <td className="text-nowrap">
                    <i className="p-0 fa fa-circle-o text-success f-s-12 m-r-10"></i>{" "}
                    Completado
                  </td>
                  <td className="text-nowrap">10/11/2020</td>
                  <td className="text-nowrap">
                    <span>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mensaje"
                      >
                        <i className="p-0 fa fa-eye color-info"></i>
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* end::Table */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Base Table Widget 6 */}
    </>
  );
}
