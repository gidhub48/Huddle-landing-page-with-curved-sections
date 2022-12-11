
import "./header.css"

const Header = ()=>{
	return (
        <header>
            <h1 className="header">Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <a href="#" className="btn-deco1">Get Started For Free</a>
            <div className="img-cover">
                <img src="images/screen-mockups.svg" alt="website"/>
            </div>
            <div className="web-data-show">
                <div className="showOffInfo">
                <img src="images/icon-communities.svg" alt="a group of people svg file"/>
                <h1 className="gigantic">1.4k+</h1> 
                <p>Communities Formed</p>
                </div>
                <div className="showOffInfo">
                <img src="images/icon-messages.svg" alt="Messages svg"/>
                <h1 className="gigantic">2.7m+</h1> 
                <p>Messages Sent</p>
                </div>
            </div>
        </header>
	);
}

export default Header