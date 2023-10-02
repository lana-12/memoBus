import { useState, useEffect } from "react";
import JsonServerTerm from "../services/JsonServerTerm";
import Term from './Term';
import Column from './Column';
import Card from './Card';
import JsonServerColumn from "../services/JsonServerColumn";


function Home () {
    const [terms, setTerms] = useState([]);
    const [columns, setColumns] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        // Charger les terms depuis la base de données (db.json) au montage du composant
        const fetchData = async () => {
            try {
                //Term
                const dataTerm = await JsonServerTerm.loadTerm();
                console.log('dataTerm ' , dataTerm);
                setTerms(dataTerm)
                console.log('Terms ',  terms);

                //Columun
                const dataColumn = await JsonServerColumn.loadColumn();
                console.log('dataCol : ', dataColumn);
                setColumns(dataColumn);

            } catch (error) {
                setError(`Erreur attrapée dans La récupération des données` + error);
                console.error(`Erreur attrapée dans La récupération des données` + error);
            }
        };
        fetchData();
    }, []); 

    async function handleClickTerm(term_id) {
        console.log(`Dans handleClickTerm`, term_id);
        console.log(`terms dans hand : `, terms);
    }


    return (
        <>
        <h1>Home</h1>
            <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-center ">

                        {terms.map((term) =>
                            <Term
                                key={term.id}
                                term={term}
                                onClickDisplatTerm={handleClickTerm}
                            />
                        )}
                    </div>
                </div>
            </section>
            
            <section className="container my-5">
                <div className="row ">
                    <div className="col d-flex justify-content-between ">
                        {columns.map((col) =>
                            <Column
                                key={col.id}
                                col={col}
                                
                            />
                        )}

                    </div>
                </div>
            </section>

        
        </>
    );
}

export default Home;