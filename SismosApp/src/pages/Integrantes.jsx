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
  const nombres = ["Esteban Moyano", "Leonardo Peña", "Javier Saavedra"];

  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Integrantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <div className="py-2">
          <IonCard className="py-2">
            <IonCardHeader>
              <IonCardSubtitle className="text-center">
                Sismos App
              </IonCardSubtitle>
              <IonCardTitle className="text-center">
                Nuestro Equipo
              </IonCardTitle>
              <hr className="mx-4" />
            </IonCardHeader>
            <IonCardContent>
              <p style={{ textAlign: "justify" }}>
                Esta aplicación híbrida la hemos desarrollando en equipo,
                trabajando colaborativamente y apoyandonos en los problemas que
                sugen a medida que la desarollamos.
              </p>
              <hr />
              <p className="mb-4">
                Estas personas conforman nuestro equipo de trabajo
              </p>
              <div className="d-flex justify-content-center">
                <IonList>
                  {/* Recorro la lista de los nombres y se pintan en una lista */}
                  {nombres.map((nombre, index) => (
                    <IonItem key={index}>
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