import "./navbar.css"

const Navbar = ()=>{
	return (
        <nav>
            <div className="nav-content">
                <img src="images/logo.svg" alt="huddle page logo" className="logo"/>
                <a href="#" className="btn-deco2">Try it free</a>
            </div>
        </nav>
	);
}

export default Navbar