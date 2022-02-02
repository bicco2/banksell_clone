const hostJs = document.getElementById("account_host"); // 사용자 이름 
const totalJs = document.getElementById("total_balance"); // 사용자 총 잔액

 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// 데이터베이스 문법 소환

let totalMoney = 0;

let accountDB =db.collection('account');

accountDB.get().then((결과)=>{
    결과.forEach((doc)=>{
        //<div onclick="location.href='bankInfo.html'">
        var temp = ` <div id = "${doc.id}" onclick="location.href='bankInfo.html'">
                    <img src="img/bankImg.png" class="logo_style">
                        <span>${doc.data().계좌이름} </span>
                        <span class="bank_balance">${(doc.data().잔액).toLocaleString('ko-KR')}원</span>
                        <br><br>
                    </div>`;
        $('.account_style').append(temp);
        totalMoney += doc.data().잔액;
    });

    var totalTemp = ` <span style="margin-left: 10px; font-size: 14px;">
            <font color="gray"> 입출금</span>
    <span id="total_DNW" style="float: right; margin-right: 10px">
        ${totalMoney.toLocaleString('ko-KR')}원</span>`; 

    $('.total_account2').append(totalTemp);

    totalJs.innerText = ` ${totalMoney.toLocaleString('ko-KR')}원`;

});

db.collection('user').get() //사용자이름 출력 코드 
    .then(doc => {
        doc.forEach( item=>{  //item이 저장한 데이터 객체 원본입니다.
            hostJs.innerText = item.data().name;
        });
    })
    .catch(err => {
        console.log('Error getting document', err);
});