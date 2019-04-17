const apiURL = "http://localhost:5002/employeeFromAPI"

export default {
    get(id) {
        return fetch(`${apiURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(apiURL).then(r => r.json())
    }
}