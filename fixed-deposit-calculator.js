document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const maturityAmount = document.getElementById('maturityAmount');

    calculateBtn.addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('principal').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
        const timePeriod = parseFloat(document.getElementById('timePeriod').value);

        if (isNaN(principal) || isNaN(interestRate) || isNaN(timePeriod) || principal <= 0 || interestRate <= 0 || timePeriod <= 0) {
            maturityAmount.textContent = 'Invalid input';
            return;
        }

        const maturity = principal * Math.pow(1 + interestRate, timePeriod);
        maturityAmount.textContent = maturity.toFixed(2);
    });
});
