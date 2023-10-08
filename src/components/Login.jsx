import { useEffect, useState, useRef } from "react";
import JsonServerUser from "../services/JsonServerUser";
import Form  from "./FormLogin";
import { useNavigate } from "react-router-dom";


function Login() {
    const [users, setUsers] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setIsLogged] = useState(false);


    const inputNameRef = useRef(null);
    const inputPwdRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const dataUser = await JsonServerUser.loadLogin();
                setUsers(dataUser)
            } catch (error) {
                setError(`Erreur attrapée dans La récupération des données` + error);
                console.error(`Erreur attrapée dans La récupération des données` + error);
            }
        };
        fetchUser();
    }, []); 
    

    const handleSubmitFormLogin = (e) => {
        e.preventDefault();

        if (users.username === inputNameRef.current.value && users.pwd === inputPwdRef.current.value) {
            if (users) {
                setIsLogged(true);
                alert('Connexion réussie !');
                navigate('/home')
            } else {
                alert('Nom d\'utilisateur ou mot de passe incorrect');
            }
        }
    };
    return (
        <>
            <Form
                inputNameRef={inputNameRef}
                inputPwdRef={inputPwdRef}
                onSubmitFormLogin={handleSubmitFormLogin}
            />
        </>
    );
}

export default Login;


