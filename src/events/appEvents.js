import { renderWeather } from '../handlers/renderWeather.js';

export function triggerLoading(app) {
    app.innerHTML = '<div class="loading">Loading...⏳</div>';
}

export function triggerError(app) {
    app.innerHTML = '<div class="error">Failed to load weather data🙁</div>';
}

export function triggerRender(app, days) {
    app.innerHTML = renderWeather(days);
}
