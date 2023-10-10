import PageIntroDescription from "../components/partials/pageDescription";
import ShowArticles from "../components/partials/showArticles";

export default ():JSX.Element => {
    const heading:any = "Blog Posts";
    const paragraph:any = "Essays, learning, and other miscellaneous goodies";

    const articles:any = [
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""},
        {time: "10/4/2022", $h3: "Interesting AI Articles & Links", $href: ""}
    ];

    return (
        <>
            <div data-testid="articles" id="articles">
                <PageIntroDescription cssSectionClass="article-section" cssSectionId="" heading={heading} paragraph={paragraph} />
                <section className="article-section">
                    <ShowArticles articlesArr={articles} />
                </section>
            </div>
        </>
    );
};