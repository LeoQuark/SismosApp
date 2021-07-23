import { useState, useContext, useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
import UserContext from "../components/context/UserContext";
import axios from "axios";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRouterOutlet,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import DetalleSismo from "./DetalleSismo.jsx";

const API_URL = "http://localhost:4000";

const Sismos = () => {
  const [sismos, setSismos] = useState([]);

  const getSismos = async () => {
    await axios.get(`${API_URL}/api/earthquakes`).then(
      (result) => {
        if (result.status === 200) {
          console.log("si");
          console.log(result.data.data);
          setSismos(result.data.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getSismos();
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Sismos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {sismos
            ? sismos.map((sismo, index) => (
                <IonItem key={index} href={`/home/sismos/${index}`}>
                  <IonLabel className="my-4">
                    {sismo.referencia_geografica}
                  </IonLabel>
                </IonItem>
              ))
            : "no"}
        </IonList>
      </IonContent>
      {/* <IonRouterOutlet>
        <Route path="/home/sismo/:id" component={DetalleSismo} />
      </IonRouterOutlet> */}
    </>
  );
};

export default Sismos;
