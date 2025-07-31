import { useState } from "react";
import "./section_3.scss";
import Box from "../../box_project/box.tsx";
import Button from "../../Button/Button.tsx";

const Section_3 = () => {
    const [showHiddenProjects, setShowHiddenProjects] = useState(false);

    const toggleProjects = () => {
        setShowHiddenProjects((prev) => !prev);
    };

    return (
        <div className="section_3">
            <h2>My Recent Work</h2>
            <p>
                Here are a few past design projects I've worked on. Want to see more?{" "}
                <a href="mailto:wiktor.tatarynowicz@gmail.com">Email me.</a>
            </p>
            <div className="boxes_projects">
                <Box title={"SkyVision"} url={"../../src/images/sky_vision.webp"} link=""></Box>
                <Box title={"KW Inwentarz"} url={"../../src/images/kw.webp"} link=""></Box>
                <Box title={"Link Tree"} url={"../../src/images/link_tree.webp"} link="https://github.com/KolegaTatar/LinkBridge"></Box>
                <Box title={"TerraQuest"} url={"../../src/images/terraquest.webp"} link="https://terra-quest-delta.vercel.app/"></Box>
                <Box title={"Animaster"} url={"../../src/images/animaster.webp"} link="https://animaster.pl"></Box>
                <Box title={"Hendi B2B"} url={"../../src/images/hendi.webp"} link="http://elearning.hendi.com/login/"></Box>

                <div className={`boxes_projects_hidden ${showHiddenProjects ? "visible" : ""}`}>
                    <Box title={"TerraQuest"} url={"../../src/images/terraquest.webp"} link="https://terra-quest-delta.vercel.app/"></Box>
                    <Box title={"Animaster"} url={"../../src/images/animaster.webp"} link="https://animaster.pl"></Box>
                    <Box title={"Hendi B2B"} url={"../../src/images/hendi.webp"} link="http://elearning.hendi.com/login/"></Box>
                </div>
            </div>
            <Button text={showHiddenProjects ? "See less" : "See more"} onClick={toggleProjects} />
        </div>
    );
};

export default Section_3;
