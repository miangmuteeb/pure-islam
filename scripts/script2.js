document.addEventListener('DOMContentLoaded', () => {
    const prayerTimingsContainer = document.getElementById('prayer-timings');

    // Mock data for prayer timings (replace with actual API call)
    const prayerTimings = {
        Fajr: "04:30 AM",
        Dhuhr: "12:15 PM",
        Asr: "03:45 PM",
        Maghrib: "06:50 PM",
        Isha: "08:15 PM"
    };

    // Dynamically create and insert prayer timings elements
    for (const [prayer, time] of Object.entries(prayerTimings)) {
        const prayerTimeDiv = document.createElement('div');
        prayerTimeDiv.classList.add('col-6', 'col-md-4', 'col-lg-2', 'prayer-time');

        const prayerName = document.createElement('div');
        prayerName.classList.add('prayer-name');
        prayerName.textContent = prayer;

        const prayerTimeValue = document.createElement('div');
        prayerTimeValue.classList.add('prayer-time-value');
        prayerTimeValue.textContent = time;

        prayerTimeDiv.appendChild(prayerName);
        prayerTimeDiv.appendChild(prayerTimeValue);

        prayerTimingsContainer.appendChild(prayerTimeDiv);
    }
});
