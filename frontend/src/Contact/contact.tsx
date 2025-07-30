import  "./contact.scss"
import Button from "../Button/Button.tsx";

const Contact = ()=>{
    return (
        <main className="main_contact">
            <div className="img_me">
                <img src="../../../src/images/me2.png" alt="Me"/>
            </div>
            <h2>Thanks for taking the time to reach out. How can I help you today?</h2>
            <form>
                <div className="top_inputs">
                    <div className="input_1">
                        <label htmlFor="contact_name" className="top_inputs_label">Name</label>
                        <input type="text" id="contact_name"/>
                    </div>
                    <div className="input_1">
                        <label htmlFor="contact_email" className="top_inputs_label">Email</label>
                        <input type="email" id="contact_email"/>
                    </div>
                </div>
                <label htmlFor="contact_message" className="top_inputs_label" >Message</label>
                <textarea id="contact_message" className="top_inputs_label"></textarea>
                <Button text="Submit" route="/contact"/>
            </form>
        </main>
    )
}
export default Contact