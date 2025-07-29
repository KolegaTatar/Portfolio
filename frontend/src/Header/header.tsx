import './header.scss';
import Button from "../Button/Button.tsx";
import {useLocation } from "react-router-dom";


const Header = ()=>{

    const url = useLocation();
    const location =url.pathname;

    if(location =="/contact"){
        return (
            <header className="header">
                <div className="header_logo">
                    <a className="logo_text"> #
                        <span className="span1"> T </span>
                        <span className="dotted_color">.</span>
                    </a>
                </div>

                <div className="header_content">
                    {/*<a className="fa-solid fa-arrow-rotate-left"></a>*/}
                    <a className="fa-solid fa-xmark" href="/"></a>
                </div>


            </header>
        )
    } else {
        return (
            <header className="header">
                <div className="header_logo">
                    <a className="logo_text"> #
                        <span className="span1"> T </span>
                        <span className="dotted_color">.</span>
                    </a>
                </div>

                <div className="header_content">
                    <Button text="Say Hello" route="/contact"/>

                </div>


            </header>
        )
    }

}
export default Header