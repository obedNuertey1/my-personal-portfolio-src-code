import HomepageDescription from "../components/partials/homepageDescription";
import PageDescriber from "../components/namespaces/PageDescriber";

export default ():JSX.Element =>{

    const className:PageDescriber.IcssClass<string> = {
        introduction: "homepage-section",
        introHeading: "intro-children",
        introBody: "intro-children"
    };

    const id:PageDescriber.IcssId = {
        introduction: "introduction",
        introHeading: "intro-heading",
        introBody: "intro-body"
    };

    return (
        <>
            <div data-testid="home-section">
                <HomepageDescription className={className} id={id} />
                <section id="article" className="homepage-section">
                    <h2 id="article-header" className="article-section">RECENT ARTICLES</h2>
                    <div id="article-body" className="article-section">
                        <article className="sample-article">
                            <time id="article-time" className="article-elem"></time>
                            <h3 id="article-topic" className="article-elem"></h3>
                        </article>
                        <article className="sample-article">
                            <time id="article-time" className="article-elem"></time>
                            <h3 id="article-topic" className="article-elem"></h3>
                        </article>
                    </div>
                    <a className="article-section"></a>
                </section>
                <section id="projects" className="homepage-section">
                    <h2 className="project" id="project-head"></h2>
                    <div id="show-projects" className="project">
                        <div className="current-projects">
                            <iframe></iframe>
                        </div>
                        <div className="current-projects">
                            <iframe></iframe>
                        </div>
                    </div>
                    <a className="project"></a>
                </section>
            </div>
        </>
    );
};