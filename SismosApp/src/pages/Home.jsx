import { useState, useContext, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

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

import {
  earth,
  peopleCircle,
  personCircle,
  map,
  informationCircle,
} from "ionicons/icons";

import Sismos from "./Sismos.jsx";
import Integrantes from "./Integrantes.jsx";

const Home = (props) => {
  const { user } = useContext(UserContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" className="py-">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>Nombre : {user.user.displayName}</div>
              <div>Correo : {user.user.email}</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/sismos" component={Sismos} exact />
          <Route path="/home/Integrantes" component={Integrantes} exact />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule" href="/home/sismos">
            <IonIcon icon={earth} />
            <IonLabel>Sismos</IonLabel>
            {/* <IonBadge>6</IonBadge> */}
          </IonTabButton>

          <IonTabButton tab="speakers">
            <IonIcon icon={personCircle} />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href="/home/integrantes">
            <IonIcon icon={peopleCircle} />
            <IonLabel>Integrantes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default Home;
