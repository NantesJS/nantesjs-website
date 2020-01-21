import { useEffect, useState } from 'react'

let firebaseInstance
function getFirebaseApp (firebase) {
  if (!firebaseInstance) {
    firebase.initializeApp({
      apiKey: process.env.GATSBY_FIREBASE_API_KEY,
      authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    })
    firebaseInstance = firebase
  }

  return firebaseInstance
}

export function useFirebase () {
  const [firebaseApp, setFirebaseApp] = useState()
  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyAuth = import('firebase/auth')
    const lazyFirestore = import('firebase/firestore')

    Promise.all([lazyApp, lazyAuth, lazyFirestore]).then(([firebase]) => {
      const app = getFirebaseApp(firebase)
      setFirebaseApp(app)
    })
  }, [])

  return firebaseApp
}
