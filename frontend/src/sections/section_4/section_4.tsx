import "./section_4.scss"
import Box from "../../box_project/box.tsx";

const Section_4 =()=>{
    return (
        <div className="section_4">
            <h2>I'm proud to have collaborated with some awesome companies:</h2>
            <div className="helps_firms">
                <Box title={"CCNA"} url={"../../src/images/ccna.webp"}></Box>
                <Box title={"IT Essential"} url={"../../src/images/ite.webp"}></Box>
                <Box title={"IT Essential"} url={"../../src/images/ccna.webp"}></Box>
            </div>
        </div>
    )
}
export default Section_4;