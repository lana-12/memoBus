import Card from "./Card";

const Columns = ({ col, cards }) => {
    // console.log("cards dans le composant Column : ", cards);
    const copy = [...cards];
    // console.log('copy : ', copy)
    return (
        <div className="container boxCol me-4">            
            <h4>{col.label}</h4>
            {/* //Faire une copie de map */}
            {/* faire un filter avec les id */}
            
            {copy
                .filter((card)=>{
                return card.column === col.id
            })
                .map((card) => <Card key={card.id} card={card} />) }

        </div>
    );
}

export default Columns;