import Hello from './hello';
import React from 'react';
import ReactDom from 'react-dom';
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDtz51NeQQVzOHR-MqKfV4HCsZxURbNS-M",
    authDomain: "panchos-4ad41.firebaseapp.com",
    databaseURL: "https://panchos-4ad41.firebaseio.com",
    projectId: "panchos-4ad41",
    storageBucket: "panchos-4ad41.appspot.com",
    messagingSenderId: "357706798263"
};
firebase.initializeApp(config);

ReactDom.render(<Hello />, document.getElementById('app'));