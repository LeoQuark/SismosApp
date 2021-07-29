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
import { GooglePlus } from "@ionic-native/google-plus";
import { isPlatform } from "@ionic/core";

const Auth = () => {
  const history = useHistory();
  const loginAuth = async () => {
    //Inicializamos firebase
    initFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "utem.cl",
    });
    console.log(isPlatform("android"));
    //verificamos el tipo de dispositivo
    if (isPlatform("android")) {
      console.log("si");
      const res = await GooglePlus.login({
        webClientId:
          "560467081090-95manltmr0s3vc86dadf2gc2eidc7tps.apps.googleusercontent.com",
        offline: true,
      });
      await firebase
        .auth()
        .signInWithCredential(provider.credential(res.idToken))
        .then((result) => {
          console.log(result.user);
          history.push("/home");
        }, (error) =>{
        }
        );
    } else {
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          const user = result.user;
          console.log(token);
          history.push("/home");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
  }
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
              <h1 className="display-5">Bienvenido</h1>
            </IonCardTitle>
            <hr className="mx-4" />
          </IonCardHeader>
          <div className="mx-5">
            <ion-img src="https://media.discordapp.net/attachments/839320527126790175/868540602113986600/pngegg.png"> </ion-img>
          </div>
          <ion-card-content>
            <div className="container my-4">
              <div className="row d-flex justify-content-center">
                <IonButton color="danger" onClick={() => loginAuth()}>
                  <IonIcon icon={logoGoogle} className="mx-2"></IonIcon>
                  Iniciar sesión con Google
                </IonButton>
              </div>
            </div>
          </ion-card-content>
        </IonCard>
      </IonGrid>
    </IonContent>
  </IonApp>
);
};


export default Auth;
