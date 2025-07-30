import  "./project_planner.scss"
import Button from "../Button/Button.tsx";

const Project_planner = ()=>{
    return (
        <main className="main_planner_project">
            <div className="img_me">
                <img src="../../../src/images/me2.png" alt="Me"/>
            </div>
            <h2>I’m excited to learn about your project. Ready to get started?</h2>
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
                <div className="top_inputs">
                    <div className="input_1">
                        <label htmlFor="contact_name" className="typeOfProjet">Type of project</label>
                        <select id="contact_name" className="typeOfProjet" defaultValue="">
                            <option value="" disabled hidden></option>
                            <option value="Responsive_design">Responsive design</option>
                            <option value="Web_app">Web app</option>
                            <option value="Mobile_app">Mobile app</option>
                        </select>
                    </div>
                    <div className="input_1">
                        <label htmlFor="contact_email" className="Industry ">Industry</label>
                        <input type="text" id="industry"/>
                    </div>
                </div>
                <label htmlFor="contact_message" className="top_inputs_label">Message</label>
                <textarea id="contact_message" className="top_inputs_label"></textarea>
                <Button text="Submit" route="/contact"/>
            </form>
        </main>
    )
}
export default Project_planner