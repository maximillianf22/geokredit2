import React, {useState} from 'react'
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ModalCreate from '../../_metronic/_partials/gerente/ModalCreate'

export default function GerentePage() {
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleCloseModalCreate = () => setShowModalCreate(false);
    const handleShowModalCreate = () => setShowModalCreate(true);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
                            <h2>Gerentes</h2>
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
                                        <th className="text-center">Nombre completo</th>
                                        <th className="text-center">Celular</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Zona</th>
                                        <th className="text-center">No. de asesores</th>
                                        <th className="text-center">Directores a cargo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pl-0">
                                            <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                                                <span className="symbol-label">
                                                    <SVG
                                                        className="h-75 align-self-end"
                                                        src={toAbsoluteUrl("/media/svg/id.svg")}
                                                    ></SVG>
                                                </span>
                                            </div>
                                        </td>
                                        <td className=" text-center">
                                    
                                            <span className="text-dark font-size-md font-weight-bolder d-block">
                                                Jaime Barrios</span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                                +57 3008556458
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold text-info">jaimebarrios@gmail.com</span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold text-warning">
                                                Zona x</span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                                3
                    </span>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-weight-bold">
                                            3
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