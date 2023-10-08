import { useState, useEffect, useRef } from "react";
import JsonServerTerm from "../services/JsonServerTerm";
import JsonServerColumn from "../services/JsonServerColumn";
import JsonServerCard from "../services/JsonServerCard";
import Term from './Term';
import Table from "./Table";
import { Link } from 'react-router-dom';
import ModalAddTerm from "./ModalAddTerm";
import ModalEditTerm from "./ModalEditTerm";
import ModalAddCard from "./ModalAddCard";
import ModalEditCard from "./ModalEditCard";



function Home() {
    const [terms, setTerms] = useState([]);
    const [termSelected, setTermSelected] = useState([]);
    const [columns, setColumns] = useState([]);
    const [cards, setCards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [termForEdit, setTermForEdit] = useState(null);

    const [showModalCard, setShowModalCard] = useState(false);
    const [showModalEditCard, setShowModalEditCard] = useState(false);

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

///////////////////////////////////////////////////
    //TERM Traitement START

    // Function for display the la modalCreateTerm
    const handleShowModal = () => {
        setShowModal(true);
    };

    // Function for hidden the modalCreateTerm
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Function for display the la modalCreateTerm
    const handleShowModalEdit = () => {
        setShowEditModal(true);
    };

    // Function for hidden the modalCreateTerm
    const handleCloseModalEditTerm = () => {
        setShowEditModal(false);
        setTermForEdit(null);
    };

    // Function for add a term
    const handleAddTerm = (termName) => {
        const new_term = {
            name: termName,
            selected: false
        }
        JsonServerTerm.addRemoteTerm(new_term);
        setTerms([...terms, new_term]);
    };
    const handleEditTerm = (termId, newName) => {

        // Mettez à jour le terme dans la base de données (db.json) ici en utilisant une requête HTTP (par exemple, fetch ou axios).
        // Après la mise à jour réussie, mettez à jour l'état local terms avec le nouveau nom du terme.
        // Assurez-vous que termId correspond à l'ID du terme que vous souhaitez mettre à jour.
        // Fermez ensuite la modal de modification en utilisant setShowEditModal(false).
    };
    //function for Delete Term
    const handleDeleteTerm =(term_id) => {
        console.log('Dans HandleDeleteTerm');
        console.log(term_id);
        // JsonServerTerm.deleteRemoteTerm(term_id);
        const deleteTerm = terms.map((term) => {
            if (term.id === term_id) {
                return { ...term };
            }
            return term;
        });
        setTerms(deleteTerm);
        window.location.reload()

    }
    //TERM END
///////////////////////////////////////////////////

///////////////////////////////////////////////////
    //Card Traitement START

    // Function for display the modalCreateCard
    const handleShowModalCard = () => {
        setShowModalCard(true);
    };

    // Function for hidden the modalCreateCard
    const handleCloseModalCard = () => {
        setShowModalCard(false);
    };

    // Function for display the modalEditCard
    const handleShowModalEditCard = () => {
        setShowModalEditCard(true);
    };

    // Function for hidden the modalEditCard
    const handleCloseModalEditCard = () => {
        setShowModalEditCard(false);
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

    const handleEditCard = (car_id) =>{
        console.log('Dans handleEditCard ')
        console.log(car_id)
    }

    // Function for delete une card
    const handleClickDeleteCard = (card_id) => {
        console.log('Dans handleClickDeleteCard ')
        console.log('card_id ', card_id)
        
        JsonServerCard.deleteRemoteCard(card_id);
        const deleteCardsCol = cards.map((card) => {
            if (card.id === card_id) {
                return { ...card };
            }
            return card;
        });
        setCards(deleteCardsCol);
        window.location.reload()
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
    //CARD END
///////////////////////////////////////////////////


    
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
                                setShowTable={setShowTable}
                                deleteTerm={handleDeleteTerm}
                            />
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
                        <div className="col d-flex justify-content-evenly ">
                            {
                                showTable &&
                                <Table
                                    cols={columns}
                                    cards={cards}
                                    termSelected={termSelected}
                                    handleChangeCardColumn={handleChangeCardColumn}
                                    handleClickDeleteCard={handleClickDeleteCard}
                                    handleShowModalEditCard={handleShowModalEditCard}
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
                handleAddTerm={handleAddTerm}
            />

            
                {/* <ModalEditTerm
                    term={termForEdit}
                    onUpdateTerm={handleEditTerm}
                    onClose={() => {
                        setShowEditModal(false);
                        setTermForEdit(null);
                    }}
                /> */}


            {/* Modal create card */}
            <ModalAddCard 
                showModalCard={showModalCard}
                terms={terms} 
                handleCloseModalCard={handleCloseModalCard} 
                handleAddCard={handleAddCard} 
            />

            {/* Modal edit card */}
            {/* <ModalEditCard 
                // showModalEditCard={showModalEditCard}
                terms={terms} 
                handleCloseModalEditCard={handleCloseModalEditCard} 
                handleEditCard={handleEditCard} 
            /> */}
            </>
    );
}

export default Home;