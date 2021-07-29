import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import {HTTP, HTTPS} from "@ionic-native/http"

//url base de la API REST de sismos
const API_URL = "http://api.jkd.cl:18086/grupo-m";

//Componente que muestra una lista de los ultimos sismos registrados por la API
const Sismos = () => {
  const history = useHistory();
  const [sismos, setSismos] = useState([]);

  //Funcion que realiza la peticion a la api y retorna los datos de los ultimos sismos
  const getSismos = async () => {
    await axios.get(`${API_URL}/earthquakes`,{headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
  }}).then(
      (result) => {
        if (result.status === 200) {
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
        <IonToolbar className="backgroundtabs">
          <IonTitle>Sismos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background">
        <IonList className="backgroundcards p-0">
          {/* Se recorren todos los sismos y se muestran en pantalla */}
          {sismos ? (
            sismos.map((sismo, index) => (
              <IonItem
                className="background"
                key={index}
                href={`/home/sismo/${sismo.id_sismo}`}
              >
                <div className="my-2">
                  <IonLabel style={{ fontSize: "18px" }}>
                    {sismo.referencia_geografica}
                  </IonLabel>
                  <IonLabel className="text-muted" style={{ fontSize: "14px" }}>
                    {sismo.fecha_local}
                  </IonLabel>
                </div>
              </IonItem>
            ))
          ) : (
            <div>No existen sismos registrados</div>
          )}
        </IonList>
      </IonContent>
    </>
  );
};

export default Sismos;