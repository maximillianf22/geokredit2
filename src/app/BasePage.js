import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MapPage } from "./pages/Mapa/MapPage";
import UsuariosPage from './pages/Usuarios/UsuariosPage'
import LogPage from './pages/Usuarios/LogPage'
import SimulacionPage from './pages/Simulacion/SimulacionPage'
import VisitaPage from './pages/Visita/VisitaPage'
import BaseDatosPage from './pages/BaseDatos/BaseDatosPage'
import BaseDatosDetail from './pages/BaseDatos/BaseDatosDetail'
import OficinaPage from './pages/Oficinas/OficinaPage'
import OficinaDetail from './pages/Oficinas/OficinaDetail'
import AsesorPage from './pages/Asesores/AsesorPage'
import AsesorDetail from './pages/Asesores/AsesorDetail'
import GerentePage from './pages/Gerentes/GerentePage'
import DirectorPage from './pages/Directores/DirectorPage'
import CalendarPage from './pages/Calendario/CalendarPage'
import RolesPage from './pages/Roles/RolesPage'
import ParametrosPage from './pages/Parametros/ParametrosPage'
import InformesPage from './pages/Informes/InformesPage'
import CreditosPage from './pages/Creditos/CreditosPage'

import { ConfiguracionPage } from "./pages/Configuracion/ConfiguracionPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";

const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/mapa" component={MapPage} />
        <ContentRoute path="/calendario" component={CalendarPage} />
        <ContentRoute path="/roles" component={RolesPage} />
        <ContentRoute path="/parametros" component={ParametrosPage} />
        <ContentRoute path="/oficina" component={OficinaPage} />
        <ContentRoute path="/oficina-detalle" component={OficinaDetail} />
        <ContentRoute path="/asesor" component={AsesorPage} />
        <ContentRoute path="/asesor-detalle" component={AsesorDetail} />
        <ContentRoute path="/gerente" component={GerentePage} />
        <ContentRoute path="/director" component={DirectorPage} />
        <ContentRoute path="/configuracion" component={ConfiguracionPage} />
        <ContentRoute path="/usuarios" component={UsuariosPage} />
        <ContentRoute path="/log" component={LogPage} />
        <ContentRoute path="/simulacion" component={SimulacionPage} />
        <ContentRoute path="/visita" component={VisitaPage} />
        <ContentRoute path="/base-datos" component={BaseDatosPage} />
        <ContentRoute path="/base-datos-detalle" component={BaseDatosDetail} />
        <ContentRoute path="/informes" component={InformesPage} />
        <ContentRoute path="/creditos" component={CreditosPage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
