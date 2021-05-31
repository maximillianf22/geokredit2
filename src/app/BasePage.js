import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MapPage } from "./pages/MapPage";
import UsuariosPage from './pages/Usuarios/UsuariosPage'
import OficinaPage from './pages/Oficinas/OficinaPage'
import OficinaDetail from './pages/Oficinas/OficinaDetail'
import AsesorPage from './pages/Asesores/AsesorPage'
import AsesorDetail from './pages/Asesores/AsesorDetail'
import GerentePage from './pages/Gerentes/GerentePage'
import CalendarPage from './pages/CalendarPage'
import RolesPage from './pages/RolesPage'

import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

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
        <ContentRoute path="/oficina" component={OficinaPage} />
        <ContentRoute path="/oficina-detalle" component={OficinaDetail} />
        <ContentRoute path="/asesor" component={AsesorPage} />
        <ContentRoute path="/asesor-detalle" component={AsesorDetail} />
        <ContentRoute path="/gerente" component={GerentePage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <ContentRoute path="/usuarios" component={UsuariosPage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
