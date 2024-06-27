document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const bmiResult = document.getElementById('bmiResult');

    calculateBtn.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            bmiResult.textContent = 'Invalid input';
            return;
        }

        const bmi = weight / (height * height);
        bmiResult.textContent = bmi.toFixed(2);
    });
});
