// Deposit Form Open
const depositShowBtn = document.getElementsByClassName("deposit");
for (let i = 0; i < depositShowBtn.length; i++) {
    depositShowBtn[i].addEventListener("click",function(){
        document.getElementById("deposit_form").style.display = "block";
    });
}

// Deposit Form Open
const withdrawShowBtn = document.getElementsByClassName("withdraw");
for (let i = 0; i < withdrawShowBtn.length; i++) {
    withdrawShowBtn[i].addEventListener("click",function(){
        document.getElementById("withdraw_form").style.display = "block";
    });
}

// Deposit Button
const depositBtn = document.getElementById('deposit_btn');
depositBtn.addEventListener('click',function(){
    // Display Value
    displayDeposit();

    // Display Notification
    showNotification(true);
})

// Withdraw Button
const withdrawBtn = document.getElementById('withdraw_btn');
withdrawBtn.addEventListener('click',function(){
    // Display Value
    displayWithdraw();

    // Display Notification
    showNotification(false);
})


function displayDeposit(){
    // Input Value
    const ammount = document.getElementById('deposit_input');
    const ammountNum = parseFloat(ammount.value);

    // Current Deposit
    const depositTotalUsd = document.getElementById('display-deposit-usd');
    const depositTotalEuro = document.getElementById('display-deposit-euro');
    const depositTotalGbp = document.getElementById('display-deposit-gbp');

    // Previous Deposit
    const prevTotalUsd = depositTotalUsd.innerText;
    const prevDepositTotalUsd = parseFloat(prevTotalUsd);
    const prevTotalEuro = depositTotalEuro.innerText;
    const prevDepositTotalEuro = parseFloat(prevTotalEuro);
    const prevTotalGbp = depositTotalGbp.innerText;
    const prevDepositTotalGbp =  parseFloat(prevTotalGbp);

    // Select Currency
    const numbers = /^[-+]?[0-9]+$/;
    if (ammount.value.match(numbers)) {
        const getCurrency = document.getElementById('deposit_currency').value;

        if(getCurrency == 1) {
            depositTotalUsd.innerText = ammountNum + prevDepositTotalUsd;
        }

        else if (getCurrency == 2) {
            depositTotalEuro.innerText = ammountNum + prevDepositTotalEuro;
        }

        else if (getCurrency == 3) {
            depositTotalGbp.innerText = ammountNum + prevDepositTotalGbp;
        }

        else {
            alert("Please Select Currency !!");
        }
    }
    
    else {
        alert("Please Input Number");
    }

    ammount.value = '';
}


function displayWithdraw(){
    // Input Value
    const ammount = document.getElementById('withdraw_input');
    const ammountNum = parseFloat(ammount.value);

    // Current Withdraw
    const withdrawTotalUsd = document.getElementById('display-deposit-usd');
    const withdrawTotalEuro = document.getElementById('display-deposit-euro');
    const withdrawTotalGbp = document.getElementById('display-deposit-gbp');

    // Previous Ammount
    const prevTotalUsd = withdrawTotalUsd.innerText;
    const prevDepositTotalUsd = parseFloat(prevTotalUsd);
    const prevTotalEuro = withdrawTotalEuro.innerText;
    const prevDepositTotalEuro = parseFloat(prevTotalEuro);
    const prevTotalGbp = withdrawTotalGbp.innerText;
    const prevDepositTotalGbp =  parseFloat(prevTotalGbp);


    // Select Currency
    const numbers = /^[-+]?[0-9]+$/;
    if (ammount.value.match(numbers)) {
        const getCurrency = document.getElementById('withdraw_currency').value;

        if(getCurrency == 1) {
            if(prevDepositTotalUsd != 0) {
                withdrawTotalUsd.innerText = prevDepositTotalUsd - ammountNum;
            }
            
            else {  
                notFund();
            }
            
        }
    
        else if (getCurrency == 2) {
            if(prevDepositTotalUsd != 0) {
                withdrawTotalEuro.innerText = prevDepositTotalEuro - ammountNum;
            }
            
            else {  
               
            }
        }
    
        else if (getCurrency == 3) {
            if(prevDepositTotalUsd != 0) {
                withdrawTotalGbp.innerText = prevDepositTotalGbp - ammountNum;
            }
            
            else {  
                
            }
        }
    
        else {
            alert("Please Select Currency !!");
        }
    }
    else {
        alert("Please Input Number !!");
    }

    ammount.value = '';
}

// Notification
function showNotification(isDeposited, hide){
    const getToast =  document.getElementById("toast");
    const message = document.getElementById("message");
    message.innerText = isDeposited ? "Deposited" : "Withdrawn";
    getToast.classList.add("show");
    setTimeout(function(){
        getToast.classList.remove("show");
    },3000)

    if(hide == true){
        getToast.classList.add("hide");
    }
}

// Not Enough Fund 
function notFund(){
    const getToast =  document.getElementById("toast-two");
    getToast.classList.add("show");
    setTimeout(function(){
        getToast.classList.remove("show");
    },3000)

    if(hide == true){
        getToast.classList.add("hide");
    }
}