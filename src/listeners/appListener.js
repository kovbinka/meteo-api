import { apiRequest } from '../api/weatherApi.js';
import { processWeatherData } from '../handlers/weatherHandler.js';
import {
    triggerError,
    triggerLoading,
    triggerRender
} from '../events/appEvents.js';
import data from '../data.js';
import dom from '../dom.js';

export async function initWeatherApp() {
    triggerLoading(dom.app);

    const weatherData = await apiRequest(data.originUrl);

    if (!weatherData) {
        triggerError(dom.app);
        return;
    }

    const days = processWeatherData(weatherData);
    triggerRender(dom.app, days);
}
