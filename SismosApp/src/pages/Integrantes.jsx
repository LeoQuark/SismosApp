import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../components/context/UserContext";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";

const Integrantes = () => {
  const nombres = ["Esteban Moyano", "Leonardo Peña", "Javier Saavedra"];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Integrantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- List of Text Items --*/}
        <IonList>
          {/* <IonItem>
            <IonContent>
              <IonGrid>
                <IonRow>
                  <IonCol>imagen</IonCol>
                  <IonCol>sa</IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </IonItem> */}
          {nombres.map((nombre, index) => (
            <IonItem key={index}>
              <IonLabel>{` ${nombre}`}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Integrantes;
