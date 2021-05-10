import React from 'react';
import {Modal} from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
export default function ModalCalendar({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Calendario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-calendar"><FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      /></Modal.Body>
      </Modal>
      )
}