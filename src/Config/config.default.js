export const config = {
  apiKey: "[YOUR_API_KEY]",
  authDomain: "[YOUR_AUTH_DOMAIN].firebaseapp.com",
  projectId: "[YOUR_PROJECT_ID]",
}


let firebaseInstance

export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase

  return firebase
}
