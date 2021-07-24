import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//ionic icons
import { IonApp, IonRouterOutlet } from "@ionic/react";

//importaciones de pages y userState(context)
import UserState from "./components/context/UserState.jsx";
import Auth from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";

//componente principal de la aplicacion
const App = () => {
  return (
    <IonApp>
      <UserState>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/auth" component={Auth} />
            <Route path="/home" component={Home} />
            {/* Redirecciona automaticamente al login o autenticacion del usuario via google*/}
            <Redirect exact from="/" to="/auth" />
          </IonRouterOutlet>
        </IonReactRouter>
      </UserState>
    </IonApp>
  );
};

export default App;