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

const Inicio = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>sasa</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Inicio;
