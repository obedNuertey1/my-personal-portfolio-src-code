import { useEffect } from "react";
import PageIntroDescription from "../components/partials/pageDescription";
import myImage from "../assets/images/large/capture.jpg"

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
                    <figure className="project-card flex flex-col rounded-lg w-52 h-auto shadow-lg shadow-black">
                        <img className="img-tag w-full rounded-lg rounded-br-none rounded-bl-none" src={myImage} alt="me" />
                        <figcaption className="image-caption grid grid-rows-2 grid-cols-1 place-content-center gap-1">
                            <div className="caption-text grid grid-cols-2 grid-rows-1 place-conent-center border-b border-gray-300 py-2" id="caption-links">
                                <div className="caption-link text-center" id="get-code"><a href="" rel="noreferrer">lskjdlkfj</a></div>
                                <div className="caption-link text-center" id="visit-page"><a href="" rel="noreferrer">slkjdflksjd</a></div>
                            </div>
                            <div className="caption-text text-center py-2" id="caption-gist">ONe Project</div>
                        </figcaption>
                    </figure>
                </section>
            </div>
        </>
    );
};