import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

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

import { IonApp, IonRouterOutlet } from "@ionic/react";

import UserState from "./components/context/UserState.jsx";
import UserContext from "./components/context/UserContext.jsx";
import Auth from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  // const { user } = useContext(UserContext);
  // console.log("dsds");
  return (
    <IonApp>
      <UserState>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/auth" component={Auth} />
            {/* <Route
              render={(user) =>
                user.isAuthenticated ? <Home /> : <Redirect to="/" />
              }
            /> */}
            <Route path="/home" component={Home} />
            <Redirect exact from="/" to="/auth" />
          </IonRouterOutlet>
        </IonReactRouter>
      </UserState>
    </IonApp>
  );
};

export default App;
