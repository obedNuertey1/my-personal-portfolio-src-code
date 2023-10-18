import PageIntroDescription from "../components/partials/pageDescription";
import ShowArticles from "../components/partials/showArticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";
import { Helmet } from "react-helmet";

function handleRightIframeNav():void{
    let iframeWrapper:any = document.getElementById("show-projects");
    iframeWrapper.scrollTo(500, 0);
};

function handleLeftIframeNav():void{
    let iframeWrapper:any = document.getElementById("show-projects");
    iframeWrapper.scrollTo(0, 0);
};

const intro:any = {
    heading: "Hello, my name is Obed.",
    paragraph: "I am a Software Engineer based in Accra, Ghana. Currently I'm working on some personal projects"
};

const articles:any = [
    {time: "7/9/2023", $h3: "Environment Setup For TypeScript Development Crash Course🚀🚀", $href: "https://dev.to/obednuertey1/environment-setup-for-typescript-development-crash-course-3db4"},
    {time: "20/8/2023", $h3: "😎🤯Zoom Feature You Might Not Know About As A Newbie Developer", $href: "https://dev.to/obednuertey1/zoom-feature-you-might-not-know-about-as-a-newbie-developer-1437"},
];

const SecondSectionComponent = ({articles}:any):JSX.Element=>(
    <section id="article" className="homepage-section pb-12">
        <h2 id="article-header" className="article-section text-sm mb-12 font-bold text-blue-900">RECENT ARTICLES <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="dev.to" style={{width: "100px", display: "inline-block"}}/></h2>
        <div id="article-body" className="article-section">
            <ShowArticles articlesArr={articles} />
        </div>
        <Link to="/articles" className="article-section font-thin text-gray-600 hover:bg-gray-600 hover:text-white p-1 rounded text-sm select-none"><span className="mr-1 hover:mr-3">more</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
    </section>
);

const ThirdSectionComponent = ():JSX.Element=>(
    <section id="projects" className="homepage-section pt-12 relative">
        <div onClick={handleLeftIframeNav} className="iframe-nav absolute w-auto h-1/2 bottom-1/4 left-0 bg-gray-200 opacity-50 py-32 px-2 text-4xl text-gray-700 rounded-md"><p className="text-center"><FontAwesomeIcon icon={faArrowCircleLeft} /></p></div>
        <div onClick={handleRightIframeNav} className="iframe-nav absolute w-auto h-1/2 bottom-1/4 right-0 bg-gray-200 opacity-50 py-32 text-4xl text-gray-700 px-2 rounded-md"><p className="text-center"><FontAwesomeIcon icon={faArrowCircleRight} /></p></div>
        <h2 className="project" id="project-head"></h2>
        <div id="show-projects" className="project flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto max-w-w100 mx-auto select-none">
            <div className="current-projects">
                <iframe  className="rounded-md shadow-md" src="https://merry-creponne-b3b2ec.netlify.app/" title="my-cats" allowFullScreen frameBorder={0} sandbox="allow-same-origin allow-scripts"></iframe>
            </div>
            <div id="current-projects-2" className="current-projects">
                <iframe src="https://incomparable-jalebi-1f7abb.netlify.app/" className="rounded-md shadow-md" title="my-cats" allowFullScreen frameBorder={0} sandbox="allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
        <Link to="/projects" className="article-section font-thin text-gray-600 hover:shadow-md hover:bg-gray-600 hover:text-white p-1 rounded text-sm select-none"><span className="mr-1 hover:mr-3">more</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
    </section>
);

export default ():JSX.Element =>{

    
    useEffect(()=>{
        $("#main-home").addClass("clicked");
         const timeAnime:any =   (()=>(
                        setTimeout(()=>{
                            $("#phone-home-icon").addClass("phone-nav-clicked");
                            
                            setTimeout(()=>{
                                $("#phone-home-icon").addClass("phone-nav-shows");
                            }, 0);
                        }, 1000)
                    ))();
        // reset the scroll position to the top when leaving this page
        return ()=>{
            $("#main-home").removeClass("clicked");
            $("#phone-home-icon").removeClass("phone-nav-clicked").removeClass("phone-nav-shows");
            clearTimeout(timeAnime);
            window.scrollTo(0, 0);
        };
    }, []);


    return (
        <>
            <Helmet>
                <title>Obed | Home</title>
            </Helmet>
            <div data-testid="home-section" id="home-section" className="page">
                <PageIntroDescription cssSectionClass="homepage-section" cssSectionId="introduction" heading={intro.heading} paragraph={intro.paragraph} />
                <SecondSectionComponent articles={articles} />
                <ThirdSectionComponent />
            </div>
        </>
    );
};