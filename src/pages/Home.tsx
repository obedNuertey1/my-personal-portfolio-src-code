import PageIntroDescription from "../components/partials/pageDescription";
import ShowArticles from "../components/partials/showArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default ():JSX.Element =>{

    useEffect(()=>{
        // reset the scroll to the top when leaving the page
        return ()=>{
            window.scrollTo(0, 0)
        };
    }, []);

    const intro:any = {
        heading: "Hello, my name is Obed.",
        paragraph: "I am a Software Engineer based in Accra, Ghana. Currently I'm working on some personal projects"
    };

    const articles:any = [
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
    ];

    return (
        <>
            <div data-testid="home-section" id="home-section">
                <PageIntroDescription cssSectionClass="homepage-section" cssSectionId="introduction" heading={intro.heading} paragraph={intro.paragraph} />
                <section id="article" className="homepage-section pb-12">
                    <h2 id="article-header" className="article-section text-sm mb-12 font-bold text-blue-900">RECENT ARTICLES</h2>
                    <div id="article-body" className="article-section">
                        <ShowArticles articlesArr={articles} />
                    </div>
                    <Link to="/articles" className="article-section font-thin text-gray-600 hover:bg-gray-600 hover:text-white p-1 rounded text-sm"><span className="mr-1 hover:mr-3">more</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
                </section>
                <section id="projects" className="homepage-section pt-12">
                    <h2 className="project" id="project-head"></h2>
                    <div id="show-projects" className="project flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto">
                        <div className="current-projects">
                            <iframe  className="rounded-md shadow-md" src="https://merry-creponne-b3b2ec.netlify.app/" title="my-cats" allowFullScreen frameBorder={0} sandbox="allow-same-origin allow-scripts"></iframe>
                        </div>
                        <div id="current-projects-2" className="current-projects">
                            <iframe src="https://incomparable-jalebi-1f7abb.netlify.app/" className="rounded-md shadow-md" title="my-cats" allowFullScreen frameBorder={0} sandbox="allow-same-origin allow-scripts"></iframe>
                        </div>
                    </div>
                    <Link to="/projects" className="article-section font-thin text-gray-600 hover:shadow-md hover:bg-gray-600 hover:text-white p-1 rounded text-sm"><span className="mr-1 hover:mr-3">more</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
                </section>
            </div>
        </>
    );
};