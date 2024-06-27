document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
