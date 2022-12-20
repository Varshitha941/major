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

//reference your database
const createExamDB = firebase.database().ref("exams");

document.getElementById("createxam").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var ename = getElementVal('ename');
    //var reg_stu_data = getElementVal('reg_stu_data')
    var eid = Math.random().toString(16).slice(2);

    saveData(ename, eid);
    //saveData(reg_stu_data);
}


const saveData = (ename, eid) => {
    var newExam = createExamDB.push();
    newExam.set({
        ename: ename,
        eid: eid,
    });
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
}