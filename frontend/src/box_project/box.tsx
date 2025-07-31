import "./box.scss";
import Button from "../Button/Button.tsx";

type BoxProps = {
    title: string;
    url: string;
    link ?: string ;

};

const Box = ({ title, url, link }: BoxProps) => {
    return (
    <div className="hover-card"
         style={{backgroundImage: `url(${url})`}}>
        <div className="hover-card__content">
            <h3>{title}</h3>
            <Button text="Visit Website >" externalUrl={link}></Button>

        </div>
        <div className="hover-card__initial">
            <span></span>
        </div>
    </div>
    );
};

export default Box;
