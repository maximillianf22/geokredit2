import React from "react";
import { TilesWidget } from "../../../_metronic/_partials/widgets";
import {Tab, Nav} from "react-bootstrap";
import {
  MixedWidget40,
  MixedWidget41,
  MixedWidget42,
  ListsWidget8,
} from "../../../_metronic/_partials/widgets";
import { BaseTablesWidget1 } from "../../../_metronic/_partials/widgets";

export default function AsesorDetail() {
  return (
    <div className="row">
      <div className="col-lg-5 my-5 gutter-b card-stretch">
        <TilesWidget></TilesWidget>
        <ListsWidget8></ListsWidget8>
      </div>
      <div className="col-lg-7 my-5 gutter-b card-stretch ">
        <Tab.Container id="left-tabs-example" defaultActiveKey="mes">
          <div className="nav-position3">
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
              <MixedWidget40 className=""></MixedWidget40>
            </Tab.Pane>
            <Tab.Pane eventKey="semana">
              <MixedWidget41 className=""></MixedWidget41>
            </Tab.Pane>
            <Tab.Pane eventKey="dia">
              <MixedWidget42 className=""></MixedWidget42>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <BaseTablesWidget1 className="mt-10" />
      </div>
    </div>
  );
}
