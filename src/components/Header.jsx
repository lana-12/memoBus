import { Link } from "react-router-dom";

const Header = ({ onClickLogout, color }) => {
    return (
        <header className="">
            <div className="container">
                <div className="row ">
                    <div className="d-flex justify-content-center">
                    {/* <div className="col-8 d-flex justify-content-center"> */}
                        <h1 
                        // Create route vers home
                        id="title-memo"><Link className="titleNemo" to="/home">MemoBus</Link></h1>
                        
                    </div>
                    <div className="">
                        <nav className="d-flex justify-content-end">
                            <ul>
                                <li>
                                    <Link className="link-header" to="/">Login</Link>
                                </li>
                                <li
                                    onClick={onClickLogout}
                                >Logout
                                        {/* <Link className="link-header" to="/Logout">Logout</Link> */}
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;