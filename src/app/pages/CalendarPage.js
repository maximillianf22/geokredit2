import React, { useState } from "react";
import FullCalendario, {
  formatDate,
} from "../../_metronic/_partials/map/FullCalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Accordion, Card, Button } from "react-bootstrap";

export default function CalendarPage() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-md-between flex-sm-column flex-md-row">
              <h2>Calendario</h2>
            </div>
            <Accordion>
              <Card className="card-filtro">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="btn-filtro btn btn-primary">
                    <i className="fa fa-filter mr-2"></i> Filtro
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control " placeholder="Nombre" />
                      </div>
                      <div class="form-group">
                        <label>Documento</label>
                        <input type="text" class="form-control " placeholder="Documento" />
                      </div>
                    </div>
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <label>Telefono</label>
                        <input type="text" class="form-control " placeholder="Telefono" />
                      </div>
                      <div class="form-group mt-5 pt-5">
                        <div class="row mt-2">
                          <div class="col-6 px-1 px-lg-3">
                            <button class="btn btn-success btn-block">
                              <p class="mb-0 d-none d-sm-none d-lg-block d-md-none">Buscar <i class="p-0 fa fa-search"></i></p>
                              <span class="d-block d-sm-block d-md-block d-lg-none">
                                <i class="p-0 fa fa-search"></i>
                              </span>
                            </button>
                          </div>
                          <div class="col-6 px-1 px-lg-3">
                            <button class="btn btn-danger btn-block">
                              <p class="mb-0 d-none d-sm-none d-lg-block d-md-none">Limpiar <i class="p-0 fa fa-eraser"></i></p>
                              <span class="d-block d-sm-block d-md-block d-lg-none">
                                <i class="p-0 fa fa-eraser"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="card-body">
            <FullCalendario
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
