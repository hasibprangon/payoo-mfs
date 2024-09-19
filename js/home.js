document.getElementById('addMoney').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('btn clicked');
    const getAmountTxt = document.getElementById('addedAmount').value;
    const getPin = document.getElementById('pinNum').value;
    const getMainBalance = document.getElementById('mainBalance');
    const mainBalanceTxt = getMainBalance.innerText;
    let availableBalance = parseFloat(mainBalanceTxt);
    const getAmount = parseFloat(getAmountTxt)

    if (getPin === '123') {
        const newBalance = availableBalance + getAmount;
        console.log(newBalance);
        document.getElementById('mainBalance').innerText = newBalance;
    }
    else {
        alert('invalid pin')
    }

    document.getElementById('addedAmount').value = '' ;
    document.getElementById('pinNum').value = '';
})

  