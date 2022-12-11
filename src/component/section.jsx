import "./section.css"

const Section = (props) => {

    return (
        <section className={props.dir + "-img"}>
            <picture className={props.hasPic}>
                <source srcset={props.srcsetTopMoblie} media="(max-width: 700px)"/>
                <img src={props.srcTop} alt="svg top curve"/>
            </picture>
            <div className="content-bg">
                <div className="content">
                    <div className="text-content">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </div>
                    <div className="img-content">
                        <img src={props.mainImg} alt="boy and girl between a lot of message mail or somethings svg image"/>
                    </div>
                </div>
            </div>
            <picture className={props.hasPic}>
                <source srcset={props.srcsetBotMoblie} media="(max-width: 700px)"/>
                <img src={props.srcBot} alt="svg bottom curve"/>
            </picture>
        </section>
    );
}

export default Section