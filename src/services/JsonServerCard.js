export default class JsonServerCard {
    static url = 'http://localhost:3001/cards';


    static async loadCard() {
        return fetch(JsonServerCard.url)
            .then(response => {
                // console.log(`response.status`, response.status);
                if (response.status !== 200) throw new Error("Erreur dans le loadCard")
                return response.json();
            })
            .then(cards => {
                // console.log(`cards : `, cards);
                return cards;
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadCard : ` + error);
            });
    }

    static async addRemoteCard(card) {
        return fetch(JsonServerCard.url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(card)
            })
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (card) {
                // console.log(card)
            })
            .catch(function (error) { console.error(error) })
    }
}