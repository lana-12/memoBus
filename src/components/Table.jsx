import Column from "./Column";

const Table = ({ cols, cards, termSelected, handleChangeCardColumn  }) => {

    const copyCol = [...cols]
    console.log(copyCol);
    return (
        <>
            {copyCol.map((col) => 
                <Column
                    key={col.id}
                    col={col}
                    cards={cards}
                    termSelected={termSelected}
                    updateCardColumn={handleChangeCardColumn}
                />)}
        </>
    );
}

export default Table;