import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonChip,
  IonLabel,
} from "@ionic/react";

//Componente de la pagina inicial de la app
const Inicio = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="dark" className="py-2">
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <div className="py-4">
          <IonCard className="py-2">
            <IonCardHeader>
              <IonCardSubtitle className="text-center">
                Sismos App
              </IonCardSubtitle>
              <IonCardTitle className="text-center">Bienvenidos</IonCardTitle>
              <hr className="mx-4" />
            </IonCardHeader>
            <IonCardContent>
              <p style={{ textAlign: "justify" }}>
                Desarrollamos esta pequeña aplicación con el fin de mostrar la
                información detallada de los sismos registrados en la página
                oficial de sismologia.cl, esto lo hemos realizado empleando un
                algoritmo de web-scraping e integrando estos datos a nuestra
                propia API REST.
              </p>
              <hr />
              <p className="mb-4">
                Las tecnologías aplicadas en este proyecto son las siguientes
              </p>
              <div className="d-flex justify-content-center">
                <IonChip color="primary">
                  <IonLabel>Ionic</IonLabel>
                </IonChip>
                <IonChip color="tertiary">
                  <IonLabel>ReactJS</IonLabel>
                </IonChip>
                <IonChip color="danger">
                  <IonLabel>Bootstrap 5</IonLabel>
                </IonChip>
              </div>
              <p></p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </>
  );
};

export default Inicio;