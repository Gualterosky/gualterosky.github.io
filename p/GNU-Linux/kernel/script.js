function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 hour to 12 for AM/PM
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${month} ${day} | ${formattedHours}:${formattedMinutes} ${ampm}`;
}

function displayDateTime() {
    const now = new Date();
    const dateTimeString = formatDate(now);
    document.getElementById('dateTimeDisplay').textContent = dateTimeString;
}

// Call the function to display the date and time
displayDateTime();

// Update the date and time every minute
setInterval(displayDateTime, 60000);
