import { useEffect } from "react";
import PageIntroDescription from "../components/partials/pageDescription";
import ShowProjects from "../components/partials/showProjects";
import $ from "jquery";

export default ():JSX.Element => {

    useEffect(()=>{
        $("#projects").addClass("clicked");
        // reset the scroll position to the top when leaving the page
        return ()=>{
            $("#projects").removeClass("clicked");
            window.scrollTo(0, 0);
        };
    }, []);

    const introText = () => ({
        heading: "Experiments",
        paragraph: "Interactions, widgets and other things I have been tinkering with."
    });

    return (
        <>
            <div data-testid="projects" id="projects" className="page">
                <PageIntroDescription cssSectionClass="project-section" cssSectionId="" heading={introText().heading} paragraph={introText().paragraph} />
                <section className="project-section flex flex-row flex-wrap justify-center items-center gap-10" id="projects-repo">
                    <ShowProjects />
                </section>
            </div>
        </>
    );
};