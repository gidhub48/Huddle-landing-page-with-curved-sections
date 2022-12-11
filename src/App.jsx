import Navbar from "./component/navbar";
import Header from "./component/header";
import Section from "./component/section";
import Footer from "./component/footer";

const imgFiles = {
    mtop1:"images/bg-section-top-mobile-1.svg",
    dtop1:"images/bg-section-top-desktop-1.svg",
    mbot1:"images/bg-section-bottom-mobile-1.svg",
    dbot1:"images/bg-section-bottom-desktop-1.svg",

    mtop2:"images/bg-section-top-mobile-2.svg",
    dtop2:"images/bg-section-top-desktop-2.svg",
    mbot2:"images/bg-section-bottom-mobile-2.svg",
    dbot2:"images/bg-section-bottom-desktop-2.svg",

    img1:"images/illustration-grow-together.svg",
    img2:"images/illustration-flowing-conversation.svg",
    img3:"images/illustration-your-users.svg",
}

const text = {
    sec1:"Generate meaningful discussions with your audience and build a strong, loyal community.Think of the insightful conversations you miss out on with a feedback form.",
    sec1title:"Grow Together",
    sec2:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    sec2title:"Flowing Conversations",
    sec3:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    sec3title:"Your Users"
}

const App = ()=>{
	return (
        <>
            <Navbar/>
            <Header/>
            <Section dir="right" text={text.sec1} title={text.sec1title} mainImg={imgFiles.img1} srcsetBotMoblie={imgFiles.mbot1} srcBot={imgFiles.dbot1} srcsetTopMoblie={imgFiles.mtop1} srcTop={imgFiles.dtop1}  />
            <Section dir="left" hasPic="no" text={text.sec2} title={text.sec2title} mainImg={imgFiles.img2} />
            <Section dir="right" text={text.sec3} title={text.sec3title} mainImg={imgFiles.img3} srcsetBotMoblie={imgFiles.mbot2} srcBot={imgFiles.dbot2} srcsetTopMoblie={imgFiles.mtop2} srcTop={imgFiles.dtop2}  />
            <section className="startCommunity">
                <h1>Ready To Build Your Community?</h1>
                <a href="#" className="btn-deco1">Get Started For Free</a>
            </section>
            <Footer/>
        </>
	);
}

export default App