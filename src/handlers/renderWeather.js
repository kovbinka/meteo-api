export function renderWeather(days) {
    let html = '<h1>10-Day Brussels Temperature Forecast☀️</h1>';
    days.forEach((day) => {
        html += `
            <div class="day-container">
                <h2 class="day-title">📅${day.date}</h2>
                <div class="hours-grid">
        `;
        day.hours.forEach((hour) => {
            html += `
                <div class="hour-card">
                    <div class="hour-time">🕦${hour.time}</div>
                    <div class="hour-temp">🌡️${hour.temp}°C</div>
                </div>
            `;
        });
        html += '</div></div>';
    });
    return html;
}
