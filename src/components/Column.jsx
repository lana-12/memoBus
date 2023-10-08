import Card from "./Card";

const Column = ({ col, cards, termSelected, updateCardColumn, deleteCard, updateCard }) => {
    const copy = [...cards];    
    
    return (
        <div className="container boxCol me-4">            
            <h4>{col.label}</h4>
            {copy
                .filter((card) => {
                    return card.column === col.id && card.tid === termSelected.id
                })
                .map((card, index) => 
                    <Card 
                        key={index} 
                        card={card}
                        updateCardColumn={updateCardColumn}
                        deleteCard={deleteCard}
                        updateCard={updateCard} 

                    />
                )
            }
        </div>
    );
}

export default Column;