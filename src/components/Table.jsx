import Column from "./Column";

const Table = ({ cols, cards, termSelected, handleChangeCardColumn, handleClickDeleteCard, handleShowModalEditCard  }) => {

    const copyCol = [...cols]
    // console.log(copyCol);
    return (
        <>
            {copyCol.map((col) => 
                <Column
                    key={col.id}
                    col={col}
                    cards={cards}
                    termSelected={termSelected}
                    updateCardColumn={handleChangeCardColumn}
                    deleteCard={handleClickDeleteCard}
                    updateCard={handleShowModalEditCard}
                />)}
        </>
    );
}

export default Table;