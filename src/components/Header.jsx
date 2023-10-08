import { Link } from "react-router-dom";

const Header = ({ onClickLogout, color }) => {
    return (
        <header className="">
            <div className="container">
                <div className="row ">
                    <div className="d-flex justify-content-center">
                        <h1 
                        id="title-memo"><Link className="titleNemo" to="/home">MemoBus</Link></h1>
                        
                    </div>
                    <div className="">
                        <nav className="d-flex justify-content-end">
                            <ul>
                                <li>
                                    <Link className="link-header" to="/">Login</Link>
                                </li>
                                <li
                                    className="logout"
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