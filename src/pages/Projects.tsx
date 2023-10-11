import { useEffect } from "react";
import PageIntroDescription from "../components/partials/pageDescription";

export default ():JSX.Element => {

    useEffect(()=>{
        // Reset the scroll bar to the top when leaving the page
        return ()=>{
            window.scrollTo(0, 0);
        };
    });

    return (
        <>
            <div data-testid="projects" id="projects">
                <PageIntroDescription cssSectionClass="project-section" cssSectionId="" />
                <section className="project-section" id="projects-repo">
                    <figure className="project-card">
                        <div className="image-container">
                            <img src="" alt="" />
                        </div>
                        <figcaption className="image-caption"></figcaption>
                    </figure>
                </section>
            </div>
        </>
    );
};