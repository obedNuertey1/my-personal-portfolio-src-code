import PageIntroDescription from "../components/partials/pageDescription";
import { useEffect } from "react";
import $ from "jquery";
import { Helmet } from "react-helmet";
export default ():JSX.Element =>{

    useEffect(()=>{
        $("#main-work").addClass("clicked");
        (()=>{
            setTimeout(()=>{
                $("#phone-work-icon").addClass("phone-nav-clicked");
                
                setTimeout(()=>{
                    $("#phone-work-icon").addClass("phone-nav-shows");
                }, 0);
            }, 1000);
        })();
        // reset the scroll position to the top when leaving this page
        return ()=>{
            $("#main-work").removeClass("clicked");
            $("#phone-work-icon").removeClass("phone-nav-clicked").removeClass("phone-nav-shows");
            window.scrollTo(0, 0);
        };
    });
    
    const intro:any = {
        heading: "Work",
        paragraph: "Thing's I've made or learned at the companies I have worked for."
    };


    return (
        <>
            <Helmet>
                <title>Obed | Work</title>
            </Helmet>
            <div data-testid="work" id="work" className="page">
                <PageIntroDescription cssSectionClass="work-section" cssSectionId="introduction" heading={intro.heading} paragraph={intro.paragraph}  />
                <section id="continuous-development" className="work-section">
                    <h3 id="watch-out" className="font-serif font-thin text-lg">Coming soon 😅</h3>
                </section>
            </div>
        </>
    );
};