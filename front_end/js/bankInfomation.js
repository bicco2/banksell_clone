const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// 데이터베이스 문법 소환

const viewTitle = document.getElementById("view_title");
const viewSend = document.getElementById("view_send");






let accountDB =db.collection('account');

let ac_detail =db.collection('account_detail');

let load_presence = false;

function sendHandle(){
    if(load_presence == false){ 
        accountDB.get().then((결과)=>{
            결과.forEach((doc)=>{
                if(viewTitle.value == doc.data().계좌이름){

                    ac_detail.get().then((결과)=>{
                        결과.forEach((doc)=>{
                            var temp = ` <div>
                                            <span>입금</span><br>
                                             <span>${(doc.data().입금).toLocaleString('ko-KR')}원</span>
                                             <br><br>
                                             <span>출금</span><br>
                                            <span>${(doc.data().출금).toLocaleString('ko-KR')}원</span>
                                            
                                        </div>`;
                            $('#acc_detail_list').append(temp);
                    
                        });
                    
                    });


                }



                                //    ${doc.id}"
                    
                                // <span style="float:left;">${doc.data().계좌이름} </span>
                                // <span class="bank_balance">${(doc.data().잔액).toLocaleString('ko-KR')}원</span>
                
            });
        });
    }
    load_presence = true;


}


viewSend.addEventListener('click', sendHandle);