const TOKEN_TYPE = 'AUTH_TOKEN';
const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
const MAX_RETRIES = 5;
const HOST_URL = "https://try-everywhere.thoughtspot.cloud";

export const getTokenService = async () => {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const token = await getMessagePromiseWithTimeout(TOKEN_TYPE, () => {
                window.parent.postMessage({ type: GET_AUTH_TOKEN }, '*');
            });
            return token;
        } catch (error) {
            // Handle error (optional: log error, continue retrying, etc.)
        }
    }
    throw new Error('Failed to get token');
};

const getMessagePromiseWithTimeout = (type, sendMessage) => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout')), 5000);
        const listener = (event) => {
            if (event.origin !== HOST_URL) return;
            if (event.data.type === type) {
                clearTimeout(timeout);
                window.removeEventListener('message', listener);
                resolve(event.data);
            }
        };
        window.addEventListener('message', listener);
        sendMessage();
    });
};
