const admin = require('firebase-admin');
admin.initializeApp();

const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.students = functions.https.onRequest(require('./students.app'));