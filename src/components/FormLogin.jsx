const FormLogin = ({ inputNameRef, inputPwdRef, onSubmitFormLogin }) => {
    return (
        <section className="boxFormLogin mt-5">
            <h2 className="text-center mt-3">Connexion</h2>
            <div className="formLogin">
                <form 
                    className=""
                    onSubmit={(e)=> {
                        e.preventDefault();
                        onSubmitFormLogin(e)
                    }}
                >
                    <div className="mb-3">
                        <label 
                            htmlFor="inputName"
                            className="form-label">
                            Nom d'utilisateur:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="inputName"
                            ref={inputNameRef}
                            name="username"
                            // value={username}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label 
                            htmlFor="inputPwd"
                            className="form-label"
                            >Mot de passe:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            id="inputPwd"
                            name="password"
                            ref={inputPwdRef}
                            // value={password}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button className="btn btn-primary mb-3 " type="submit">Connexion</button>
                    </div>
                </form>

            </div>
            

        </section>
    );
}

export default FormLogin;