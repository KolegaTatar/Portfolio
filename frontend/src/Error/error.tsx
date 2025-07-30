import  "./error.scss"
import Button from "../Button/Button.tsx";

const Error = ()=>{
    return (
        <main className="main_error">
            <i className="fa-solid fa-compass"></i>
            <h2>Looks like you're lost</h2>
            <p>Maybe try a different page?</p>
            <Button text="Return Home" route="/"/>
        </main>
    )
}
export default Error