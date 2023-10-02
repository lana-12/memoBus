export default class JsonServerTerm {
    static url = 'http://localhost:3001/terms';


    static async loadTerm() {
        return fetch(JsonServerTerm.url)
            .then(response => {
                console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadLogin")
                return response.json();
            })
            .then(terms => {
                console.log(`terms : `, terms);
                return terms;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadLogin : ` + error);
            });
    }
}