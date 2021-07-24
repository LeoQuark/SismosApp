import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/react";

//Integracion de google maps
import GoogleMaps from "simple-react-google-maps";

//url base de la API REST
const API_URL = "http://localhost:4000";

//Componente que muestra la informacion detallada del sismo seleccionado
const DetalleSismo = (props) => {
  const { id } = useParams();
  const [sismo, setSismo] = useState({});

  //Peticion para obtener el sismo seleccionado por medio del ID
  const getSismoById = async () => {
    await axios.get(`${API_URL}/api/earthquakes/${id}`).then((result) => {
      if (result.status === 200) {
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
        <IonToolbar className="py-2 backgroundtabs">
          <IonTitle>Información del sismo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="my-2 mb-5 background">
        {sismo && (
          <IonGrid className="container backgroundcards">
            <IonRow className="row d-flex justify-content-center">
              <IonCol className="col-10">
                <div className="container">
                  {/* Integración de google maps con las coordenadas del sismo detallado */}
                  <GoogleMaps
                    apiKey={"AIzaSyBl32R9o91f8vLaPXdIV1V4sCAdiX0DIcs"}
                    style={{ height: "250px", width: "250px" }}
                    zoom={7}
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
              <IonCol>
                <h1 className="d-flex justify-content-center">
                
                Detalles
              
                </h1>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="mb-5 mt-2">
                {/* Tabla que muestra la información detallada del sismo */}
                <table className="table table-striped table-hover">
                  <tbody>
                    {Object.keys(sismo).map((dato, index) => (
                      <tr key={index} className="my-1">
                        <td className="text-capitalize">
                          {dato.replace(/_/g, " ")}
                        </td>
                        <td>{sismo[`${dato}`]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </>
  );
};

export default DetalleSismo;