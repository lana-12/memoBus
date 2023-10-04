import React from "react";

function Term({ term, setTermSelected, setShowTable }) {
    const handleButtonClick = () => {
        setTermSelected(term);
        setShowTable(true); // Déclenche l'affichage du composant Table
    };

    return (
        <>
            <button
                className="btn btn-secondary me-4"
                onClick={handleButtonClick}
            >
                {term.name}
            </button>
        </>
    );
}

export default Term;
