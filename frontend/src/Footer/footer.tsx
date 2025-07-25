import "./footer.scss"
import Button from "../Button/Button.tsx";
const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="project_start">
                <div className="start_info">
                    <h1>Start a project</h1>
                </div>
                <div className="start_desc">
                    <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                    </p>
                </div>
                <div className="start_btn">
                    <Button text="Let's do this"/>
                </div>

            </div>
            <div className="header_logo">
                <a className="logo_text" href="#"> #
                    <span className="span1"> T </span>
                    <span className="dotted_color">.</span>
                </a>
            </div>
            <h2>Living, learning, & leveling up one day at a time.</h2>
            <div className="footer_icons">
                <a className="fa-brands fa-github" href="https://github.com/KolegaTatar" target="_blank"></a>
                <a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/wiktor-tatarynowicz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"></a>
                <a className="fa-regular fa-envelope" href="mailto:wiktor.tatarynowicz@gmail.com" target="_blank"></a>
            </div>
            <p className="copy_r">Copyright © 2024 Wiktor Tatarynowicz. All rights reserved.</p>
        </footer>
    )
}
export default Footer