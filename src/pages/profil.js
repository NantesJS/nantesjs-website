import React, { createContext, createRef, useEffect, useState } from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profil from '../components/Profil'
import PageConnexion from '../components/PageConnexion/page-connexion'

import { FirebaseContext } from '../components/firebase.context.js'

export default function () {
  const [firebase, setFirebase] = useState()
  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/database')
    const lazyAuth = import('firebase/auth')

    Promise.all([lazyApp, lazyDatabase, lazyAuth]).then(([firebaseInstance]) => {
      // do something with `database` here,
      // or store it as an instance variable or in state
      // to do stuff with it later
      firebaseInstance.initializeApp({
        apiKey: "AIzaSyCTL2M4Lj2AmywmH4aO3IQkDTOONKENQio",
        authDomain: "nantesjs-website.firebaseapp.com",
        databaseURL: "https://nantesjs-website.firebaseio.com",
        projectId: "nantesjs-website",
        storageBucket: "nantesjs-website.appspot.com",
        messagingSenderId: "788517355139",
        appId: "1:788517355139:web:7570111b66b8e420c2a5b6",
        measurementId: "G-KKLHD7G3LF"
      })

      setFirebase(firebaseInstance)
    })
  }, [])

  return (
    <FirebaseContext.Provider value={firebase}>
      <Router>
        <PageConnexion path="/profil" />
      </Router>
    </FirebaseContext.Provider>
  )
}
