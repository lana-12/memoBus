const FormAddTerm = ({ inputNameRef, onSubmitFormAddTerm }) => {
    return (
        <section className=" mt-5">
            <h2 className="text-center mt-3">Create term</h2>
            <div className="formLogin">
                <form
                    className=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitFormAddTerm(e)
                    }}
                >
                    <div className="mb-3">
                        <label
                            htmlFor="inputName"
                            className="form-label">
                            Nom:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="inputName"
                            ref={inputNameRef}
                            name="name"
                        />
                    </div>
                    
                    <div className="d-flex justify-content-center ">
                        <button className="btn btn-primary mb-3 " type="submit">Créer un nouveau thème</button>
                    </div>
                </form>

            </div>


        </section>
    );
}

export default FormAddTerm;