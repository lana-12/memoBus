
const Card = ({ card, updateCardColumn, deleteCard, updateCard }) => {

    const handleMoveRightClick = ()=> {
        const currentColumn = card.column;
        const newColumn = currentColumn < 4 ? currentColumn + 1 : currentColumn;
        updateCardColumn(card.id, newColumn);
    }

    const handleMoveLeftClick = ()=> {
        const currentColumn = card.column;
        const newColumn = currentColumn >1 ? currentColumn - 1 : currentColumn;
        updateCardColumn(card.id, newColumn);
    }

    const onClickDeleteCard = ()=> {
        console.log('Dans Card ');
        deleteCard(card.id);
    }

    const onClickEditCard = ()=> {
        console.log('Dans Card ');
        console.log(card.id);

        updateCard(card.id);
        alert((`Je n'arrive pas à ouvrir la modal pour modifier : ${card.question}, id : ${card.id} `))

    }


    return (
        <>
        <div className="card bg-secondary">
            <article id={card.id}>
                <div className="card-body">
                    <div 
                    className="d-flex" 
                    title="Déplacer la carte">

                        <svg 
                        onClick={handleMoveLeftClick}
                        id="arrowLeft"  xmlns= "http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className="arrow bi bi-arrow-left-circle mt-2 me-3"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                    <h5 className="card-title">{card.question}</h5>
                        <svg 
                        onClick={handleMoveRightClick }
                        id="arrowRigth" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow bi bi-arrow-right-circle mt-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>

                </div>
                    <h6 className="card-subtitle mb-2 text-muted"> N° term : {card.tid}</h6>
                    <p className="card-text">Réponse : {card.answer}</p>
                    <div className="d-flex justify-content-evenly">
                        <button 
                        className="btn btn-danger"
                        onClick={onClickDeleteCard}>
                        Supprimer
                        </button>
                        
                        <button
                        onClick={onClickEditCard} 
                        className="btn btn-warning ">
                        Modifier
                        </button>
                    </div>
                </div>
            </article>
        </div>
    </>
    );
}

export default Card;