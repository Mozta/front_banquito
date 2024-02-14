const API_URL = "http://127.0.0.1:5000"

function getToken() {
    return localStorage.getItem('token');
}

function getAccounts() {
    return fetch(`${API_URL}/cuentas`)
        .then(response => response.json())
}
function getAccount(id) {
    return fetch(`${API_URL}/cuentas/${id}`)
        .then(response => response.json())
}
function createAccount(account) {
    return fetch(`${API_URL}/cuentas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(account)
    })
        .then(response => response.json())
}

export const accountService = {
    getAccounts,
    getAccount,
    createAccount
}


