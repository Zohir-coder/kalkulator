document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.value');
    const buttons = document.querySelectorAll('.num');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonContent = button.textContent.trim();

            if (button.classList.contains('equal')) {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else if (button.classList.contains('clear')) {
                display.value = '';
            } else {
                display.value += buttonContent;
            }
        });
    });
});
