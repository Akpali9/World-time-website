const timezoneContainer = document.querySelector('.timezone-container');

const timezones = [
    { name: 'UTC', offset: 0 },
    { name: 'New York', offset: -5 },
    { name: 'Los Angeles', offset: -8 },
    { name: 'London', offset: 0 },
    { name: 'Tokyo', offset: 9 },
    { name: 'Sydney', offset: 10 },
    { name: 'Mumbai', offset: 5.5 },
    { name: 'Beijing', offset: 8 },
    // Add more timezones as needed
];

function getCurrentTime(offset) {
    const currentTime = new Date();
    const utcTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const timezoneTime = new Date(utcTime + (3600000 * offset));
    return timezoneTime.toLocaleTimeString();
}

function renderTimezones() {
    timezoneContainer.innerHTML = '';
    timezones.forEach((timezone) => {
        const timezoneCard = document.createElement('div');
        timezoneCard.classList.add('timezone-card');
        timezoneCard.innerHTML = `
            <h2>${timezone.name}</h2>
            <p>Current Time: ${getCurrentTime(timezone.offset)}</p>
        `;
        timezoneContainer.appendChild(timezoneCard);
    });
}

renderTimezones();
setInterval(renderTimezones, 1000);
