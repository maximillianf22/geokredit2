/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export function ListsWidget8() {
  return (
    <>
      <div
        className="card mt-10"
      >
        <div className="card-header">
          <h4 className="mb-0">Asesores</h4>
        </div>
        <Accordion>
            <Card className="card-filtro px-10">
              <Card.Header className=" ml-auto bg-white">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className=" btn btn-primary"
                  style={{ 
                    marginTop: "-95px"
                  }}
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

        <div className="card-body">
          <div className="table-responsive"
          style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <table className="table table-borderless table-vertical-center">
              <thead>
                <tr>
                  <th className="p-0 w-50px"></th>
                  <th className="p-0 min-w-200px"></th>
                  <th className="p-0 min-w-100px"></th>
                  <th className="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="pl-0 py-5">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label">
                        <img
                          src="/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </th>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Maximillian Fernandez
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Asesor Junior
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 mr-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                          50%
                        </span>
                        <span className="text-muted font-size-sm font-weight-bold">
                          Efectividad
                        </span>
                      </div>
                      <div className="progress progress-xs w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-0">
                    <a href="/asesor-detalle" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0 py-5">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label">
                        <img
                          src="/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </th>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Maximillian Fernandez
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Asesor Junior
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 mr-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                          50%
                        </span>
                        <span className="text-muted font-size-sm font-weight-bold">
                          Efectividad
                        </span>
                      </div>
                      <div className="progress progress-xs w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-0">
                    <a href="/asesor-detalle" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0 py-5">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label">
                        <img
                          src="/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </th>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Maximillian Fernandez
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Asesor Junior
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 mr-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                          50%
                        </span>
                        <span className="text-muted font-size-sm font-weight-bold">
                          Efectividad
                        </span>
                      </div>
                      <div className="progress progress-xs w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-0">
                    <a href="/asesor-detalle" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0 py-5">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label">
                        <img
                          src="/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </th>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Maximillian Fernandez
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Asesor Junior
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 mr-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                          50%
                        </span>
                        <span className="text-muted font-size-sm font-weight-bold">
                          Efectividad
                        </span>
                      </div>
                      <div className="progress progress-xs w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-0">
                    <a href="/asesor-detalle" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0 py-5">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label">
                        <img
                          src="/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </th>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Maximillian Fernandez
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Asesor Junior
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 mr-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                          50%
                        </span>
                        <span className="text-muted font-size-sm font-weight-bold">
                          Efectividad
                        </span>
                      </div>
                      <div className="progress progress-xs w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-0">
                    <a href="/asesor-detalle" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
