import "./button.scss";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
    text: string;
    route?: string;
    externalUrl?: string;
    onClick?: () => void;
    type?: "button" | "submit";
};

const Button = ({ text, route, externalUrl, onClick, type = "button" }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (route) {
            navigate(route);
        }
    };


    if (externalUrl) {
        return (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <button className="button" type={type}>{text}</button>
            </a>
        );
    }

    return (
        <button onClick={handleClick} className="button" type={type}>
            {text}
        </button>
    );
};

export default Button;
