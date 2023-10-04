import { useState } from "react";

const FormAddCard = ({ cols, terms, inputAnswerRef, inputQuestionRef, inputTermRef, inputSelectRef, onSubmitFormAddCard, onChange }) => {
    const copyCol = [...cols];
    const copyTerm = [...terms];
    const [formTerm, setFormTerm] = useState("Sélectionner un thème");


    return (
        <section className=" mt-5">
            <h2 className="text-center mt-3">Create Card</h2>
            <div className="formLogin">
                <form
                    className=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitFormAddCard(e)
                        console.log()
                    }}
                >
                    <div className="mb-3">
                        <label
                            htmlFor="inputName"
                            className="form-label">
                            Question :
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="inputQuestion"
                            ref={inputQuestionRef}
                            name="question"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="inputName"
                            className="form-label">
                            Réponse :
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="inputAnswer"
                            ref={inputAnswerRef}
                            name="answer"
                        />
                    </div>

                    <label htmlFor="termSelect" className="form-label">
                        Term
                    </label>
                    <select
                        className="form-control"
                        id="termSelect"
                        value={formTerm}
                        onChange={(e) => setFormTerm(e.target.value)}
                        ref={inputSelectRef}
                    >
                        <option value="">Sélectionner un thème</option>
                        {copyTerm.map((term) => 
                            <option key={term.id}  value={term.id}>{term.name}</option>

                        )}
                    
                    </select>
                    

                    <div className="d-flex justify-content-center ">
                        <button className="btn btn-primary mb-3 " type="submit">Créer une nouvelle Carte</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormAddCard;