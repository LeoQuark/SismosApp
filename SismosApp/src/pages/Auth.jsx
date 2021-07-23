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
} from "@ionic/react";

import UserContext from "../components/context/UserContext";

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
        <IonToolbar color="dark" className="py-3">
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton color="danger" onClick={() => loginAuth()}>
                Iniciar sesión con Google
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Auth;
