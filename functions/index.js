const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();

const toUpperCase = (string) => string.toUpperCase()

exports.addMessage = functions.https.onRequest(async (req, res)=>{
  const text = req.query.text
  const secretText = toUpperCase(text)

  await admin
    .database()
    .ref('/messages')
    .push({text : secretText})
    .then(()=>
      res.json({
        message: 'great',
        text
      }))
    .catch(()=>{
      res.json({
        message: 'not great'
      })
    })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
