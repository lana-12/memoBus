export default class JsonServerColumn{
    static url = 'http://localhost:3001/columns';


    static async loadColumn() {
        return fetch(JsonServerColumn.url)
            .then(response => {
                // console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadColumn")
                return response.json();
            })
            .then(cols => {
                // console.log(`cols : `, cols);
                return cols;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadColumn : ` + error);
            });
    }
}