import React, { useState, Fragment } from 'react'
import firebase from 'firebase'
import Config from './Config/config'

export default function Profil () {

  let [users, setUsers] = useState([])
  let [gagnant, setGagnant] = useState("")

  let db = firebase.firestore(Config)
  let app = db.collection('nantesjs').doc('meetup 4')

  app.get().then(function (doc){
    if (doc.exists){
      setUsers(doc.data().Participants)
    }
  })

  // app.set({
  //   Date : new Date,
  //   Participants: [
  //     "1eGzJD3yBZaVbdSxB8nimfGJobR2",
  //     "5KXQlRXtVNh8AXfKFqh1g1BWLSS2",
  //     "5nBHkPBkKkVRwKytFpW4zWPdNb02",
  //     "yenG1K9N6XckKDG1zVwQlY9PpCy2"
  //   ],
  //   QrCode : "meetup 48"
  // })

  let elemAleatoire = () => {
    // console.log(users)
    // var tabtemp = users.slice(0);
    let valeur = users[Math.floor(Math.random()*users.length)]
    // var tabtemp = tabtemp.splice(valeur,1);
    setGagnant(valeur)
  }

  // admin.auth().getUser(valeur)
  //   .then(function(userRecord) {
  //   // See the UserRecord reference doc for the contents of userRecord.
  //   console.log('Successfully fetched user data:', userRecord.toJSON());
  //   })
  //   .catch(function(error) {
  //     console.log('Error fetching user data:', error);
  //   });

  return (
    <Fragment>
      <h1>Hello</h1>
      <button onClick={elemAleatoire}> Je veux un gagnant</button>
      <p>{gagnant}</p>
      {/* {users.map((user) => <p key={user}> {user}</p>)} */}
    </Fragment>
  )
}

// todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
