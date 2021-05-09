import React, {useState} from 'react'
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ModalCreate from '../../_metronic/_partials/oficina/ModalCreate'

export default function OficinaPage() {
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleCloseModalCreate = () => setShowModalCreate(false);
    const handleShowModalCreate = () => setShowModalCreate(true);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
                            <h2>Oficina</h2>
                            <div>
                                <button className="btn btn-primary btn-block" onClick = {handleShowModalCreate}>
                                    <i className="fa fa-plus mr-2"></i>Crear
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table  table-vertical-center">
                                <thead>
                                    <tr>
                                        <th className="" style={{ width: '50px' }}></th>
                                        <th className="text-center">Nombre oficina</th>
                                        <th className="text-center">Dirección</th>
                                        <th className="text-center">Teléfono</th>
                                        <th className="text-center">Director de oficina</th>
                                        <th className="text-center">Gerente de oficina</th>
                                        <th className="text-center">Gestor de oficina</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pl-0">
                                            <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                                                <span className="symbol-label">
                                                    <SVG
                                                        className="h-75 align-self-end"
                                                        src={toAbsoluteUrl("/media/svg/company.svg")}
                                                    ></SVG>
                                                </span>
                                            </div>
                                        </td>
                                        <td className=" text-center">
                                            <a
                                                href="#"
                                                className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                            >
                                                Developapp
                    </a>
                                            <span className="text-muted font-weight-bold d-block">
                                                Officine 306
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="text-muted font-weight-bold d-block font-size-sm">
                                                Kra 54 - no. 53-45
                    </span>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-md">
                                                Barranquilla
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bolder text-primary">
                                                +57 3008556458
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                                Jaime Barrios
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                                Jaime Barrios
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                                Jaime Barrios
                    </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <ModalCreate show={showModalCreate} handleClose={handleCloseModalCreate}></ModalCreate>
                </div>
            </div>
        </div>
    )
}