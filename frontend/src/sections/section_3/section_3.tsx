import "./section_3.scss"
import Box from "../../box_project/box.tsx";
import Button from "../../Button/Button.tsx";

const Section_3 =()=>{
    return (
        <div className="section_3">
            <h2>My Recent Work</h2>
            <p>Here are a few past design projects I've worked on. Want to see more? <a href="mailto:wiktor.">Email me.</a></p>
            <div className="boxes_projects">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </div>
            <Button text="See more"/>
        </div>
    )
}

export default Section_3;