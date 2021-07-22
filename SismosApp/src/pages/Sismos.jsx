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
  IonPage,
  IonButton,
} from "@ionic/react";

const Sismos = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Sismos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>sasa</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Sismos;
