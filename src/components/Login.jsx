import { useEffect, useState, useRef } from "react";
import JsonServerUser from "../services/JsonServerUser";
import Form  from "./FormLogin";
import { useNavigate } from "react-router-dom";


function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [users, setUsers] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setIsLogged] = useState(false);


    const inputNameRef = useRef(null);
    const inputPwdRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        // Charger les utilisateurs depuis la base de données (db.json) au montage du composant
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
    // Le tableau vide [] signifie que cela se produit seulement au montage du composant

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === 'username') {
    //         setUsername(value);
    //     } else if (name === 'password') {
    //         setPassword(value);
    //     }
    // };

    const handleSubmitFormLogin = (e) => {
        // console.log('Dans le handleSubmitFormLogin');
        e.preventDefault();

        // Sans le use ref mais avec value=""
        // console.log('form : ', e.target[0].value);
        // console.log('form : ', e.target[1].value);

        //Avec le useRef
        // console.log('inputNameRef : ', inputNameRef.current.value);
        // console.log('inputPwdRef : ', inputPwdRef.current.value);
        
        // console.log('Data user : ', users.username);
        // console.log('Data user : ', users.pwd);


        if (users.username === inputNameRef.current.value && users.pwd === inputPwdRef.current.value) {
            if (users) {
                setIsLogged(true);
                alert('Connexion réussie !');
                navigate('/home')
            } else {
                alert('Nom d\'utilisateur ou mot de passe incorrect');
            }

        }


        // // // Search user(u) dans db
        // const user = users.find((u) => u.username === inputNameRef.current.value && u.password === inputPwdRef.current.value);

    };


    return (
        <>
            <Form
                inputNameRef={inputNameRef}
                inputPwdRef={inputPwdRef}
                onSubmitFormLogin={handleSubmitFormLogin}
            />

            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inputName">Nom d'utilisateur:</label>
                    <input
                        type="text"
                        id="inputName"
                        ref={inputNameRef}
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="inputPwd">Mot de passe:</label>
                    <input
                        type="password"
                        id="inputPwd"
                        name="password"
                        ref={inputPwdRf}
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Connexion</button>
            </form> */}
        </>
    );
}

export default Login;


