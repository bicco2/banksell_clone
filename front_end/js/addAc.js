 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const a = document.getElementById("title");
const b = document.getElementById("balance");
const subBtn = document.getElementById("account_send");

const loadBtn = document.getElementById("account_load");

const db = firebase.firestore();// 데이터베이스 문법 소환

let accountDB =db.collection('before_account');

let load_presence = false;

function subAddAccount(){
    accountDB.add({계좌이름 : a.value , 잔액:  Number(b.value)});
}

function loadingAccount(){
    if(load_presence == false){ 
        accountDB.get().then((결과)=>{
            결과.forEach((doc)=>{
                var temp = ` <div>
                            <img src="img/bankImg.png" class="logo_style">
                                <span>${doc.data().계좌이름} </span>
                                <span class="bank_balance">${(doc.data().잔액).toLocaleString('ko-KR')}원</span>
                                <br><br>
                            </div>`;
                $('#account_list').append(temp);

            });
        });
    }
    load_presence= true;
}





subBtn.addEventListener("click", subAddAccount);

loadBtn.addEventListener("click", loadingAccount);





