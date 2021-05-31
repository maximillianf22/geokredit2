/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function TilesWidget({}) {
  return (
    <>
      {/* begin::Tiles Widget 1 */}
      <div className={`card card-custom`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <div className="d-flex align-items-center text-center mt-5  col-12">
            <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url(https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170808055/84745854-construcci%C3%B3n-de-oficinas-icono-de-la-l%C3%ADnea-vector-aislado-en-el-fondo-blanco-icono-de-la-construcci%C3%B3n-de-la-.jpg)`,
                }}
              ></div>
              {/* style="background-i
            mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
              <i className="symbol-badge bg-success"></i>
            </div>
            <div className="w-100 pr-10">
              <a
                href="#"
                className="font-weight-bolder font-size-h6 text-dark-75 text-hover-primary"
              >
                Oficina Buenavista
              </a>
              <div className="text-muted">Barranquilla</div>
              <div className="mt-2">
                <div className="d-flex flex-column w-100 mr-2">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-muted mr-2 font-size-sm font-weight-bold">
                      Efectividad
                    </span>
                    <span className="text-muted font-size-sm font-weight-bold">
                      65%
                    </span>
                  </div>
                  <div className="progress progress-xs w-100">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body d-flex flex-column px-0">
          {/* begin::Items */}
          <div className="flex-grow-1 card-spacer-x">
            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Asesores
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    105,000,000 colocados
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                20
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-chart-bar"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Meta Mensual
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    $150,000,000
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                60%
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-percent"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Efectividad
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    en el ultimo año
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                90%
              </div>
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Tiles Widget 1 */}
    </>
  );
}
