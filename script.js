  function updateTimeAndDay() {
   const utcTimeElement = document.getElementById('utc-time');
   const dayOfTheWeekElement = document.getElementById('day-of-the-week');
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    dayOfTheWeekElement.textContent = dayOfWeek;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000); // Update every second