import React from "react";
import { useSubheader } from "../../../_metronic/layout";

export default function InformesPage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Informes");

  return (
    <>
      <div className="row">
        <div className="col-4 my-4 px-3">
          <div className="card card-stats p-4">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h2 className="card-title text-uppercase text-muted mb-0">
                    Total de creditos
                  </h2>
                  <span className="h3 font-weight-bold mb-0 countDisplay">
                    0 Creditos |$ 0
                  </span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                    <i className="ni ni-cart"></i>
                  </div>
                </div>
              </div>
              <p className="mb-0 text-sm">
                <span className="text-nowrap d-none">
                  dd/mm/yyyy - dd/mm/yyyy
                </span>
              </p>
            </div>
            <div className="card-body pb-2 pt-2">
              <div className="row align-items-center">
                <div className="form-group col-12 pr-1 pl-1 mb-2 focused">
                  <label for="">Oficina:</label>
                  <select className="form-control commerce">
                    <option selected="" value="0">
                      todos
                    </option>
                  </select>
                </div>
                <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                  <label for="">Desde</label>
                  <input
                    type="date"
                    className="form-control startDate"
                    value="2021-05-31"
                    placeholder="Inicial"
                  />
                </div>
                <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                  <label for="">Hasta</label>
                  <input
                    type="date"
                    className="form-control endDate"
                    value="2021-05-31"
                    placeholder="Final"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer mt-4 pt-5 pb-3 px-5">
              <span className="text-danger errorDisplay"></span>
              <button className="btn btn-primary btn-block btn-count-date">
                Filtrar
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 my-4 px-3">
          <form
            action="http://multitiendafavores.ventual.co/reporte"
            method="post"
            target="blank"
          >
            <div className="card card-stats p-4" data-type="1">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h2 className="card-title text-uppercase text-muted mb-0">
                      Creditos por oficina
                    </h2>
                    <span className="h3 font-weight-bold mb-0 countDisplay">
                      0 Creditos |$ 0
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                      <i className="ni ni-money-coins"></i>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-sm">
                  <span className="text-nowrap d-none">
                    dd/mm/yyyy - dd/mm/yyyy
                  </span>
                </p>
              </div>
              <div className="card-body pb-2 pt-2">
                <div className="row align-items-center">
                  <div className="form-group col-6 pr-1 pl-1 mb-2 focused">
                    <label for="">Oficina:</label>
                    <select
                      className="form-control commerce"
                      name="commerce"
                      id="selectCommerce"
                    >
                      <option selected="" value="0">
                        todos
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-6 pr-1 pl-1 mb-2">
                    <label for="">Asesor:</label>
                    <select
                      className="form-control"
                      name="category"
                      id="categories"
                      required=""
                    ></select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Desde</label>
                    <input
                      type="date"
                      name="start"
                      className="form-control startDate"
                      value="2021-05-31"
                      placeholder="Inicial"
                    />
                  </div>
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Hasta</label>
                    <input
                      type="date"
                      name="end"
                      className="form-control endDate"
                      value="2021-05-31"
                      placeholder="Final"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer mt-4 pt-5 pb-3 px-5">
                <span className="text-danger errorDisplay"></span>
                <button type="submit" className="btn btn-primary btn-block">
                  Generar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-4 my-4 px-3">
          <div className="card card-stats p-4">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    Visitas por oficina
                  </h5>
                  <span className="h2 font-weight-bold mb-0 "></span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                    <i className="ni ni-shop"></i>
                  </div>
                </div>
              </div>
            </div>
            <form
              action="http://multitiendafavores.ventual.co/reporte"
              method="post"
              target="blank"
            >
              <div className="card-body pb-2 pt-2">
                <div className="row align-items-center">
                  <div className="form-group col-12 pr-1 pl-1 mb-2 focused">
                    <label for="">Oficina:</label>
                    <select name="commerce" id="" className="form-control">
                      <option selected="" value="0">
                        todos
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Desde</label>
                    <input
                      type="date"
                      className="form-control startDate"
                      name="start"
                      value="2021-05-31"
                      placeholder="Inicial"
                    />
                  </div>
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Hasta</label>
                    <input
                      type="date"
                      className="form-control endDate"
                      name="end"
                      value="2021-05-31"
                      placeholder="Final"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer mt-4 pt-5 pb-3 px-5">
                <button type="submit" className="btn btn-primary btn-block">
                  Generar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-4 my-4 px-3">
          <div className="card card-stats p-4" data-type="1">
            <div className="card-header">
              <div className="row">
                <div className="col my-0">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    Asesores:
                    <p className="mb-0 text-sm">
                      <span className="text-nowrap d-none">
                        dd/mm/yyyy - dd/mm/yyyy
                      </span>
                    </p>
                  </h5>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pb-2 pt-2">
              <div className="row align-items-center">
                <div className="form-group col-12 pr-1 pl-1 mb-2 focused">
                  <label for="">Clasificacion de Asesor:</label>
                  <select className="form-control tipoCount">
                    <option value="1">todos</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                  <label for="">Desde</label>
                  <input
                    type="date"
                    className="form-control startDate"
                    value="2021-05-31"
                    placeholder="Inicial"
                  />
                </div>
                <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                  <label for="">Hasta</label>
                  <input
                    type="date"
                    className="form-control endDate"
                    value="2021-05-31"
                    placeholder="Final"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer mt-4 pt-5 pb-3 px-5">
              <span className="text-danger errorDisplay"></span>
              <button className="btn btn-primary btn-block btn-count-date">
                Filtrar
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 my-4 px-3">
          <form
            action="http://multitiendafavores.ventual.co/reporte"
            method="post"
            target="blank"
          >
            <div className="card card-stats p-4">
              <div className="card-header">
                <div className="row">
                  <div className="col my-0">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Creditos por Asesor
                    </h5>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                      <i className="ni ni-badge"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pb-2 pt-2">
                <div className="row align-items-center">
                  <div className="form-group col-12 pr-1 pl-1 mb-2 focused">
                    <label for="">Asesor:</label>
                    <select name="commerce" id="" className="form-control">
                      <option selected="" value="0">
                        todos
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Desde</label>
                    <input
                      name="start"
                      type="date"
                      className="form-control startDate"
                      value="2021-05-31"
                      placeholder="Inicial"
                    />
                  </div>
                  <div className="form-group col-12 pr-1 pl-1 mb-0 focused">
                    <label for="">Hasta</label>
                    <input
                      name="end"
                      type="date"
                      className="form-control endDate"
                      value="2021-05-31"
                      placeholder="Final"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer mt-4 pt-5 pb-3 px-5">
                <button type="submit" className="btn btn-primary btn-block">
                  Generar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
