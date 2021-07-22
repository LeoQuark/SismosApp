import { useState, useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserContext from "../components/context/UserContext";
import axios from "axios";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonButton,
} from "@ionic/react";

const API_URL = "http://localhost:4000";

const DetalleSismo = (props) => {
  const { id } = useParams();

  const [sismo, setSismo] = useState({});

  const getSismoById = async () => {
    await axios.get(`${API_URL}/api/earthquakes/${id}`).then((result) => {
      if (result.status === 200) {
        console.log(result.data);
        setSismo(result.data);
      }
    });
  };

  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>{id}</IonTitle>
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

export default DetalleSismo;
