import Courses from "../ui/Courses";
import CTASection from "../ui/Cta";
import MechCard from "../ui/MechCard";
import MechHero from "../ui/MechHero";
import MechSmallCard from "../ui/MechSmall";
import Mentor from "../ui/Mentor";
import ProjectsSection from "../ui/Projects";
import FAQSection from "../ui/Questions";
import WhyThisBootcamp from "../ui/Whythis";

export default function MechFinal(){
    return(
        <>
        <MechHero/>
        <MechCard/>
        <MechSmallCard/>
        <WhyThisBootcamp/>
        <Courses/>
        <ProjectsSection/>
        <Mentor/>
        <FAQSection/>
        <CTASection/>
        </>
    )
}