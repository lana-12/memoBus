const Term = ({ term, onClickDisplatTerm }) => {
    return (
        <>
            <button
                className="btn btn-secondary me-4"
                onClick={() => onClickDisplatTerm(term.id)}
            >{term.name}</button>
        </>
    );
}

export default Term;