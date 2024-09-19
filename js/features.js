document.getElementById('addMoneyOption').addEventListener('click',
    function () {
        const getAddMoneyOption = document.getElementById('getAddMoney');
        getAddMoneyOption.classList.remove('hidden');
        const getCashOutOption = document.getElementById('getCashOut');
        getCashOutOption.classList.add('hidden')
    });

document.getElementById('cashOutMoneyOption').addEventListener('click', function () {
    const getAddMoneyOption = document.getElementById('getAddMoney');
    getAddMoneyOption.classList.add('hidden');
    const getCashOutOption = document.getElementById('getCashOut')
    getCashOutOption.classList.remove('hidden')
});