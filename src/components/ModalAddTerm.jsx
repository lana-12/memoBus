import React, { useState } from "react";

function ModalAddTerm({ showModal, handleCloseModal, handleAddTerm }) {
    const [termName, setTermName] = useState(""); 

    const handleTermNameChange = (e) => {
        setTermName(e.target.value);
        // console.log(e.target.value)
    };

    const handleAddClick = () => {
        handleAddTerm(termName);
        setTermName(""); 
        handleCloseModal(); 
    };

    return (
        <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: showModal ? "block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ajouter un terme</h5>
                        <button type="button" className="close" onClick={handleCloseModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="termName">Nom du terme :</label>
                            <input type="text" className="form-control" id="termName" 
                            value={termName} 
                            onChange={handleTermNameChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                            Annuler
                        </button>
                        <button type="button" className="btn btn-success" onClick={handleAddClick}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAddTerm;
