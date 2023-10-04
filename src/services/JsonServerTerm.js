export default class JsonServerTerm {
    static url = 'http://localhost:3001/terms';


    static async loadTerm() {
        return fetch(JsonServerTerm.url)
            .then(response => {
                console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadTerm")
                return response.json();
            })
            .then(terms => {
                console.log(`terms : `, terms);
                return terms;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadTerm : ` + error);
            });
    }

    static async addRemoteTerm(term) {
        return fetch(JsonServerTerm.url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(term)
            })
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (term) {
                console.log(term)
            })
            .catch(function (error) { console.error(error) })
    }

    static async deleteRemoteTerm(term_id) {
        return fetch(`${JsonServerTerm.url}/${term_id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE"
            })
            .then(function (res) {
                console.log(`res.status`, res.status);
                if (res.status !== 200) throw new Error("Erreur dans deleteRemoteTerm");
                return res.json();
            })
            .then(function (data) { console.log("data après delete", data) })
    }
}