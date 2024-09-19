document.getElementById('loginBtn').addEventListener('click',function(event) {
    event.preventDefault()
    const getNumber = document.getElementById('phNumber');
    const phNumber = getNumber.value;
    console.log(phNumber);
})