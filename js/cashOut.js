document.getElementById('cashOutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const getCashOutAmountTxt = document.getElementById('cashOutAmount').value;
    const getCashOutAmount = parseFloat(getCashOutAmountTxt);
    const getPin = document.getElementById('cashOutPin').value;
    const getMainBalance = document.getElementById('mainBalance');
    const mainBalanceTxt = getMainBalance.innerText;
    let availableBalance = parseFloat(mainBalanceTxt);


    if(getCashOutAmount < 10 || availableBalance <= 0 || getCashOutAmount > availableBalance){
        alert('Insufficient Balance or Cash out amount can not be bigger than main balance');
        return;
    }

    if(getPin === '123'){
        const newBalance = availableBalance - getCashOutAmount;
        document.getElementById('mainBalance').innerText = newBalance;
    }
    else {
        alert('invalid pin')
    }

    document.getElementById('cashOutAmount').value = '';
    document.getElementById('cashOutPin').value = '';
})