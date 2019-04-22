const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/locations`).then(r => r.json())
    }
}