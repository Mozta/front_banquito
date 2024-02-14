const API_URL = "http://127.0.0.1:5000";

function login(credentials) {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login fallido');
        }
        return response.json();
    })
    .then(data => data.token); // Suponiendo que la API devuelve un objeto con un campo 'token'
}

export const loginService = {
    login,
};
