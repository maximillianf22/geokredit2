/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

export function ListsWidget14({ className }) {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      <div className={`card card-custom  pb-10 ${className}`}>
        {/* begin::User */}
        <div className="row p-4 mt-10">
          <div className="d-flex align-items-center text-center  col-12">
            <div className="symbol symbol-60 symbol-xxl-100 mr-5 ml-10 align-self-start align-self-xxl-center">
              <div
                className="symbol-label"
                style={{ backgroundImage: `url(${user.pic})` }}
              ></div>
              {/* style="background-i
            mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
              <i className="symbol-badge bg-success"></i>
            </div>
            <div className="w-75 pr-10">
              <a
                href="!#"
                className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
              >
                {user.firstname} {user.lastname}
              </a>
              <div className="text-muted">{user.occupation}</div>
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
          <div className="d-flex align-items-center text-center col-12">
            <div className="py-2 py-2 w-75 mx-auto">
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
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="font-weight-bold mr-2">Zona:</span>
                <span className="text-muted">{user.address.city}</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="font-weight-bold mr-2">Fecha de Nacimiento:</span>
                <span className="text-muted">22-02-1995</span>
              </div>
              {/*<div className="align-items-center text-center">
                <button className="btn btn-primary mx-2"><i className="fa fa-calendar"></i></button>
                <button className="btn btn-danger mx-2"><i className="fa fa-user-times"></i></button>
                <button className="btn btn-success mx-2"><i className="fa fa-envelope"></i></button>
                </div>*/}
            </div>
          </div>
        </div>
        {/* end::User */}
        {/* Body */}
        <div
          className="card-body pt-0 px-15"
          style={{ maxHeight: "640px", overflowY: "auto" }}
        >
          <div className="timeline timeline-6 mt-3">
            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                08:42
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-warning icon-xl"></i>
              </div>

              <div className="font-weight-mormal font-size-lg timeline-content text-muted pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>

            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                10:00
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-success icon-xl"></i>
              </div>

              <div className="timeline-content d-flex">
                <span className="font-weight-bolder text-dark-75 pl-3 font-size-lg">
                  Visita realizada al cliente Lina Marcela en la carrera # 53b
                  #19 - 48 <br />y credito colocado de $9.000.000
                </span>
              </div>
            </div>

            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                14:37
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-danger icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>

            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                16:50
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-primary icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>

            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                21:03
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-danger icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-bolder text-dark-75 pl-3 font-size-lg">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>

            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                23:07
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-info icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>
            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                23:07
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-info icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>
            <div className="timeline-item align-items-start">
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                23:07
              </div>

              <div className="timeline-badge">
                <i className="fa fa-genderless text-info icon-xl"></i>
              </div>

              <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                Visita realizada al cliente Lina Marcela en la carrera # 53b #19
                - 48 <br />y credito colocado de $9.000.000
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
