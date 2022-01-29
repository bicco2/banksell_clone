 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const a = document.getElementById("title");
const b = document.getElementById("balance");
const subBtn = document.getElementById("send");

const db = firebase.firestore();// 데이터베이스 문법 소환

let accountDB =db.collection('account');

function subAddAccount(){
    accountDB.add({계좌이름 : a.value , 잔액:  Number(b.value)});
}

subBtn.addEventListener("click", subAddAccount);

