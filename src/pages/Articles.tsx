import PageIntroDescription from "../components/partials/pageDescription";
import ShowArticles from "../components/partials/showArticles";
import { useEffect } from "react";
import $ from "jquery";
import {Helmet} from "react-helmet";

export default ():JSX.Element => {

    useEffect(() => {
        $("#articles").addClass("clicked");
        // reset the scroll position to the top when leaving this page
        return ()=>{
            $("#articles").removeClass("clicked");
            window.scrollTo(0, 0);
        };
      }, []);

    const heading:any = `Blog Posts`;
    const paragraph:any = "Essays, learning, and other miscellaneous goodies";

    const articles:any = [
        {time: "7/9/2023", $h3: "Environment Setup For TypeScript Development Crash Course🚀🚀", $href: "https://dev.to/obednuertey1/environment-setup-for-typescript-development-crash-course-3db4"},
        {time: "20/8/2023", $h3: "😎🤯Zoom Feature You Might Not Know About As A Newbie Developer", $href: "https://dev.to/obednuertey1/zoom-feature-you-might-not-know-about-as-a-newbie-developer-1437"},
        {time: "12/8/2023", $h3: "Jest testing for React Crash Course ⚛️🚀", $href: "https://dev.to/obednuertey1/jest-testing-for-react-crash-course-906"},
        {time: "--/--/----", $h3: "more articles coming soon", $href: ""},
        {time: "--/--/----", $h3: "more articles coming soon", $href: ""},
        {time: "--/--/----", $h3: "more articles coming soon", $href: ""},
        {time: "--/--/----", $h3: "more articles coming soon", $href: ""},
        {time: "--/--/----", $h3: "more articles coming soon", $href: ""}
    ];

    return (
        <>
            <Helmet>
                <title>Obed | Articles</title>
            </Helmet>
            <div data-testid="articles" id="articles" className="page">
                <PageIntroDescription cssSectionClass="article-section" cssSectionId="" heading={heading} paragraph={paragraph} />
                <section className="article-section">
                    <ShowArticles articlesArr={articles} />
                </section>
            </div>
        </>
    );
};