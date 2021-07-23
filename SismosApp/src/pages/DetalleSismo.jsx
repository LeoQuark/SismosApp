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

import GoogleMaps from "simple-react-google-maps";

const API_URL = "http://localhost:4000";

const DetalleSismo = (props) => {
  const { id } = useParams();

  const [sismo, setSismo] = useState({});

  const getSismoById = async () => {
    await axios.get(`${API_URL}/api/earthquakes/${id}`).then((result) => {
      if (result.status === 200) {
        console.log(result.data.sismo);
        setSismo(result.data.sismo);
      }
    });
  };

  useEffect(() => {
    getSismoById();
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>{id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {sismo && (
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className="container">
                  <GoogleMaps
                    apiKey={"AIzaSyBl32R9o91f8vLaPXdIV1V4sCAdiX0DIcs"}
                    style={{ height: "400px", width: "300px" }}
                    zoom={12}
                    center={{
                      lat: parseFloat(sismo.latitud),
                      lng: parseFloat(sismo.longitud),
                    }}
                    markers={{
                      lat: parseFloat(sismo.latitud),
                      lng: parseFloat(sismo.longitud),
                    }}
                  />
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>{sismo.referencia_geografica}</IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </>
  );
};

export default DetalleSismo;
