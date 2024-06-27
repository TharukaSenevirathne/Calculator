document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const monthlyPayment = document.getElementById('monthlyPayment');

    calculateBtn.addEventListener('click', () => {
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
        const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
            monthlyPayment.textContent = 'Invalid input';
            return;
        }

        const payment = loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm) / (Math.pow(1 + interestRate, loanTerm) - 1);
        monthlyPayment.textContent = payment.toFixed(2);
    });
});
