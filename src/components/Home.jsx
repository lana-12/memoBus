import { useState, useEffect } from "react";
import JsonServerTerm from "../services/JsonServerTerm";
import JsonServerColumn from "../services/JsonServerColumn";
import JsonServerCard from "../services/JsonServerCard";
import Term from './Term';
import Column from './Column';


function Home() {
    const [terms, setTerms] = useState([]);
    const [columns, setColumns] = useState([]);
    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        // Charger les terms depuis la base de données (db.json) au montage du composant
        const fetchData = async () => {
            try {
                //Term
                const dataTerm = await JsonServerTerm.loadTerm();
                console.log('dataTerm ', dataTerm);
                setTerms(dataTerm)
                console.log('Terms ', terms);

                //Columun
                const dataColumn = await JsonServerColumn.loadColumn();
                console.log('dataCol : ', dataColumn);
                setColumns(dataColumn);

                //Columun
                const dataCard = await JsonServerCard.loadCard();
                console.log('dataCar : ', dataCard);
                setCards(dataCard);



            } catch (error) {
                setError(`Erreur attrapée dans La récupération des données` + error);
                console.error(`Erreur attrapée dans La récupération des données` + error);
            }
        };
        fetchData();
    }, []);

    async function handleClickTerm(term_id) {
        console.log(`Dans handleClickTerm`, term_id);
        console.log(`terms dans hand : `, terms);
    }


    return (
        <>
            <h1>Home</h1>
            <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-center ">
                        {/* <button id="add-user-term" class="btn btn-success m-2" title="Ajouter une thématique">+</button> */}
                        {/* <i class="bi bi-plus-circle"></i> */}
                        {terms.map((term) =>
                            <Term
                                key={term.id}
                                term={term}
                                onClickDisplatTerm={handleClickTerm}
                            />
                        )}

                    </div>
                    <div className="text-center">
                        <button id="add-user-term" class="btn btn-success m-2" title="Ajouter une thématique">+</button>
                        <button id="add-user-term" class="btn btn-warning m-2" title="Modifier une thématique"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg></button>
                        <button id="add-user-term" class="btn btn-danger m-2" title="Supprimer une thématique">-</button>
                    </div>
                </div>
            </section>

            <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-between ">
                        {columns.map((col) =>
                            <Column
                                key={col.id}
                                col={col}
                                cards={cards}
                            />
                        )}
                    </div>
                </div>
            </section>


            {/* <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-between ">
                        {cards.map((card) =>
                            <Card
                                key={card.id}
                                card={card}
                                
                            />
                        )}
                    </div>
                </div>
            </section> */}


        </>
    );
}

export default Home;