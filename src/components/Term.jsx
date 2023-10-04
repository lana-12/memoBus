const Term = ({ term, setTermSelected  }) => {


    // function onclickTermName(term_id) {
    //     console.log(`Dans onclickTermName`, term_id);
    //     alert('cliquer')
    //     console.log('Dans onclickTermName term :' ,term)
    //     // if (term_id === term.id){
    //     //     console.log(term.name);
    //     //     return term.name
    //     // }
    // }

    return (
        <>
            <button
                className="btn btn-secondary me-4"
                onClick={() => setTermSelected(term)}
            >{term.name}</button>
        </>
    );
}

export default Term;