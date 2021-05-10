/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";


export function ListsWidget3({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Top Asesores
          </h3>
        </div>

        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez 
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small> <br/>
                Junior
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
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
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez 
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small> <br/>
                Junior
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
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
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez 
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small> <br/>
                Gold
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
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
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez 
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small> <br/>
                Gold
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
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
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez 
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small> <br/>
                Elite
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
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
    </>
  );
}

