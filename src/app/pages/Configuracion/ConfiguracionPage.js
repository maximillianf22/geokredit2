import React from "react";
import { useSubheader } from "../../../_metronic/layout";

export const ConfiguracionPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Configuraciones");

  return (
    <>
      <div className="row row-paddingless">
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/roles"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-right border-bottom"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-user fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Roles y Permisos
            </span>
            <span className="d-block text-dark-50 font-size-lg">Nivel de acceso a los modulos</span>
          </a>
        </div>
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/simulador"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-bottom"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-credit-card fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Simulador
            </span>
            <span className="d-block text-dark-50 font-size-lg">Simulador de Creditox</span>
          </a>
        </div>
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/parametros"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-right"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-list-alt fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Parametros
            </span>
            <span className="d-block text-dark-50 font-size-lg">
              Parametros y Valor Parametros
            </span>
          </a>
        </div>
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/log"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-right"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-clipboard-list fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Log de Usuarios
            </span>
            <span className="d-block text-dark-50 font-size-lg">
              Registro de actividades de los usuarios
            </span>
          </a>
        </div>
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/informes"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-right"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-download fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Informes
            </span>
            <span className="d-block text-dark-50 font-size-lg">
              Descargar informes
            </span>
          </a>
        </div>
        <div className="col-md-4 col-6 border bg-white">
          <a
            href="/base-datos"
            className="d-block py-10 py-md-25 px-5 text-center bg-hover-light border-right"
          >
            <span className="svg-icon svg-icon-3x svg-icon-success">
              <i className="fa fa-database fa-2x"></i>
            </span>
            <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
              Bases de Datos
            </span>
            <span className="d-block text-dark-50 font-size-lg">
              Base de datos de prospectos
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
