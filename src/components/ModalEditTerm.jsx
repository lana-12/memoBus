import React, { useState } from "react";

function ModalEditTerm({ showEditModal, term, onUpdateTerm, onClose }) {
    const [editedName, setEditedName] = useState(term.name);

    const handleNameChange = (e) => {
        setEditedName(e.target.value);
    };

    const handleUpdateTerm = () => {
        onUpdateTerm(term.id, editedName);
        onClose();
    };

    return (
        <div className={`modal ${showEditModal ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: showEditModal ? "block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modifier le terme</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="termName">Nom du terme :</label>
                            <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    placeholder="Nouveau nom du terme"
                />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleUpdateTerm}>
                            Annuler
                        </button>
                        <button type="button" className="btn btn-success" onClick={onClose}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditTerm;
