import firebase from "firebase";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import initFirebase from "../firebaseConfig";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
  IonIcon,
  IonCard,
  IonCardTitle,
  IonCardHeader
} from "@ionic/react";

import UserContext from "../components/context/UserContext";
import { logoGoogle } from "ionicons/icons";

const Auth = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const loginAuth = async () => {
    initFirebase();
    // const history = useHistory ();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "utem.cl",
    });

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user.displayName, user.email);
        setUser(user);
        // history.push("/home");
        history.push("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar class="backgroundtabs" className="py-3 text-center">
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent class="background">
        <IonGrid>
          <IonCard className="mt-5" class="backgroundcards">
          <IonCardHeader>

              <IonCardTitle className="text-center">
                Bienvenido
              </IonCardTitle>
              <hr className="mx-4" />
          </IonCardHeader>
          <div className= "mx-5">
            <ion-img src="https://media.discordapp.net/attachments/839320527126790175/868540602113986600/pngegg.png"> </ion-img>
          </div>
          <ion-card-content>
          <IonRow className="ion-text-center">
            <ionCol>
            </ionCol>
              <IonCol>
                <IonButton color="danger" onClick={() => loginAuth()}>
                  <IonIcon icon={logoGoogle}></IonIcon>
                    Iniciar sesión con Google


                </IonButton>
              </IonCol>
          </IonRow>
          </ion-card-content>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};


export default Auth;
