import './header.scss';
import Button from "../Button/Button.tsx";

const Header = ()=>{
    return (
        <header className="header">
            <div className="header_logo">
                <a className="logo_text"> #
                    <span className="span1"> T </span>
                    <span className="dotted_color">.</span>
                </a>
            </div>

            <div className="header_content">
                <Button text="Say Hello"/>

            </div>


        </header>
)
}
export default Header