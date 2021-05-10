import React from "react";
import FullCalendario, { formatDate } from './FullCalendar'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Modal} from 'react-bootstrap';

export default function ModalCalendar({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Calendario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-calendar">
          <FullCalendario
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
          />
      </Modal.Body>
    </Modal>
    )
}