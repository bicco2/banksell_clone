 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const a = document.getElementById("title");
const b = document.getElementById("balance");
const subBtn = document.getElementById("account_send");

const loadBtn = document.getElementById("account_load");

const db = firebase.firestore();// 데이터베이스 문법 소환

let accountDB =db.collection('account');

let beforeAccountDB =db.collection('before_account');

let load_presence = false;


function subAddAccount(){
    accountDB.add({계좌이름 : a.value , 잔액:  Number(b.value)});
}

function loadAddAccount(){
    beforeAccountDB.get().then((결과)=>{
        결과.forEach((doc)=>{
            accountDB.add({계좌이름 : doc.data().계좌이름 , 잔액:  doc.data().잔액});
        });
    });

}



function loadingAccount(){
    if(load_presence == false){ 
        beforeAccountDB.get().then((결과)=>{
            결과.forEach((doc)=>{
                var temp = ` <div id ="${doc.id}">
                            <img src="img/bankImg.png" class="logo_style">
                                <span style="float:left;">${doc.data().계좌이름} </span>
                                <span class="bank_balance">${(doc.data().잔액).toLocaleString('ko-KR')}원</span>
                                <br><br>
                            </div>`;
                $('#account_list').append(temp);
            });
        });
        var butt = ` <button id="account_load_save">추가</button>`
        $('#account_list').append(butt);
        const saveBtn = document.getElementById("account_load_save");
        saveBtn.addEventListener("click",loadAddAccount);
    }
    load_presence = true;
    
}






subBtn.addEventListener("click", subAddAccount);

loadBtn.addEventListener("click", loadingAccount);





