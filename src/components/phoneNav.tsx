import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLg, faLaptopCode, faNewspaper, faBriefcase, /*faPaperclip*/ } from "@fortawesome/free-solid-svg-icons";
import HeaderNavLinks from "./partials/headerLinks";

export default ({className}:any):JSX.Element => {
    const headerLinkTexts = {
        home: <article className="flex flex-col"><span id="phone-home-icon" className="phone-nav-icon relative"><FontAwesomeIcon icon={faHomeLg} className="text-2xl" /></span><span className="text-xs">HOME</span></article>,
        articles: <article className="flex flex-col"><span id="phone-articles-icon" className="phone-nav-icon relative"><FontAwesomeIcon icon={faNewspaper} className="text-2xl" /></span><span className="text-xs">ARTICLES</span></article>,
        projects: <article className="flex flex-col"><span id="phone-projects-icon" className="phone-nav-icon relative"><FontAwesomeIcon icon={faLaptopCode} className="text-2xl" /></span><span className="text-xs">PROJECTS</span></article>,
        work: <article className="flex flex-col"><span id="phone-work-icon" className="phone-nav-icon relative"><FontAwesomeIcon icon={faBriefcase} className="text-2xl" /></span><span className="text-xs">WORK</span></article>
    };

    const id= {
        home: "phone-home",
        articles: "phone-articles",
        projects: "phone-projects",
        work: "phone-work"
    };
    // <FontAwesomeIcon icon={faPaperclip} />
    return (
        <>
            <div data-testid="phone-nav" id="phone-nav" className={className} >
                <ul className="flex items-center justify-center gap-3">
                    <HeaderNavLinks linkTexts={headerLinkTexts} id={id} className="phone-nav-buttons" />
                </ul>
            </div>
        </>
    );
};