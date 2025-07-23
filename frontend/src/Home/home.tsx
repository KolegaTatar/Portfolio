import Section_1 from "../sections/section_1/section_1.tsx";
import Section_2 from "../sections/section_2/section_2.tsx";
import  "./home.scss"
import Section_3 from "../sections/section_3/section_3.tsx";
import Section_4 from "../sections/section_4/section_4.tsx";

const Home = ()=>{
    return (
        <main className="main_home">
            <Section_1></Section_1>
            <Section_2></Section_2>
            <Section_3></Section_3>
            <Section_4></Section_4>
        </main>
    )
}
export default Home