import { Route, Redirect } from "react-router-dom";

// importacion de los componentes de ionic-react
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

//ionic icons
import { earth, peopleCircle, home } from "ionicons/icons";

//Componentes
import Sismos from "./Sismos.jsx";
import Integrantes from "./Integrantes.jsx";
import Inicio from "./Inicio.jsx";
import DetalleSismo from "./DetalleSismo.jsx";

//componente inicial donde se definen las rutas principales de las pages creadas
const Home = (props) => {
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/inicio" component={Inicio} />
          <Route path="/home/sismos" component={Sismos} />
          <Route path="/home/sismo/:id" component={DetalleSismo} />
          <Route path="/home/integrantes" component={Integrantes} />
          <Redirect from="/home" to="/home/inicio" exact />
        </IonRouterOutlet>
        {/* navegador  */}
        <IonTabBar slot="bottom" className="py-2">
          <IonTabButton tab="speakers" href="/home/inicio">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/home/sismos">
            <IonIcon icon={earth} />
            <IonLabel>Sismos</IonLabel>
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