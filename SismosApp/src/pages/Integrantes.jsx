import {
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { planetOutline } from "ionicons/icons";

//Componente que muestra la seccion de integrantes
const Integrantes = () => {
  //Nombres de los integrantes del equipo
  const nombres = ["Esteban Moyano Pérez", "Leonardo Peña Fuentes", "Javier Saavedra Zaravia"];

  return (
    <>
      <IonHeader>
        <IonToolbar class="backgroundtabs" className="py-2">
          <IonTitle>Integrantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="background">
        <div>
          <IonCard className="py-1" class="backgroundcards">
            <IonCardHeader>
              <IonCardSubtitle className="text-center">
                Sismos App
              </IonCardSubtitle>
              <IonCardTitle className="text-center">
                <h1 className="display-5">Nuestro Equipo</h1>
              </IonCardTitle>
              <hr className="mx-4" />
            </IonCardHeader>
            <IonCardContent>
              <p
                className="text-dark"
                style={{ textAlign: "justify", fontSize: "18px" }}
              >
                Esta aplicación híbrida la hemos desarrollando en equipo,
                trabajando colaborativamente y apoyandonos en los problemas que
                surgen a medida que la desarollamos.
              </p>
              <hr />
              <p className="mb-4 text-dark" style={{ fontSize: "18px" }}>
                Estas personas conforman nuestro equipo de trabajo
              </p>
              <div className="d-flex justify-content-center">
                <IonList className="p-0">
                  {/* Recorro la lista de los nombres y se pintan en una lista */}
                  {nombres.map((nombre, index) => (
                    <IonItem key={index} class="background">
                      <IonIcon icon={planetOutline}></IonIcon>
                      <IonLabel className="my-2 mx-4">{`${nombre}`}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </div>
              <p></p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </>
  );
};

export default Integrantes;