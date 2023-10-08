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

    static async deleteRemoteCard(card_id) {
        return fetch(`${JsonServerCard.url}/${card_id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE"
            })
            .then(function (res) {
                console.log(`res.status`, res.status);
                if (res.status !== 200) throw new Error("Erreur dans deleteRemoteCard");
                return res.json();
            })
            .then(function (data) { console.log("data après delete", data) })
    }


    // static async changeCardColumn(cardId) {
        // const url = `${JsonServerCard.url}/${cardId}`;
        // const updatedCard = {
        //     column: newColumn
        // };

        // try {
        //     const response = await fetch(url, {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(updatedCard)
        //     });

        //     if (!response.ok) {
        //         throw new Error(`Erreur lors de la mise à jour de la carte avec l'ID ${cardId}`);
        //     }

        //     const updatedData = await response.json();
        //     return updatedData;
        // } catch (error) {
        //     console.error(error);
        //     throw error;
        // }
    // }



    static async changeCardColumn(cardId, newColumn) {
        const url = `${JsonServerCard.url}/${cardId}`;
        const updatedCard = {
            column: newColumn
        };

        try {
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedCard)
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour de la carte avec l'ID ${cardId}`);
            }

            const updatedData = await response.json();
            return updatedData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    


}