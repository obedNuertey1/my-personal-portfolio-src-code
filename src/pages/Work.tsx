import PageIntroDescription from "../components/partials/pageDescription";
import { useEffect } from "react";
export default ():JSX.Element =>{

    useEffect(()=>{
        // reset the scroll position to the top when leaving the page
        return ()=>{
            window.scrollTo(0, 0);
        };
    });
    
    const intro:any = {
        heading: "Work",
        paragraph: "Thing's I've made or learned at the companies I have worked for."
    };


    return (
        <>
            <div data-testid="work" id="work">
                <PageIntroDescription cssSectionClass="work-section" cssSectionId="introduction" heading={intro.heading} paragraph={intro.paragraph}  />
                <section id="continuous-development" className="work-section">
                    <h3 id="watch-out" className="font-serif font-thin text-lg">Coming soon 😅</h3>
                </section>
            </div>
        </>
    );
};