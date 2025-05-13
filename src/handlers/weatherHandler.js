import { formatDate, formatTime } from '../utils/dateUtils.js';

export function processWeatherData(data) {
    const days = [];
    const times = data.hourly.time;
    const temps = data.hourly.temperature_2m;

    for (let i = 0; i < times.length; i += 24) {
        const dayData = {
            date: formatDate(times[i]),
            hours: []
        };

        for (let j = i; j < i + 24 && j < times.length; j++) {
            dayData.hours.push({
                time: formatTime(times[j]),
                temp: temps[j]
            });
        }
        days.push(dayData);
    }

    return days;
}

export function renderWeather(days) {
    let html = '<h1>10-Day Weather Forecast</h1>';
    days.forEach((day) => {
        html += `
            <div class="day-container">
                <h2 class="day-title">${day.date}</h2>
                <div class="hours-grid">
        `;
        day.hours.forEach((hour) => {
            html += `
                <div class="hour-card">
                    <div class="hour-time">${hour.time}</div>
                    <div class="hour-temp">${hour.temp}°C</div>
                </div>
            `;
        });
        html += '</div></div>';
    });
    return html;
}
