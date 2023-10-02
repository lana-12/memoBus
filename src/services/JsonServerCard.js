export default class JsonServerCard {
    static url = 'http://localhost:3001/cards';


    static async loadCard() {
        return fetch(JsonServerCard.url)
            .then(response => {
                console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadCard")
                return response.json();
            })
            .then(cards => {
                console.log(`cards : `, cards);
                return cards;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadCard : ` + error);
            });
    }
}