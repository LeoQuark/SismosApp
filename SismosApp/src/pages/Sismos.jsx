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

//url base de la API REST de sismos
const API_URL = "http://localhost:4000";

//Componente que muestra una lista de los ultimos sismos registrados por la API
const Sismos = () => {
  const history = useHistory();
  const [sismos, setSismos] = useState([]);

  //Funcion que realiza la peticion a la api y retorna los datos de los ultimos sismos
  const getSismos = async () => {
    await axios.get(`${API_URL}/api/earthquakes`).then(
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
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Sismos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {/* Se recorren todos los sismos y se muestran en pantalla */}
          {sismos
            ? sismos.map((sismo, index) => (
                <IonItem key={index} href={`/home/sismos/${sismo.id_sismo}`}>
                  <IonLabel className="my-4">
                    {sismo.referencia_geografica}
                  </IonLabel>
                </IonItem>
              ))
            : "no"}
        </IonList>
      </IonContent>
    </>
  );
};

export default Sismos;
