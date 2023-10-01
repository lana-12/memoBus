const NavLogin = ({ onClickLinkNavHeader }) => {
    return (
        <nav className="d-flex justify-content-end">
            
            <a 
                onClick={onClickLinkNavHeader}
                className="link-header" >Login</a>
        
            <a 
                onClick={onClickLinkNavHeader}
                className="link-header" >Logout</a>
                
        </nav>
    );
}

export default NavLogin;