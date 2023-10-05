import React, { useState } from "react";


const ModalEditCard = (showModalEditCard, handleCloseModalEditCard, handleEditCard) => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [selectedTerm, setSelectedTerm] = useState("");
    const [terms, setTerms] = useState([]) 

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleTermChange = (e) => {
        setSelectedTerm(e.target.value);
    };

    const handleEditClick = () => {
        // Validez les champs de saisie ici
        if (question.trim() === "" || answer.trim() === "" || selectedTerm === "") {
            // Affichez une erreur ou une alerte si les champs sont vides
            return;
        }
        // Appelez la fonction pour créer la carte avec les données
        handleEditCard({
            question: question,
            answer: answer,
            tid: parseInt(selectedTerm),
        });

        // Réinitialisez les champs après la création de la carte
        setQuestion("");
        setAnswer("");
        setSelectedTerm("");
        handleCloseModalEditCard();
    };

    return (
        <div className={`modal ${showModalEditCard ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: showModalEditCard ? "block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modifier </h5>
                        <button type="button" className="close" onClick={handleCloseModalEditCard}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="question">Question :</label>
                            <input type="text" className="form-control" id="question" value={question} onChange={handleQuestionChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="answer">Réponse :</label>
                            <input type="text" className="form-control" id="answer" value={answer} onChange={handleAnswerChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="term">Terme :</label>
                            <select className="form-control" id="term" value={selectedTerm} onChange={handleTermChange}>
                                <option value="">Sélectionnez un terme</option>
                                {terms.map((term) => (
                                    <option key={term.id} value={term.id}>
                                        {term.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModalEditCard}>
                            Annuler
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
                            Créer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditCard;