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
                    display.value = eval(display.value.replace(/√/g, 'Math.sqrt').replace(/\^/g, '**'));
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'sin') {
                display.value = Math.sin(eval(display.value));
            } else if (value === 'cos') {
                display.value = Math.cos(eval(display.value));
            } else if (value === 'tan') {
                display.value = Math.tan(eval(display.value));
            } else if (value === 'log') {
                display.value = Math.log10(eval(display.value));
            } else {
                display.value += value;
            }
        });
    });
});
