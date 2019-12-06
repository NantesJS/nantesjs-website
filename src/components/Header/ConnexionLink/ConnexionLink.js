import React from 'react';
import { MenuLink } from '../MenuLink';
import firebase from 'firebase';


export function ConnexionLink () {
  return (
    <MenuLink
      to="/page-connexion/"
      label={firebase.auth().currentUser ? 'Mon Profil' : 'Se connecter' }
    />
  )
}