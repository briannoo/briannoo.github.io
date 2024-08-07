document.addEventListener('DOMContentLoaded', function() {
    var i = 0;
    var txt = "Hi, I'm Brian!"; /* The text to display */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            blinkBrian(0);
        }
    }

    function blinkBrian(count) {
        if (count < 6) { // 3 times blinking means 6 state changes (on-off)
            let textElement = document.getElementById("typewriter");
            let currentText = textElement.innerHTML;
            if (currentText.includes("Brian!")) {
                textElement.innerHTML = currentText.replace("Brian!", "<span id='blink'>Brian!</span>");
                document.getElementById("blink").style.visibility = (count % 2 === 0) ? 'hidden' : 'visible';
            }
            setTimeout(() => blinkBrian(count + 1), 500);
        } else {
            document.getElementById("typewriter").innerHTML = "";
            i = 0;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});
