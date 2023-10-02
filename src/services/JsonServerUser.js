export default class JsonServerUser {
    static url = 'http://localhost:3001/users';


    static async loadLogin() {
        return fetch(JsonServerUser.url)
            .then(response => {
                // console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadLogin")
                return response.json();
            })
            .then(users => {
                const u = users[0];
                // console.log(`users : `, users);
                return u;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadLogin : ` + error);
            });
    }
}