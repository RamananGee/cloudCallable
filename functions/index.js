const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.addition = functions.https.onCall((data)=>{
    return {
        result: data.a +data.b,
    }
})

exports.sub = functions.https.onCall((data)=>{
    return {
        result: data.a - data.b,
    }
})

exports.mul = functions.https.onCall((data)=>{
    return {
        result: data.a * data.b,
    }
})

exports.div = functions.https.onCall((data)=>{
    return {
        result: data.a / data.b,
    }
})