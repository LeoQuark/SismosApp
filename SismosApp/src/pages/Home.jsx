import { useContext } from "react";
import { Route, Redirect} from "react-router-dom";

import UserContext from "../components/context/UserContext";
import {
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
      <ion-content class="background">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home/inicio" component={Inicio} />
            <Route path="/home/sismos" component={Sismos} />
            <Route path="/home/sismo/:id" component={DetalleSismo} />
            <Route path="/home/integrantes" component={Integrantes} />
            <Redirect from="/home" to="/home/inicio" exact />
          </IonRouterOutlet>
          <IonTabBar class="backgroundtabs" slot="bottom" className="py-2">
            <IonTabButton tab="speakers" href="/home/inicio">
              <IonIcon icon={home} />
              <IonLabel>Inicio</IonLabel>
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
      </ion-content>
    </>
  );
};

export default Home;