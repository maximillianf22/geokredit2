/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../dropdowns";

export function ProfileCard() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      {user && (
        <div
          className="flex-row-auto offcanvas-mobile"
          id="kt_profile_aside"
        >
          <div className="card card-custom card-stretch">
            {/* begin::Body */}
            <div className="card-body pt-4 mb-4">
              {/* begin::Toolbar */}
              <div className="row mb-4">
                <div className="d-flex justify-content-start col">
                  Junior
                </div>
                <div className="d-flex justify-content-end col">
                  <b className="text-success">Activo</b>
                </div>
              </div>
              {/* end::Toolbar */}
              {/* begin::User */}
              <div className="d-flex align-items-center text-center mx-auto">
                <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  {/* style="background-i
                  mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div className="w-50">
                  <a
                    href="#"
                    className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                  >
                    {user.firstname} {user.lastname}
                  </a>
                  <div className="text-muted">{user.occupation}</div>
                  <div className="mt-2">
                  <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
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
              {/* end::User */}
              {/* begin::Contact */}
              <div className="py-9">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Correo:</span>
                  <span className="text-muted text-hover-primary">
                    {user.email}
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="font-weight-bold mr-2">Telefono:</span>
                  <span className="text-muted">{user.phone}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="font-weight-bold mr-2">Zona:</span>
                  <span className="text-muted">{user.address.city}</span>
                </div>
              </div>
              {/* end::Contact */}
              {/* begin::Items */}
              <div className="flex-grow-1 card-spacer-x">
                {/* begin::Item */}
                <div className="d-flex align-items-center justify-content-between mb-10">
                  <div className="d-flex align-items-center mr-2">
                    <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                      <div className="symbol-label">
                        <span className="svg-icon">
                          <i className="fas fa-shoe-prints"></i>
                        </span>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                      >
                        Visitas
                      </a>
                      <div className="font-size-sm text-muted font-weight-bold mt-1">
                        Meta 70 Visitas
                      </div>
                    </div>
                  </div>
                  <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                    60
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
        </div>
      )}
    </>
  );
}
