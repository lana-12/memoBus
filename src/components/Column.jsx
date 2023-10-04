import Card from "./Card";

const Column = ({ col, cards, termSelected }) => {
    // console.log("cards dans le composant Column : ", cards);
    const copy = [...cards];
    // console.log('copy : ', copy)
    console.log('dans colums cards : ', copy)
    console.log('dans colums col : ', col)
    return (
        <div className="container boxCol me-4">            
            <h4>{col.label}</h4>
            {copy
                .filter((card) => {
                    return card.column === col.id && card.tid === termSelected.id
                })
                .map((card, index) => <Card key={index} card={card} />)}
        </div>
    );
}

export default Column;