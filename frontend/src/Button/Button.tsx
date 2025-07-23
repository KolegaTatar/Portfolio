import "./button.scss"
import { useNavigate, Link } from "react-router-dom";
import React from "react";


type ButtonProps = {
    text: string;
    route?: string;
    onClick?: () => void;
    type?: "button" | "submit";
};
const Button =({text, route, onClick}:ButtonProps)=>{
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            navigate(route);
        }
        window.scrollTo(0, 0);
    };
    return route ? (
        <Link to={route}>
            <button onClick={handleClick} className="button">{text}</button>
        </Link>
    ) : (
        <button className="button">{text}</button>
    );
}
export default Button;