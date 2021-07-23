import { useState, useContext, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import UserContext from "../components/context/UserContext";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonButton,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";

import { earth, peopleCircle, home } from "ionicons/icons";

import Sismos from "./Sismos.jsx";
import Integrantes from "./Integrantes.jsx";
import Inicio from "./Inicio.jsx";
import DetalleSismo from "./DetalleSismo.jsx";
const Home = (props) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/inicio" component={Inicio} />
          <Route path="/home/sismos" component={Sismos} />
          <Route path="/home/sismos/:id" component={DetalleSismo} />
          <Route path="/home/integrantes" component={Integrantes} />
          <Redirect from="/home" to="/home/inicio" exact />
          {/* <Redirect from="/home/sismos" to="/home/sismos" exact /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="py-2">
          <IonTabButton tab="speakers" href="/home/inicio">
            <IonIcon icon={home} />
            <IonLabel>home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/home/sismos">
            <IonIcon icon={earth} />
            <IonLabel>Sismos</IonLabel>
            {/* <IonBadge>6</IonBadge> */}
          </IonTabButton>
          <IonTabButton tab="about" href="/home/integrantes">
            <IonIcon icon={peopleCircle} />
            <IonLabel>Integrantes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default Home;
