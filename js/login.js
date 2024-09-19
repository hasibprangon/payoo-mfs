document.getElementById('loginBtn').addEventListener('click',function(event) {
    event.preventDefault()
    const getNumber = document.getElementById('phNumber');
    let phNumber = getNumber.value;
    let pinNumber = document.getElementById('pinNumber').value;
   
    if(phNumber === '01' && pinNumber === '12'){
        console.log('u r logged in');
        window.location.href = '/homePage.html';
    }
    else{
        alert('Invalid phone number or pin number')
    }

  
})