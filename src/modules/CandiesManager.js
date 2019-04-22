const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/candies/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/candies`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/candies/${id}`, {
            method : "DELETE"
        })
        .then(r => r.json())
    }
}