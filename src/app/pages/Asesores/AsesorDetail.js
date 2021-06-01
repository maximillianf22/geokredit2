import React from "react";
import { ListsWidget14 } from "../../../_metronic/_partials/widgets";
import {Tab, Nav} from "react-bootstrap";
import {
  MixedWidget40,
  MixedWidget41,
  MixedWidget42,
} from "../../../_metronic/_partials/widgets";
import { BaseTablesWidget6 } from "../../../_metronic/_partials/widgets";

export default function AsesorDetail() {
  return (
    <div className="row">
      <div className="col-lg-5 my-5 gutter-b card-stretch">
        <ListsWidget14></ListsWidget14>
      </div>
      <div className="col-lg-7 my-5 gutter-b card-stretch ">
        <BaseTablesWidget6 />
        <Tab.Container id="left-tabs-example" defaultActiveKey="mes">
          <div className="nav-position2">
            <Nav className="bg-secondary rounded" variant="pills" size="sm">
              <Nav.Item>
                <Nav.Link className="py-2 px-4" eventKey="mes">
                  Mes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-2 px-4" eventKey="semana">
                  Semana
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-2 px-4" eventKey="dia">
                  Dia
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="mes">
              <MixedWidget40 className="mt-10"></MixedWidget40>
            </Tab.Pane>
            <Tab.Pane eventKey="semana">
              <MixedWidget41 className="mt-10"></MixedWidget41>
            </Tab.Pane>
            <Tab.Pane eventKey="dia">
              <MixedWidget42 className="mt-10"></MixedWidget42>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
