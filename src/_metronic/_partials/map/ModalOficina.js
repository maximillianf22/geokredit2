import React from 'react';
import {Modal} from 'react-bootstrap';
import {
    TilesWidget1,
  } from "../widgets";
export default function ModalOficina({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "md">
        <Modal.Header closeButton>
          <Modal.Title>Oficina</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
            {/* begin::Row */}
                <TilesWidget1 className="gutter-b card-stretch mb-0" />
        </Modal.Body>
      </Modal>
      )
}