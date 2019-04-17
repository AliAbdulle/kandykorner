const apiURL = "http://localhost:5002/candiesFromAPI"

export default {
    get(id) {
        return fetch(`${apiURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(apiURL).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/${id}`, {
            method : "DELETE"
        })
        .then(r => r.json())
    }
}