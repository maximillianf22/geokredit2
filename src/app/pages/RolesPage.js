import React, { useState } from "react";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ModalCreate from "../../_metronic/_partials/roles/ModalCreate";
import ModalEdit from "../../_metronic/_partials/roles/ModalEdit";
import { Form } from "react-bootstrap";

export default function RolesPage() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const handleCloseModalCreate = () => setShowModalCreate(false);
  const handleShowModalCreate = () => setShowModalCreate(true);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card bg-transparent">
          <div className="card-header py-5">
            <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
              <h2 className="m-0 my-auto">Roles y permisos</h2>
            </div>
          </div>
          <div className="card-body px-4">
            <div className="row">
              <div className="col-md-5  pl-0">
                <div className="table-responsive card-body bg-white">
                  <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
                    <h4 className="m-0 my-auto">Roles</h4>
                    <div>
                      <button
                        className="btn btn-primary btn-block btn-sm"
                        onClick={handleShowModalCreate}
                      >
                        <i className="fa fa-plus mr-2"></i>Nuevo Rol
                      </button>
                    </div>
                  </div>
                  <table className="table  table-vertical-center">
                    <thead>
                      <tr>
                        <th className="text-center">Rol</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" text-center">
                          <span className="text-dark font-size-md font-weight-bolder d-block">
                            Asesor
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="font-weight-bold text-success">
                            Activo
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
                            <button className="btn btn-info btn-sm mr-md-2 mt-sm-2">
                              <i className="fa fa-cog"></i>
                            </button>
                            <button className="btn btn-danger btn-sm mt-sm-2">
                              <i className="fa fa-minus"></i>
                            </button>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" text-center">
                          <span className="text-dark font-size-md font-weight-bolder d-block">
                            Gerente
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="font-weight-bold text-success">
                            Activo
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
                            <button className="btn btn-info btn-sm mr-md-2 mt-sm-2">
                              <i className="fa fa-cog"></i>
                            </button>
                            <button className="btn btn-danger btn-sm mt-sm-2">
                              <i className="fa fa-minus"></i>
                            </button>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" text-center">
                          <span className="text-dark font-size-md font-weight-bolder d-block">
                            Director
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="font-weight-bold text-success">
                            Activo
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
                            <button className="btn btn-info btn-sm mr-md-2 mt-sm-2">
                              <i className="fa fa-cog"></i>
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
              <div className="col-md-7  pr-0">
                <div className="card-body bg-white">
                <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
                    <h4 className="m-0 my-auto">Permisos</h4>
                    <div>
                      <button
                        className="btn btn-primary btn-block btn-sm"
                      >
                        <i className="fa fa-save mr-2"></i>Guardar permisos
                      </button>
                    </div>
                  </div>
                  <div className=" py-2 mb-2">
                    <div className="row py-3 border-bottom">
                      <div className="col-3 pl-5">
                        <b className="ml-5">Mapa</b>
                      </div>
                      <div className="col-9">
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Ver"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Crear"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Editar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Eliminar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                    <div className="row py-3 border-bottom">
                      <div className="col-3 pl-5">
                        <b className="ml-5">Dashboard</b>
                      </div>
                      <div className="col-9">
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Ver"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Crear"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Editar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Eliminar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                    <div className="row py-3 border-bottom">
                      <div className="col-3 pl-5">
                        <b className="ml-5">Asesores</b>
                      </div>
                      <div className="col-9">
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Ver"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Crear"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Editar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Eliminar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                    <div className="row py-3 border-bottom">
                      <div className="col-3 pl-5">
                        <b className="ml-5">Bases de datos</b>
                      </div>
                      <div className="col-9">
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Ver"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Crear"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Editar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Eliminar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                    <div className="row py-3 border-bottom">
                      <div className="col-3 pl-5">
                        <b className="ml-5">Calendario</b>
                      </div>
                      <div className="col-9">
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`inline-${type}`}>
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Ver"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Crear"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Editar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                              <Form.Check
                                className="mx-4"
                                inline
                                label="Eliminar"
                                type={type}
                                id={`inline-${type}-3`}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
