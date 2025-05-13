export function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });
}

export function formatTime(dateStr) {
    return new Date(dateStr).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}
