import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HTTP } from "@ionic-native/http"
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
const API_URL = "http://api.jkd.cl:18086/grupo-m";

//Componente que muestra la informacion detallada del sismo seleccionado
const DetalleSismo = (props) => {
  const { id } = useParams();
  const [sismo, setSismo] = useState({});


  //Peticion para obtener el sismo seleccionado por medio del ID
  const getSismoById = async () => {
    await axios.get(`${API_URL}/earthquakes/${id}`, {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
  }}).then((result) => {
      if (result.status === 200) {
        setSismo(result.data.sismo);
        
      }
    },(error)=>{
      console.log(error);
    }
    );
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
              {sismo && sismo.latitud && sismo.longitud ? (
                <GoogleMaps
                  apiKey={"AIzaSyBl9PQKp_d5UNe1MdpdIUtcgg5I6laf-9E"}
                  style={{ height: "300px", width: "300px" }}
                  zoom={7}
                  center={{
                    lat: sismo.latitud,
                    lng: sismo.longitud,
                  }}
                  markers={{
                    lat: sismo.latitud,
                    lng: sismo.longitud,
                  }}
                />
              ) : (
                <h1>Cargando....</h1>
              )}
            </IonRow>
            <IonRow>
              <IonCol>
                <h1 className="d-flex justify-content-center">Detalles</h1>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="mb-5 mt-2">
                {/* Tabla que muestra la información detallada del sismo */}
                <table className="table table-striped table-hover my-4">
                  <tbody>
                    {Object.keys(sismo).map((dato, index) => (
                      <tr key={index} className="my-1">
                        {!(dato === "id_sismo") && (
                          <>
                            <td className="text-capitalize">
                              {dato.replace(/_/g, " ")}
                            </td>
                            <td>{sismo[`${dato}`]}</td>
                          </>
                        )}
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