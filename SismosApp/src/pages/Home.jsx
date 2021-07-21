import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  IonText,
  IonButton,
} from "@ionic/react";

const Home = () => {
  const { user } = useContext(UserContext);

  const location = useLocation();
  // console.log(location.state);
  // useEffect(() => {}, [user]);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark" className="py-3">
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
    </IonApp>
  );
};

export default Home;
