import React, { useMemo, useEffect, useState } from "react";
import {Modal} from 'react-bootstrap';
import {
    ListsWidget9,
  } from "../widgets";
export default function ModalAsesor({show, handleClose}){
    const tabs = {
        tab1: "kt_tab_pane-resume",
        tab2: "kt_tab_pane_calendar",
        tab3: "kt_tab_pane_roue",
      };
      const [activeTab, setActiveTab] = useState(tabs.tab1);

	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Asesor</Modal.Title>
          <div className="card-toolbar tb-nav bg-secondary rounded">
            <ul className="nav nav-pills nav-pills-sm nav-dark-75">
            <li className="nav-item">
                <a
                className={`nav-link py-2 px-4 ${activeTab === tabs.tab1 &&
                    "active"}`}
                data-toggle="tab"
                href={`#${tabs.tab1}`}
                onClick={() => setActiveTab(tabs.tab1)}
                >
                    <i className="fas fa-user text-white"></i>
                </a>
            </li>
            <li className="nav-item">
                <a
                className={`nav-link py-2 px-4 ${activeTab === tabs.tab2 &&
                    "active"}`}
                data-toggle="tab"
                href={`#${tabs.tab2}`}
                onClick={() => setActiveTab(tabs.tab2)}
                >
                    <i className="fas fa-calendar text-white"></i>
                </a>
            </li>
            <li className="nav-item">
                <a
                className={`nav-link py-2 px-4 ${activeTab === tabs.tab3 &&
                    "active"}`}
                data-toggle="tab"
                href={`#${tabs.tab3}`}
                onClick={() => setActiveTab(tabs.tab3)}
                >
                    <i className="fas fa-route text-white"></i>
                </a>
            </li>
            </ul>
        </div>
        </Modal.Header>
        <Modal.Body className="p-0">
            {/* begin::Row */}
                <ListsWidget9 className="gutter-b card-stretch mb-0" />
        </Modal.Body>
      </Modal>
      )
}