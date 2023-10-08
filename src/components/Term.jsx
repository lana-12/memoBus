import React from "react";
import { useState } from "react";
import ModalEditTerm from "./ModalEditTerm";


function Term({ term, setTermSelected, setShowTable, deleteTerm }) {
    

    const handleButtonClick = () => {
        setTermSelected(term);
        setShowTable(true); 
    };

    const onClickBtnTermDelete = () =>{
        // console.log('Dans onClickBtnTerm');
        console.log('Dans onClickBtnTerm', term.id);
        deleteTerm(term.id)
    }

    const onClickBtnTermUpdate = () =>{
        console.log('Dans onClickBtnTerm', term.id, term.name);
        alert((`Je n'arrive pas à ouvrir la modal pour modifier : ${term.name}, id : ${term.id} `))
    }

    return (
        <>
        <div className=" boxTerm">
            <button
                className="btnTerm btn btn-secondary me-4 "
                onClick={handleButtonClick}
                title="Cliquer pour afficher les cartes"
            >
            {term.name}
            </button>
            <div className="d-flex justify-content-center">
                    <button className="btnTermC btn btn-warning" title="Cliquer pour Modifier la thématique">
                    <i
                    className="bi bi-pencil-fill"
                    onClick={onClickBtnTermUpdate}></i>

                </button>
                    <button className="btnTermC btn btn-danger" title="Cliquer pour supprimer la thématique">
                    <i 
                    className="bi bi-dash"
                    onClick={onClickBtnTermDelete}></i>
                </button>
            </div>
        </div>
        </>
    );
}

export default Term;
