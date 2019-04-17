const apiURL = "http://localhost:5002/storesFromAPI"

export default {
    get(id) {
        return fetch(`${apiURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(apiURL).then(r => r.json())
    }
}