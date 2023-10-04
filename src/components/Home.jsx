import { useState, useEffect, useRef } from "react";
import JsonServerTerm from "../services/JsonServerTerm";
import JsonServerColumn from "../services/JsonServerColumn";
import JsonServerCard from "../services/JsonServerCard";
import Term from './Term';
import { Link } from 'react-router-dom';
import ModalAddTerm from "./ModalAddTerm";
import ModalAddCard from "./ModalAddCard";
import Table from "./Table";



function Home() {
    const [terms, setTerms] = useState([]);
    const [termSelected, setTermSelected] = useState([]);
    const [columns, setColumns] = useState([]);
    const [cards, setCards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalCard, setShowModalCard] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        // Charger les terms depuis la base de données (db.json) au montage du composant
        const fetchData = async () => {
            try {
                //Term
                const dataTerm = await JsonServerTerm.loadTerm();
                // console.log('dataTerm ', dataTerm);
                setTerms(dataTerm)
                // console.log('Terms ', terms);

                //Columun
                const dataColumn = await JsonServerColumn.loadColumn();
                // console.log('dataCol : ', dataColumn);
                setColumns(dataColumn);

                //Columun
                const dataCard = await JsonServerCard.loadCard();
                // console.log('dataCar : ', dataCard);
                setCards(dataCard);



            } catch (error) {
                setError(`Erreur attrapée dans La récupération des données` + error);
                console.error(`Erreur attrapée dans La récupération des données` + error);
            }
        };
        fetchData();
    }, []);

    // const handleShowTable = () => {
    //     setShowTable(true);
    // }

    // Function for display the la modalCreateTerm
    const handleShowModal = () => {
        setShowModal(true);
    };

    // Function for hidden the modalCreateTerm
    const handleCloseModal = () => {
        setShowModal(false);
    };
    // Function for display the modalCreateCard
    const handleShowModalCard = () => {
        setShowModalCard(true);
    };

    // Function for hidden the modalCreateCard
    const handleCloseModalCard = () => {
        setShowModalCard(false);
    };

    // Function for add a term
    const handleAddTerm = (termName) => {
        const new_term= {
            name: termName,
            selected: false
        }
        JsonServerTerm.addRemoteTerm(new_term);
        setTerms([...terms, new_term]);
    };

    // Function for add une card
    const handleAddCard = (cardData) => {
        // console.log('Dans handleAddCard ')
        const new_card = {
            ...cardData,
            column: 1,
            selected: false,
        }
        JsonServerCard.addRemoteCard(new_card);
        setCards([...cards, new_card ]);
    };

    // Function for update Col of the card
    const handleChangeCardColumn = (cardId, newColumn) => {
        // console.log('Dans handleChangeCardColumn ')
        JsonServerCard.changeCardColumn(cardId, newColumn);
        const updateChangeCardsCol = cards.map((card) => {
            if (card.id === cardId) {
                return { ...card, column: newColumn };
            }
            return card;
        });
        setCards(updateChangeCardsCol);
    };
    
    return (
        <>
            <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-center ">
                        <button
                            id="add-user-term"
                            className="btn btn-success m-2" title="Ajouter une thématique"
                            onClick={handleShowModal}
                        >+</button>
                        
                        {terms.map((term) =>
                            <Term 
                                key={term.id} 
                                term={term} 
                                setTermSelected={setTermSelected} 
                                setShowTable={setShowTable} />
                        )}
                    </div>
                </div>
            </section>


            <section className="container">
                <button
                    id="add-user-term"
                    className="btn btn-primary" title="Ajouter une carte"
                    onClick={handleShowModalCard}
                > Ajouter une Carte</button>
                <p className="titleTerm">{termSelected.name}</p>

                <section className="container my-5">
                    <div className="row ">
                        <div className="col d-flex justify-content-between ">
                            
                            {
                                showTable &&
                                <Table
                                    cols={columns}
                                    cards={cards}
                                    termSelected={termSelected}
                                    handleChangeCardColumn={handleChangeCardColumn}
                                    />
                            }
                                
                            
                        </div>
                    </div>
                </section>

            </section>
        
        
            {/* Modal create term*/}
            <ModalAddTerm 
                showModal={showModal} 
                handleCloseModal={handleCloseModal} 
                handleAddTerm={handleAddTerm} />


            {/* Modal create card */}
            <ModalAddCard 
                showModalCard={showModalCard}
                terms={terms} 
                handleCloseModalCard={handleCloseModalCard} 
                handleAddCard={handleAddCard} />
            </>
            
            
    );
}

export default Home;