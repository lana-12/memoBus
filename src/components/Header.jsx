import NavLogin from "./NavLogin";

const Header = ({ onClickTitleNemo }) => {
    return (
        <header className="bg-secondary">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-9 d-flex justify-content-center">
                    {/* <div className="col-8 d-flex justify-content-center"> */}
                        <h1 

                        // Create route vers home
                        onClick={onClickTitleNemo}
                        className="titleNemo" 
                        id="title-memo">MemoBus</h1>
                    </div>
                    <div className="col-3">
                        <NavLogin
                        
                        >
                            
                        </NavLogin>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;