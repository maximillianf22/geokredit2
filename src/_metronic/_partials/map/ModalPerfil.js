import React from 'react';
import {Modal} from 'react-bootstrap';
import {
  ProfileCard,
} from "../widgets";
export default function ModalPerfil({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "md">
        <Modal.Header closeButton>
          <Modal.Title>Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
           <ProfileCard ></ProfileCard>
        </Modal.Body>
      </Modal>
      )
}