//your JS code here. If required.


        function updateClock() {
            const ptag = document.getElementById("timer");
            const date = new Date();
            ptag.innerText = date.toString();
        }

        // Update the clock every second (1000 milliseconds)
        setInterval(updateClock, 1000);

        // Initial update to show the current time immediately
        updateClock();
    





