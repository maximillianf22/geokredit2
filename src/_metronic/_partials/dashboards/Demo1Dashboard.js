import React from "react";
import {Tab, Nav} from "react-bootstrap";
import {
  MixedWidget6,
  StatsWidget10,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,
  ListsWidget3,
  ListsWidget4,
} from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
    {/* begin::Row */}
      <div className="row">
        <div className="col-xl-4">
          <MixedWidget6 className="gutter-b card-stretch" />
        </div>
        <div className="col-xl-8">
          <Tab.Container id="left-tabs-example" defaultActiveKey="mes">
            <div className="nav-position">
              <Nav className="bg-secondary rounded" variant="pills" size="sm">
                <Nav.Item >
                  <Nav.Link className="py-2 px-4" eventKey="mes">Mes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-2 px-4" eventKey="semana">Semana</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-2 px-4" eventKey="dia">Dia</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="mes">
              <StatsWidget11
                className="card-stretch card-stretch-half gutter-b h-270"
                symbolShape="circle"
                baseColor="success" 
              />
              </Tab.Pane>
              <Tab.Pane eventKey="semana">
              <StatsWidget10
                className="card-stretch card-stretch-half gutter-b h-270"
                symbolShape="circle"
                baseColor="success" 
              />
              </Tab.Pane>
              <Tab.Pane eventKey="dia">
              <StatsWidget12
                className="card-stretch card-stretch-half gutter-b h-270"
                symbolShape="circle"
                baseColor="success" 
              />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <div className="row">
            <div className="col-lg-6 col-xxl-6 order-1 order-xxl-2">
              <ListsWidget1 className="card-stretch gutter-b" />
            </div>
            <div className="col-lg-6 col-xxl-6 order-1 order-xxl-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="asesores">
              <div className="nav-position">
                <Nav className="bg-secondary rounded" variant="pills" size="sm">
                  <Nav.Item >
                    <Nav.Link className="py-2 px-4" eventKey="asesores">Asesores</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="py-2 px-4" eventKey="gerentes">Directores</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="asesores">
                <ListsWidget3 className="card-stretch gutter-b" />
                </Tab.Pane>
                <Tab.Pane eventKey="gerentes">
                <ListsWidget4 className="card-stretch gutter-b" />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}