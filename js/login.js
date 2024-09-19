document.getElementById('loginBtn').addEventListener('click',function(event) {
    event.preventDefault()
    const getNumber = document.getElementById('phNumber');
    const phNumber = getNumber.value;
    const pinNumber = document.getElementById('pinNumber').value;
    
    if(phNumber === '01566087557' && pinNumber === '123456'){
        console.log('u r logged in');
    }
    else{
        alert('Invalid phone number or pin number')
    }
})