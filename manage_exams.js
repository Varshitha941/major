const firebaseConfig = {
    apiKey: "AIzaSyDKQlXYCitX1LVyw9BITu75idl3WtWFewo",
    authDomain: "major-project-ec848.firebaseapp.com",
    databaseURL: "https://major-project-ec848-default-rtdb.firebaseio.com",
    projectId: "major-project-ec848",
    storageBucket: "major-project-ec848.appspot.com",
    messagingSenderId: "273405423361",
    appId: "1:273405423361:web:9aec99770bc1d116747500",
    measurementId: "G-08K2KR1V0H"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
var firebaseRef = firebase.database().ref("exams");



firebaseRef.once("value", function(snapshot) {
    snapshot.forEach(function(element) {
        console.log(element);
        document.querySelector('#exam').innerHTML += `<div style="background-color:rgb(214, 152, 114); margin:auto; margin-bottom:10px; padding:2px; border-style:solid; width:60%; ">${element.val().ename} <br>Exam ID: ${element.val().eid}</div>`
    })
})