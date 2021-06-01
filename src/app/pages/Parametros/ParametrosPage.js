import React, { useState } from "react";
import ModalEdit from "../../../_metronic/_partials/parametros/ModalEdit";
import { useSubheader } from "../../../_metronic/layout";

export default function ParametrosPage() {

  const suhbeader = useSubheader();
  suhbeader.setTitle("Parametros y Valor Parametro");

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);


  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Parametros</h4>
            </div>
            <div className="card-body">
              <form action="/valores-parametros" method="post">
                <input type="hidden" name="_method" value="POST" />
                <input
                  type="hidden"
                  name="_token"
                  value="EfRtgW4TwrxK0v4vS9AJwc4RosKF1GQ9nPkSZRaE"
                />
                <div className="form-group">
                  <label for="">Nombre*</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Ingrese Nombre"
                    aria-describedby="helpId"
                    className="form-control"
                  />
                  <small id="helpId" className="text-muted">
                    Ejemplo: Tipo de documento, tipo deago
                  </small>
                </div>
                <div className="form-group">
                  <label for="">Descripcion*</label>{" "}
                  <textarea
                    required="required"
                    cols="30"
                    rows="5"
                    type="text"
                    name="description"
                    id=""
                    placeholder="Ingrese Descripcion"
                    className="form-control"
                  ></textarea>
                  <small id="helpId" className="text-muted">
                    Ejemplo: Parametro para ....
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Crear
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card card-stretch">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className=" text-primary">
                    <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Estado</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Redes Sociales</td>
                      <td>Redes Sociales</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>informacion Corporativa</td>
                      <td>informacion Corporativa</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Ignacio Verdugo</td>
                      <td>
                        Ut error est iusto deserunt culpa minus aut. Qui
                        molestiae quia perspiciatis quis dolor aperiam quia.
                        Similique tempora atque dolorem vitae dolorum voluptatem
                        illum fugiat. Aut est ipsa qui sequi.
                      </td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Tipo doc</td>
                      <td>Tipo documento</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>hola mundo</td>
                      <td>jju</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hamburguesas</td>
                      <td>mm</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>prueba</td>
                      <td>prueba</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Footer</td>
                      <td>pie de pagina</td>
                      <td>Activo</td>
                      <td className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm mr-3"
                          onClick={handleShowModalEdit}
                        >
                          <i className="fa fa-layer-group"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm">
                          <i className="fa fa-tools"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ModalEdit 
            show={showModalEdit} 
            handleClose={handleCloseModalEdit} 
          />
        </div>
      </div>
    </>
  );
}
