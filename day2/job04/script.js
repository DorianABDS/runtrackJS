const textarea = document.getElementById('keylogger')

document.addEventListener('keypress', function(event) {

    if (/^[a-zA-Z]$/.test(event.key)) {

        if (document.activeElement === textarea) {
            
            textarea.value += event.key + event.key;

            event.preventDefault();
            
        } else {
            textarea.value += event.key;
        }
    }
})